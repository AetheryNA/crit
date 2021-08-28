import Head from 'next/head'
import UserBanner from '../../../src/components/UserBanner'
import UserProfileBar from '../../../src/components/UserProfileBar'
import PostItem from '../../../src/components/PostItem'
import UserProfileFriends from '../../../src/components/UserProfileFriends'
import Feed from "../../../public/img/icons/feed.svg"
import Friends from "../../../public/img/icons/friends.svg"
import useUser from '../../../lib/auth/useUser'

const userProfile = ({ fetchedUserData }) => {
  const { user } = useUser()
  const userData = fetchedUserData.users

  return (
    <>
      <Head>
        <title> CRIT | { user && ( userData.username === user.username ? "Me" : userData.username)} </title>
      </Head>

      <UserBanner />
      <div className="profile-pg">
        <UserProfileBar currentUser={fetchedUserData && (userData)}/>
        <div className="profile-pg__dashboard flex lg:flex-row flex-col">
          <div className="dashboard-left">
            <h3 className="flex flex-row">
              <Feed />
              { user && (userData.id === user.id ? "Your Feed" : "Their Feed")}
            </h3>
            <PostItem postItems={fetchedUserData && (userData.posts)}/>
          </div>
          <div className="dashboard-right">
            <h3 className="flex flex-row">
              <Friends />
              { user && (userData.id === user.id ? "Your Friends" : "Their Friends")}
            </h3>
            <UserProfileFriends />
          </div>
        </div>
      </div>
    </>
  )
}

export const getServerSideProps = async(context) => {
  const res = await fetch(`http://localhost:3000/api/getUser?user_id=${context.params.uid}`)
  const fetchedUserData = await res.json()

  return {
    props : {
      fetchedUserData,
      fallback: false
    }
  }
}

export default userProfile
