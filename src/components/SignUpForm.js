import { useState, useEffect } from "react"
import httpClient from "../../lib/adapters/httpClient"
import { useRouter } from 'next/router'

const SignUpForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [email, setEmail] = useState('')
  const [errorPassword, setErrorPassword] = useState(null)
  const [errorAPI, setErrorAPI] = useState(null)
  const [registerUserMsg, setRegisterUserMsg] = useState(null)

  const router = useRouter()
  
  const userParams = {
    avatar_url: '',
    username: username,
    password: password,
    email: email,
  }
  
  const handleRegister = async (e) => {
    e.preventDefault()
    setRegisterUserMsg(null)

    if (password === passwordConfirm) {
      setErrorPassword(null)

      const postReq = new httpClient()
      const response = await postReq.post(userParams)
      const responseData = await response.json()

      if (!response.ok) {
        const responseDataError = responseData.error.target[0].toUpperCase()

        setErrorAPI(responseDataError)
      }
      else {
        setErrorAPI(null)
        setRegisterUserMsg("You have been registered! Welcome to Crit!")
        router.push('/login')
      }

    } else {
      setErrorPassword("Passwords don't match!")
    }
  }

  return (
      <form className="sign-up-form" onSubmit={handleRegister}>
        {registerUserMsg && (
          <div className="sign-up-form__bump">
            <p> {registerUserMsg} </p>
          </div>
        )}

        <div className="sign-up-form__input-field">
          <label htmlFor="username-sign-up">Username</label>
          <input 
            type="textbox" 
            id="username-sign-up" 
            className={errorAPI && (`sign-up-form__error`)} 
            autoComplete="off" 
            required 
            onChange={(e) => setUsername(e.target.value)} 
          />

          {errorAPI === "USERNAME" ?
            <div className="sign-up-form__input-error"> 
              <p> <span>{errorAPI}</span> is already registered </p>
            </div>
            : null
          }

        </div>
        
        <div className="sign-up-form__input-field">
          <label htmlFor="password-sign-up">Password</label>
          <input 
            type="password" 
            id="password-sign-up"
            className={errorPassword && (`sign-up-form__error`)}
            required 
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="sign-up-form__input-field">
          <label htmlFor="confirm-password-sign-up">Confirm Password</label>
          <input 
            type="password" 
            id="confirm-password-sign-up" 
            className={errorPassword && (`sign-up-form__error`)} 
            onChange={(e) => setPasswordConfirm(e.target.value)} 
          />

          {password !== passwordConfirm ?
            <div className="sign-up-form__input-error"> 
              <p> <span>Passwords</span> don't match </p>
            </div>
            : null
          }

        </div>

        <div className="sign-up-form__input-field">
          <label htmlFor="email-sign-up">Email</label>
          <input 
            type="email" 
            id="email-sign-up" 
            className={errorAPI && (`sign-up-form__error`)} 
            autoComplete="off" 
            required 
            onChange={(e) => setEmail(e.target.value)} 
          />

          {errorAPI === "EMAIL" ?
            <div className="sign-up-form__input-error"> 
              <p> <span>{errorAPI}</span> is already registered </p>
            </div>
            : null
          }

        </div>

        <button type="submit" className="sign-up-form__button button">
          <span> Sign Up </span>
        </button>
    </form>
  )
}

export default SignUpForm
