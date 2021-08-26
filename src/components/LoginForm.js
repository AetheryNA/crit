import { useState } from "react"
import useUser from "../../lib/auth/useUser"

const LoginForm = () => {
  const { mutateUser } = useUser({
    redirectTo: '/home',
    redirectIfFound: true, 
  })

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [wrongUser, setWrongUser] = useState(null)
  const [emptyField, setEmptyField] = useState(null)

  const userDetails = {
    username : username,
    password : password
  }

  const sendResponse = async (e) => {
    e.preventDefault()
    
    if(username || password !== '') {
      setEmptyField(null)

      const response = mutateUser(
        await fetch('/api/auth/loginUser', {
          method: "POST",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify(userDetails),
        })
      )
      
      if(!response.ok) {
        setWrongUser('Username or Password is incorrect')
      } else {
        setWrongUser(null)
      }
    } else {
      setEmptyField('Username or Password Field cannot be left empty')
    }
  }

  return (
    <form className="login-form" onSubmit={sendResponse}>
      <h3 className="login-form__head mobile--hidden"> Login </h3>
      <p className="login-form__catchphrase mobile--hidden"> Gamers are waiting for you. Login already.</p>

      {emptyField || wrongUser !== null ?
        <div className="login-form__bump">
          <p> {emptyField || wrongUser} </p>
        </div>
        : null 
      }

      <div className="login-form__username">
        <label htmlFor="username-login">Username</label>
        <input 
          type="textbox" 
          id="username-login" 
          onChange={(e) => {setUsername(e.target.value)}}
          className={emptyField || wrongUser !== null ? "login-form__error" : null}
        />
      </div>
      
      <div className="login-form__password">
        <label htmlFor="password-login">Password</label>
        <input 
          type="password" 
          id="password-login" 
          onChange={(e) => {setPassword(e.target.value)}}
          className={emptyField || wrongUser !== null ? "login-form__error" : null}
        />
        <p>Forgot password?</p>
      </div>

      <div className="login-form__submit">
        <p className="login-form__sign-up"> Not a member?<a href="/signup"> Sign up </a></p>

        <button type="submit" className="login-form__button">
          <span> Login </span>
        </button>
      </div>
    </form>
  )
}

export default LoginForm
