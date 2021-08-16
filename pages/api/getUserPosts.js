import nc from 'next-connect'
import prisma from '../../lib/adapters/prismaClient'

const handler = nc()
  .get(async(req, res) => {
    const data = req.query

    const users = await prisma.users.findMany({
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
        id : parseInt(data.user_id)
      }
    })

    return res.json({
      users
    })
  })


export default handler
