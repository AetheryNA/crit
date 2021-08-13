import Edit from '../../public/img/icons/editwCircle.svg'
import Settings from '../../public/img/icons/settings.svg'

const SettingsProfileEdit = () => {
  return (
    <div className="settings-profile-edit px-5 mt-32">
      <div className="settings-profile-edit__title">
        <Settings />
        <h3> Settings </h3>
      </div>
      <div className="settings-profile-edit__pfp">
        <img src="/img/pfp.png" alt="" />
        <Edit />
      </div>
      <div className="settings-profile-edit__field">
        <h3> Username </h3>
        <p> Username </p>
        <Edit />
      </div>
      <div className="settings-profile-edit__field">
        <h3> Password </h3>
        <p> ********* </p>
        <Edit />
      </div>
    </div>
  )
}

export default SettingsProfileEdit
