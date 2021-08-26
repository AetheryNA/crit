const HomeFriends = ({ friends }) => {
  const allFriends = friends.map((friend, index) => {;
    return (
      <a href={`/profile/user/${friend.friend_id}`} className="flex flex-row items-center" key={index}>
        { friend.friends.avatar_url = "" ? 
          <img 
            src="./img/pfp.png"
          />
          :
          <img 
            src="./img/pfp.png"
          />
        }
        
        <p> {friend.friends.username} </p>
      </a>
    )
  })

  return (
    <>
      <div className="user-profile-friends">
        <div className="user-profile-friends__friend flex flex-row">
          {allFriends ? allFriends : <p>Couldn't find anything!</p>}
        </div>
      </div>
    </>
  )
}

export default HomeFriends
