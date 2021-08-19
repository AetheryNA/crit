import { useRouter } from 'next/router'

const activePage = (navItem) => {
  const router = useRouter()
  let toActive = ''

  const itemValues = {
    'Home' : '/home',
    'User' : '/profile/user',
    'Activity Feed' : '/activity-feed',
    'Trending' : '/trending',
    'Friends' : '/friends',
    'Lobby' : '/lobby'
  }

  for (const [key, value] of Object.entries(itemValues)) {
    if (router.pathname.includes(value) && navItem.name == key) {
      toActive = 'active'
    }
  }

  return toActive
}

export default activePage
