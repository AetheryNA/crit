import nc from 'next-connect'
import prisma from '../../lib/adapters/prismaClient'
import { withSession } from '../../lib/auth/session'

const handler = nc()
  .use(withSession)
  .post(async (req, res) => {
    const data = req.body

    await prisma.usersRelationships.create({
      data : {
        user_id : data.user_id,
        friend_id : data.friend_id,
      }
    })

    return res.json({
      message: "Success, friend added"
    })
  })

export default handler
