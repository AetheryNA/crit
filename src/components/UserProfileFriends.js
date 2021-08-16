const UserProfileFriends = () => {
  return (
    <div className="user-profile-friends">
      <div className="user-profile-friends__friend flex flex-row justify-between">
        <a href="/" className="flex flex-row items-center">
          <img 
            src="/img/pfp.png" 
            alt="" 
          />
          <p> Alice Prisma </p>
        </a>
        <a href="/" className="flex flex-row items-center">
          <img 
            src="/img/pfp.png" 
            alt="" 
          />
          <p> Alice Prisma </p>
        </a>
        <a href="/" className="flex flex-row items-center">
          <img 
            src="/img/pfp.png" 
            alt="" 
          />
          <p> Alice Prisma </p>
        </a>
      </div>
    </div>
  )
}

export default UserProfileFriends
