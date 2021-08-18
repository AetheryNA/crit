import PostItem from '../../src/components/PostItem'
import InnerdashboardHeader from '../../src/components/InnerdashboardHeader'
import TopCards from '../../src/components/TopCards'
import HomeFriends from '../../src/components/HomeFriends'
import AdvertisementBlock from '../../src/components/AdvertisementBlock'
import { withSessionSSR } from '../../lib/auth/session'

const index = ({ getPosts }) => {
  return (
    <>
      <div className="dashboard-left">
        <InnerdashboardHeader title={'Recent Activity'} iconHome={true}/>
        <PostItem postItems={getPosts} />
      </div>
      <div className="dashboard-right">
        <TopCards />

        <div className="dashboard-right__home-section">
          <InnerdashboardHeader title={'Whos online'} iconFriends={true}/>
          <HomeFriends />
        </div>
        
        <div className="dashboard-right__home-section">
          <InnerdashboardHeader title={'People you might find interesting'} iconFriends={true}/>
          <HomeFriends />
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
  const resURL = await fetch(`http://localhost:3000/api/getUserPosts?user_id=${user.id}&_limit=5`)
  const data = await resURL.json()
  const getPosts = data.users[0].posts

  return {
    props: { 
      getPosts
    },
  }
})

export default index
