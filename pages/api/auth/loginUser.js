import nc from 'next-connect'
import prisma from '../../../lib/adapters/prismaClient'
import bcrypt from 'bcrypt'
import withSession from '../../../lib/auth/session'

const handler = nc()
  .use(withSession)
  .post(async (req, res) => {
    const body = req.body

    const loggedUser = await prisma.users.findUnique({
      where: {
        username: body.username,
      },
      select: {
        id: true,
        avatar_url: true,
        username: true,
        password: true,
        email: true,
      }
    })

    const retrievedPassword = loggedUser.password

    const validatePassword = await bcrypt.compare(body.password, retrievedPassword)

    if(!validatePassword)
      throw new Error('Wrong password')

    req.session.set('user', {
      id: loggedUser.id,
      avatar_url: loggedUser.avatar_url,
      username: loggedUser.username,
      email: loggedUser.email
    })

    await req.session.save()

    return res
      .status(200)
      .json({
        message: 'Logged in',
        data: loggedUser
      })
  })

export default handler
