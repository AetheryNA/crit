import nc from 'next-connect'
import prisma from '../../lib/adapters/prismaClient'
import { withSession } from '../../lib/auth/session'

const handler = nc()
  .use(withSession)
  .get(async(req, res) => {
    const query = req.query

    const getFriends = await prisma.usersRelationships.findMany({
      where: {
        user_id: parseInt(query.user_id)
      },
      include: {
        friends: {
          select : {
            id: true,
            username: true,
            avatar_url: true,
            email: true,
            usersRelationships_friends: true,
          }
        },
      },
    })

    return res.json({
      getFriends
    })
  })

export default handler
