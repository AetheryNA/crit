import useUser from '../../lib/auth/useUser'
import activePage from '../helpers/navigationActivePage'

const Navigation = ({ navigationItems }) => {
  const { user } = useUser()

  const menuItems = navigationItems.map((item, index) => {
    return (
      <li className={"navigation__menu-item" + " " + item.className} key={index}>
        <a 
          href={item.href === '/profile/user' ? user && (item.href.concat('/', user.id)) : item.href} 
          className={
            `
            ${activePage(item)}
            `
          }
        >
          {item.svg}
          <span> {item.name} </span>
        </a>
      </li>
    )
  })

  return (
    <nav className="navigation">
      <ul className="navigation__menu">
        { menuItems }
      </ul>
    </nav>
  )
}

export default Navigation
