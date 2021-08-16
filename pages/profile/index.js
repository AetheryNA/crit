import UserBanner from "../../src/components/UserBanner"
import UserProfileBar from "../../src/components/UserProfileBar"
import UserProfileFriends from "../../src/components/UserProfileFriends"
import PostItem from "../../src/components/PostItem"
import Feed from "../../public/img/icons/feed.svg"
import Friends from "../../public/img/icons/friends.svg"

const index = ({ postItems }) => {
  return (
    <>
      <UserBanner />
      <div className="profile-pg">
        <UserProfileBar />
        <div className="profile-pg__dashboard flex lg:flex-row flex-col">
          <div className="dashboard-left">
            <h3 className="flex flex-row">
              <Feed />
              Your Feed
            </h3>
            <PostItem postItems={postItems.findPosts}/>
          </div>
          <div className="dashboard-right">
            <h3 className="flex flex-row">
              <Friends />
              Your Friends
            </h3>
            <UserProfileFriends />
          </div>
        </div>
      </div>
    </>
  )
}

export const getStaticProps = async() => {
  const res = await fetch('http://localhost:3000/api/getAllPosts')
  const postItems = await res.json()

  return {
    props: {
      postItems
    }
  }
}

export default index
