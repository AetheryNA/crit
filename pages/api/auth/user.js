import nc from 'next-connect'
import { withSession } from '../../../lib/auth/session'

const handler = nc()
  .use(withSession)
  .get(async(req, res) => {
    try {
      const user = req.session.get('user')

      if (user) {
        return res.json({
          LoggedIn: true,
          ...user
        })
      } else {
        return res.json({
          LoggedIn: false
        })
      }
    } catch(e) {
      console.log(e)
    }
  })

export default handler;
