import Thread from "../../../src/components/Thread"
import InnerdashboardHeader from '../../../src/components/InnerdashboardHeader'

const index = ({ postData }) => {
  return (
    <div className="dashboard-left">
      <InnerdashboardHeader iconActivity={true} title={'thread'}/>
      { postData && ( <Thread postData={postData}/> )}
    </div>
  )
}

export const getServerSideProps = async(context) => {
  const res = await fetch(`http://localhost:3000/api/getPosts?post_id=${context.params.pid}`)
  
  if (res.status == 404) {
    return {
      notFound : true
    }
  }
  
  const data = await res.json()

  return {
    props : {
      postData : data,
    }
  }
}

export default index
