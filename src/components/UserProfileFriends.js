const UserProfileFriends = ({ friends }) => {
  const allFriends = friends.map((friend, index) => {
    return (
      <a href={`/profile/user/${friend.friends.id}`} key={index} className="flex flex-row items-center">
        {friend.friends.avatar_url ?
          <img 
            src={`/${friend.friends.avatar_url}`}
          /> 
          : 
          <img 
            src="/img/pfp.png"
          />
        }
        <p> {friend.friends.username} </p>
      </a>
    )
  })

  return (
    <div className="user-profile-friends">
      <div className="user-profile-friends__friend flex flex-row">
        { allFriends && ( allFriends.length != 0 ? allFriends : <p> Couldn't find anything! </p>)}
      </div>
    </div>
  )
}

export default UserProfileFriends
