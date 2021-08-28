import multer from 'multer'

const sendToServer = (path) => {
  const upload = multer({
    storage: multer.diskStorage({
      destination: path,
      filename: (req, file, cb) => cb(null, file.originalname),
    })
  })

  return upload
}

export default sendToServer
