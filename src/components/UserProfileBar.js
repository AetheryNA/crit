import useUser from "../../lib/auth/useUser"
import UserProfileSettings from "../../src/components/UserProfileSettings"

const UserProfileBar = ({ currentUser }) => {
  const { user } = useUser()

  return (
    <>
    <div className="user-profile-bar flex flex-row items-center">
      <div className="user-profile-bar__pfp flex flex-row items-center">
        { currentUser.avatar_url ? 
          <img 
            src={ '/' + currentUser.avatar_url }
          /> :
          <img 
            src='/img/pfp.png'
          />
        }

        <h3> { currentUser || !currentUser === '' ? currentUser.username : 'Not found'} </h3>
      </div>

      { user && (currentUser.id === user.id ? <UserProfileSettings currentUser={currentUser} /> : '')}

    </div>
    </>
  )
}

export default UserProfileBar
