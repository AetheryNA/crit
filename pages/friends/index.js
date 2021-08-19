import InnerdashboardHeader from '../../src/components/InnerdashboardHeader'
import FriendsList from '../../src/components/Friendslist'

const index = () => {
  return (
    <>
      <div className="dashboard-left">
        <InnerdashboardHeader iconFriends={true} />
        <FriendsList />
      </div>
    </>
  )
}

export default index
