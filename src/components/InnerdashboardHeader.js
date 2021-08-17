import { withRouter } from 'next/router'
import { useState } from 'react'
import dashboardHeaderTitle from '../helpers/dashboardTitle'
import Home from '../../public/img/icons/home.svg'
import Feed from '../../public/img/icons/feed.svg'
import Tag from '../../public/img/icons/tag.svg'
import Friends from '../../public/img/icons/friends.svg'
import Clock from '../../public/img/icons/clock.svg'
import AddPost from './AddPost'

const InnerdashboardHeader = ({ router, iconHome, iconActivity, iconTrending, iconFriends, iconLobby, title }) => {
  const [svgHome, setSvgHome] = useState(iconHome)
  const [svgActivity, setSvgActivity] = useState(iconActivity)
  const [svgTrending, setSvgTrending] = useState(iconTrending)
  const [svgFriends, setSvgFriends] = useState(iconFriends)
  const [svgLobby, setSvgLobby] = useState(iconLobby)

  return (
    <div className="dashboard-header relative">
      <div className="dashboard-header__title">
        { svgHome && ( <Home /> )}
        { svgActivity && ( <Feed /> )}
        { svgTrending && ( <Tag /> )}
        { svgFriends && ( <Friends /> )}
        { svgLobby && ( <Clock /> )}
        <h3> {dashboardHeaderTitle(router) === 'home' ? title : dashboardHeaderTitle(router)} </h3> 
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
