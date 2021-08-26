import Head from 'next/head'
import UserBanner from '../../../src/components/UserBanner'
import UserProfileBar from '../../../src/components/UserProfileBar'
import PostItem from '../../../src/components/PostItem'
import UserProfileFriends from '../../../src/components/UserProfileFriends'
import Feed from "../../../public/img/icons/feed.svg"
import Friends from "../../../public/img/icons/friends.svg"
import { withSessionSSR } from '../../../lib/auth/session'

const userProfile = ({ userPosts, getFriends, user, loggedUserFriends }) => {
  const userPost = userPosts.users[0]
  const friends = getFriends.getFriends

  return (
    <>
      <Head>
        <title> CRIT | { user && ( userPost.username === user.username ? "Me" : userPost.username)} </title>
      </Head>

      <UserBanner />
      <div className="profile-pg">
        <UserProfileBar currentUser={userPosts && (userPosts.users)} loggedUser={user} friends={loggedUserFriends}/>
        <div className="profile-pg__dashboard flex lg:flex-row flex-col">
          <div className="dashboard-left">
            <h3 className="flex flex-row">
              <Feed />
              { user && (userPost.id === user.id ? "Your Feed" : "Their Feed")}
            </h3>
            <PostItem postItems={userPosts && (userPost.posts)}/>
          </div>
          <div className="dashboard-right">
            <h3 className="flex flex-row">
              <Friends />
              { user && (userPost.id === user.id ? "Your Friends" : "Their Friends")}
            </h3>
            <UserProfileFriends friends={friends}/>
          </div>
        </div>
      </div>
    </>
  )
}

export const getServerSideProps = withSessionSSR(async function (context) {
  const { req } = context
  const user = req.session.get('user')

  const [userPostsRes, getFriendsRes, loggedUserFriendsRes] = await Promise.all([
    fetch(`http://localhost:3000/api/getUserPosts?user_id=${context.params.uid}`),
    fetch(`http://localhost:3000/api/getFriends?user_id=${context.params.uid}`),
    fetch(`http://localhost:3000/api/getFriends?user_id=${user.id}`)
  ])

  const [userPosts, getFriends, loggedUserFriends] = await Promise.all([
    userPostsRes.json(),
    getFriendsRes.json(),
    loggedUserFriendsRes.json()
  ])

  return {
    props : {
      userPosts,
      getFriends,
      loggedUserFriends,
      user,
      fallback: false
    }
  }
})

export default userProfile
