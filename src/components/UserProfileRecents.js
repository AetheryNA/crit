const UserProfileRecents = () => {
  return (
    <div className="user-profile-recents">
      <h3> Recently Played </h3>
      <div className="user-profile-recents__game-list flex flex-row justify-between">
        <div className="user-profile-recents__game">
          <img 
            src="img/lol.svg" 
            alt="" 
          />
        </div>
      </div>
    </div>
  )
}

export default UserProfileRecents
