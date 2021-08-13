import navItems from '../helpers/navigationBarItems'
import Navigation from './Navigation'
import ProfileInfo from './ProfileStatus'
import useUser from '../../lib/auth/useUser'

const Aside = () => {
  const navigationItems = navItems
  const { user } = useUser()

  return (
    <aside className="app-aside">
      { user ? 
        <ProfileInfo />
        :
        ""
      }
      <Navigation navigationItems={ navigationItems }/>

      <div className="app-aside__copyright">
        <p> Copyright&#169; 2021 </p>
      </div>
    </aside>
  )
}

export default Aside
