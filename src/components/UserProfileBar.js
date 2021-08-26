import UserProfileSettings from "../../src/components/UserProfileSettings"
import UserProfileAddFriend from "./UserProfileAddFriend"

const UserProfileBar = ({ loggedUser, currentUser, friends }) => {
  let foundFriend

  friends.getFriends.map((friend) => {
    if(currentUser[0].id == friend.friend_id)
      return foundFriend = friend.id
  })

  return (
    <>
    <div className="user-profile-bar flex flex-row items-center">
      <div className="user-profile-bar__pfp flex flex-row items-center">
        <img 
          src='/img/pfp.png'
        />

        <h3> { currentUser || !currentUser === '' ? currentUser[0].username : 'Not found'} </h3>
      </div>

      { loggedUser && (currentUser[0].id === loggedUser.id ? <UserProfileSettings /> : ( foundFriend ? '' : <UserProfileAddFriend loggedUser={loggedUser} currentUser={currentUser}/>) )}

    </div>
    </>
  )
}

export default UserProfileBar
