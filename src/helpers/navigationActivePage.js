import { useRouter } from 'next/router'

const activePage = (navItem) => {
  const router = useRouter()
  let toActive

  const itemValues = [
    {
      path : '/home',
      name : 'Home'
    },
    {
      path : '/profile/user',
      name : 'User'
    },
    {
      path : '/activity-feed',
      name : 'Activity Feed'
    },
    {
      path : '/trending',
      name : 'Trending'
    },
    {
      path : '/friends',
      name : 'Friends'
    },
    {
      path : '/lobby',
      name : 'Lobby'
    },
  ]

  itemValues.forEach(item => {
    if (router.pathname.includes(item.path) && navItem.name == item.name) {
      toActive = 'active'
    }
  });

  return toActive
}

export default activePage
