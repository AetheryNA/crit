import axios from "axios"
import { useEffect, useState } from "react"
import useUser from '../../lib/auth/useUser'

const ProfileStatus = () => {
  const { user } = useUser()
  const [statusTabActive, setstatusTabActive] = useState("false")
  const [ userData, setUserData ] = useState()

  const handleStatusTab = () => {
    setstatusTabActive(!statusTabActive)
  }

  useEffect(() => {
    axios.get(`/api/getUser?user_id=${user.id}`)
      .then(res => {
        setUserData(res.data.users)
      })
  }, [])

  return (
    <>
      <div className="profile">
        <div className={`profile__picture ${statusTabActive ? "" : "active"}`} onClick={() => { handleStatusTab() }}>
          { userData && (
            userData.avatar_url ?
              <img
                src={`/${userData.avatar_url}`}
              />
              :
              <img
                src="/img/pfp.png"
              />
          )}

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
