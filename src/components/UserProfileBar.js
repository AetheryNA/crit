import useUser from "../../lib/auth/useUser"
import UserProfileSettings from "../../src/components/UserProfileSettings"

const UserProfileBar = ({ currentUser }) => {
  const { user } = useUser()

  return (
    <>
    <div className="user-profile-bar flex flex-row items-center">
      <div className="user-profile-bar__pfp flex flex-row items-center">
        <img 
          src='/img/pfp.png'
        />

        <h3> { currentUser || !currentUser === '' ? currentUser[0].username : 'Not found'} </h3>
      </div>

      { user && (currentUser[0].id === user.id ? <UserProfileSettings /> : '')}

    </div>
    </>
  )
}

export default UserProfileBar
