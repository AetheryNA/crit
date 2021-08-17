import nc from 'next-connect'
import prisma from '../../lib/adapters/prismaClient'

const handler = nc()
  .get(async(req, res) => {
    const query = req.query

    if (query._limit === undefined) {
      query._limit = 1000
    }

    const users = await prisma.users.findMany({
      take : parseInt(query._limit),
      include : {
        posts : {
          select : {
            author : true,
            content : true,
            post_id : true,
            user_id : true,
            image_url : true,
          }
        }
      },
      where : {
        id : parseInt(query.user_id)
      }
    })

    return res.json({
      users
    })
  })


export default handler
