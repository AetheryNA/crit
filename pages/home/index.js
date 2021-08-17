import PostItem from '../../src/components/PostItem'
import InnerdashboardHeader from '../../src/components/InnerdashboardHeader'
import TopCards from '../../src/components/TopCards'
import HomeFriends from '../../src/components/HomeFriends'
import AdvertisementBlock from '../../src/components/AdvertisementBlock'

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

export const getStaticProps = async() => {
  const res = await fetch('http://localhost:3000/api/getUserPosts?user_id=1')
  const data = await res.json()
  const getPosts = data.users[0].posts

  return {
    props : {
      getPosts
    }
  }
}

export default index
