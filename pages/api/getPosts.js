import nc from 'next-connect'
import prisma from '../../lib/adapters/prismaClient'

const handler = nc()
  .get(async(req, res) => {
    const query = req.query

    const posts = await prisma.posts.findUnique({
      where: {
        post_id: parseInt(query.post_id)
      },
      include : {
        author : true
      }
    })

    if (!posts) {
      return res.status(404).end('not found')
    }

    return res.json(
      posts
    )
  })

export default handler
