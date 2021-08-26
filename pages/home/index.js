import PostItem from '../../src/components/PostItem'
import InnerdashboardHeader from '../../src/components/InnerdashboardHeader'
import TopCards from '../../src/components/TopCards'
import HomeFriends from '../../src/components/HomeFriends'
import AdvertisementBlock from '../../src/components/AdvertisementBlock'
import { withSessionSSR } from '../../lib/auth/session'

const index = ({ getPosts, getAllFriends }) => {
  return (
    <>
      <div className="dashboard-left">
        <InnerdashboardHeader title={'Recent Activity'} iconHome={true}/>
        <PostItem postItems={getPosts} />
      </div>
      <div className="dashboard-right">
        <TopCards />

        <div className="dashboard-right__home-section">
          <InnerdashboardHeader title={'Your friends'} iconFriends={true}/>
          <HomeFriends friends={getAllFriends.getFriends}/>
        </div>
        
        <div className="dashboard-right__home-section">
          <InnerdashboardHeader title={'People you might find interesting'} iconFriends={true}/>
          { !getAllFriends ? <HomeFriends /> : <p> Trouble loading this :/ </p> }
        </div>

        <div className="dashboard-right__home-section">
          <InnerdashboardHeader title={'Advertisement'} />
          <AdvertisementBlock />
        </div>
      </div>
    </>
  )
}

export const getServerSideProps = withSessionSSR(async function ({ req, res }) {
  const user = req.session.get('user')

  const [getAllPostsRes, getAllFriendsRes] = await Promise.all([
    fetch(`http://localhost:3000/api/getUserPosts?user_id=${user.id}&_limit=5`),
    fetch(`http://localhost:3000/api/getFriends?user_id=${user.id}`),
  ])

  const [getAllPosts, getAllFriends] = await Promise.all([
    getAllPostsRes.json(),
    getAllFriendsRes.json(),
  ])

  const getPosts = getAllPosts.users[0].posts

  return {
    props: { 
      getPosts,
      getAllFriends,
    },
  }
})

export default index
