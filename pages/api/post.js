import nc from 'next-connect'
import { withSession } from '../../lib/auth/session'
import Post from '../../lib/models/post'
import multer from 'multer'

const upload = multer({
  storage: multer.diskStorage({
    destination: './public/uploads',
    filename: (req, file, cb) => cb(null, file.originalname),
  })
})

const fileUpload = upload.single('file')

const handler = nc()
  .use(fileUpload)
  .use(withSession)
  .post(async(req, res) => {
    const data = req.body
    
    let imageData = {
      image_url : '',
    }

    if (req.file) {
      const filePath = req.file.path
      const newFilePath = filePath.replace(/public.?/, '')

      imageData = {
        image_url: newFilePath
      }
    }

    const postingData = {
      content: data.content,
      like_count: parseInt(data.like_count),
    }

    const user = req.session.get('user')
    
    const postData = Object.assign({user_id : user.id}, imageData, postingData)

    const newPost = new Post(postData)

    await newPost.createPost().catch((err) => {
      return res
        .status(400)
        .json({
          message: 'Something went wrong',
          error: err,
        })
    })

    return res.json({
      message: 'post done'
    })
  })

export default handler

export const config = {
  api: {
    bodyParser: false,
  },
};
