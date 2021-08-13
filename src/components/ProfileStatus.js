import { useState } from "react"
import Image from 'next/image'
import useUser from '../../lib/auth/useUser'

const ProfileStatus = () => {
  const { user } = useUser()
  const [statusTabActive, setstatusTabActive] = useState("false")

  const handleStatusTab = () => {
    setstatusTabActive(!statusTabActive)
  }

  return (
    <>
      <div className="profile">
        <div className={`profile__picture ${statusTabActive ? "" : "active"}`} onClick={() => { handleStatusTab() }}>
          <Image
            src="/img/pfp.png"
            width={80}
            height={80}
          />

          <div className="status"></div>
          <ul className="status__tab">
            <li className="status__item status__item-online"> Online </li>
            <li className="status__item status__item-idle"> Idle </li>
            <li className="status__item status__item-dnd"> Do not disturb </li>
            <li className="status__item status__item-hidden"> Hide </li>
          </ul>
        </div>

        <div className="profile__description">
          <h3> {user.username} </h3>
          <p> Online </p>
        </div>
      </div>
    </>
  )
}

export default ProfileStatus
