import { withRouter } from 'next/router'
import dashboardHeaderTitle from '../helpers/dashboardTitle'
import Feed from '../../public/img/icons/feed.svg'
import AddPost from './AddPost'

const InnerdashboardHeader = ({ router }) => {
  return (
    <div className="dashboard-header relative">
      <div className="dashboard-header__title">
        <Feed />
        <h3> { dashboardHeaderTitle(router) } </h3> 
      </div>

      { dashboardHeaderTitle(router) === 'activity feed' ?
        <AddPost /> 
        :
        null
      }
    </div>
  )
}

export default withRouter(InnerdashboardHeader)
