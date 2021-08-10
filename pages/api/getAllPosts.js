import nc from 'next-connect'
import withSession from '../../lib/auth/session'
import prisma from '../../lib/adapters/prismaClient'

const handler = nc()
  .use(withSession)
  .get(async(req, res) => {
    const findPosts = await prisma.posts.findMany({
      include : {
        author: true
      }
    }).catch((err) => {
      res.json({
        message: "Something went wrong",
        err : err,
      })
    })

    return res.json({
      findPosts
    })
  })

export default handler
