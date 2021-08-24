import Message from '../../public/img/icons/message.svg'

const FriendsList = ({ allFriends }) => {
  const currentUserFriends = allFriends.getFriends

  const friendsArray = currentUserFriends.map((friend, index) => {
    return (
      <li className="friends-list__friend flex flex-row items-center" key={index}>
        <a href={`/profile/user/${friend.friends.id}`} className="flex flex-row items-center">
          {friend.friends.avatar_url == "" ?
            <img 
              className="rounded-full" 
              src="/img/pfp.png"
            />
            :
            <img 
              className="rounded-full" 
              src={`/${friend.friends.avatar_url}`}
            />
          }
          <p> {friend.friends.username} </p>
        </a>
        <div className="friends-list__msg ml-auto">
          <Message />
        </div>
      </li>
    )
  })

  return (
    <div className="friends-list">
      <ul>
        { friendsArray }
      </ul>
    </div>
  )
}

export default FriendsList
