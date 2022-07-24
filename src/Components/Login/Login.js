import React from 'react'
import { useHistory, Link } from 'react-router-dom'
import { Firebase } from '../../firebase/config'
import Logo from '../../Common/Images/olx-logo.png'
import RoundLoading from '../../Common/Loading/RoundLoading'
import './Login.css'

export default function Login() {
  let [email, setEmail] = React.useState('')
  let [password, setPassword] = React.useState('')
  let [loading, setLoading] = React.useState(false)
  const history = useHistory()

  const handleSubmit = (e) => {
    setLoading(true)
    e.preventDefault()
    Firebase.auth().signInWithEmailAndPassword(email,password).then(() => history.push("/"))
    .catch((error) => alert(error.message))
  }

  return (
    <>
      {loading && <RoundLoading/> }
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo} alt=""></img>
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <br />
          <input
            className="input"
            type="email"
            placeholder="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label>Password</label>
          <br />
          <input
            className="input"
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <Link to="/signup">Signup</Link>
      </div> 
    </>
  )
}
