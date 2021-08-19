import Message from '../../public/img/icons/message.svg'

const FriendsList = () => {
  return (
    <div className="friends-list">
      <ul>
        <li className="friends-list__friend flex flex-row items-center">
          <a href='/friends' className="flex flex-row items-center">
            <img 
              className="rounded-full" 
              src="/img/pfp.png"
            />
            <p> Alice Goodwin </p>
          </a>
          <div className="friends-list__msg ml-auto">
            <Message />
          </div>
        </li>
      </ul>
    </div>
  )
}

export default FriendsList
