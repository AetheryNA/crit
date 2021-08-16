import Head from 'next/head'
import UserBanner from '../../../src/components/UserBanner'
import UserProfileBar from '../../../src/components/UserProfileBar'
import PostItem from '../../../src/components/PostItem'
import UserProfileFriends from '../../../src/components/UserProfileFriends'
import Feed from "../../../public/img/icons/feed.svg"
import Friends from "../../../public/img/icons/friends.svg"

const userProfile = ({ userPosts }) => {
  const userPost = userPosts.users[0]

  return (
    <>
      <Head>
        <title> CRIT | { userPost ? userPost.username : 'Loading' } </title>
      </Head>

      <UserBanner />
      <div className="profile-pg">
        <UserProfileBar currentUser={userPosts.users}/>
        <div className="profile-pg__dashboard flex lg:flex-row flex-col">
          <div className="dashboard-left">
            <h3 className="flex flex-row">
              <Feed />
              Their Activity
            </h3>
            <PostItem postItems={userPost.posts}/>
          </div>
          <div className="dashboard-right">
            <h3 className="flex flex-row">
              <Friends />
              Their Friends
            </h3>
            <UserProfileFriends />
          </div>
        </div>
      </div>
    </>
  )
}

export const getServerSideProps = async(context) => {
  const res = await fetch(`http://localhost:3000/api/getUserPosts?user_id=${context.params.uid}`)
  const userPosts = await res.json()

  return {
    props : {
      userPosts
    }
  }
}

export default userProfile
