import InnerdashboardHeader from '../../src/components/InnerdashboardHeader'
import FriendsList from '../../src/components/Friendslist'
import { withSessionSSR } from '../../lib/auth/session'

const index = ({ getAllFriends }) => {
  return (
    <>
      <div className="dashboard-left">
        <InnerdashboardHeader iconFriends={true} />
        <FriendsList allFriends={getAllFriends}/>
      </div>
    </>
  )
}

export const getServerSideProps = withSessionSSR( async({ req, res }) => {
  const user = req.session.get('user')

  const getFriends = await fetch(`http://localhost:3000/api/getFriends?user_id=${user.id}`)
  const getFriendsData = await getFriends.json()

  return {
    props : {
      getAllFriends : getFriendsData
    }
  }
})

export default index
