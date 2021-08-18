import nc from 'next-connect'
import { withSession } from '../../../lib/auth/session'

const handler = nc()
  .use(withSession)
  .post( async (req, res) => {
    req.session.destroy()
    res.json({
      message: "Logged off",
      LoggedIn: false,
    })
  })

export default handler
