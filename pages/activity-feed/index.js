import InnerdashboardHeader from '../../src/components/InnerdashboardHeader'
import PostItem from '../../src/components/PostItem'

const index = ({ postItems }) => {
  return (
    <>
      <div className="dashboard-left">
        <InnerdashboardHeader />
        <PostItem postItems={postItems} />
      </div>
      <div className="dashboard-right dashboard-right--small">

      </div>
    </>
  )
}

export const getStaticProps = async() => {
  const res = await fetch('http://localhost:3000/api/getAllPosts')
  const getAllPosts = await res.json()
  const postItems = getAllPosts.findPosts

  return {
    props: {
      postItems
    }
  }
}

export default index
