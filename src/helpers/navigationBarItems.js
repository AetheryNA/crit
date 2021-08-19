import HomeSVG from '../../public/img/icons/home.svg'
import UserSVG from '../../public/img/icons/user.svg'
import FeedSVG from '../../public/img/icons/feed.svg'
import TrendingSVG from '../../public/img/icons/tag.svg'
import FriendsSVG from '../../public/img/icons/friends.svg'
import ClockSVG from '../../public/img/icons/clock.svg'

const navigationItems = [
  {
    name: 'Home',
    className: 'aside__nav-item',
    href: '/',
    svg: <HomeSVG />,
    isActive: false,
  },
  {
    name: 'User',
    className: 'aside__nav-item',
    href: '/profile/user',
    svg: <UserSVG />,
    isActive: false,
  },
  {
    name: 'Activity Feed',
    className: 'aside__nav-item',
    href: '/activity-feed',
    svg: <FeedSVG />,
    isActive: false,
  },
  {
    name: 'Trending',
    className: 'aside__nav-item',
    href: '/',
    svg: <TrendingSVG />,
    isActive: false,
  },
  {
    name: 'Friends',
    className: 'aside__nav-item',
    href: '/friends',
    svg: <FriendsSVG />,
    isActive: false,
  },
  {
    name: 'Lobby',
    className: 'aside__nav-item',
    href: '/',
    svg: <ClockSVG />,
    isActive: false,
  },
]

export default navigationItems
