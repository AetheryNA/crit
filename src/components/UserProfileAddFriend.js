import AddFriend from '../../public/img/icons/addFriendwCircle.svg'
import axios from 'axios'

const UserProfileAddFriend = ({ loggedUser, currentUser }) => {
  const userData = {
    user_id : loggedUser.id,
    friend_id : currentUser[0].id,
  }

  const addFriend = async(e) => {
    e.preventDefault()

    axios({
      method: "POST",
      url: "http://localhost:3000/api/addFriend",
      data: userData
    }).then(() => {
      console.log('request done');
    })
  }

  return (
    <button className="user-profile-add-friend__button flex items-center justify-center ml-auto z-10" onClick={addFriend}>
      <AddFriend />
    </button>
  )
}

export default UserProfileAddFriend
