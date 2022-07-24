import React from 'react'
import { useHistory, Link } from 'react-router-dom'
import { Firebase } from '../../firebase/config'
import SignUpLoading from '../../Common/Loading/SignUpLoading'
import Logo from '../../Common/Images/olx-logo.png'
import './Signup.css'

export default function Signup() {

  const history = useHistory()
  let [name, setName] = React.useState('')
  let [email, setEmail] = React.useState('')
  let [phone, setPhone] = React.useState('')
  let [password, setPassword] = React.useState('')
  let [loading, setLoading] = React.useState(false)

  const handleSubmit = (e) => {
    setLoading(true)
    e.preventDefault()
    Firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((result) => 
      result.user.updateProfile({ displayName: name }).then(() => 
        Firebase.firestore().collection("users").doc(result.user.uid).set({
          id: result.user.uid,
          name: name,
          phone: phone,
        })
      )
    )
    .then(() => history.push("/login"))
  }

  return (
    <>
      {loading && <SignUpLoading/> } 
        <div className="signupParentDiv">
          <img width="200px" height="200px" src={Logo} alt=""></img>
          <form onSubmit={handleSubmit}>
            <label>Full Name</label>
            <br />
            <input
              className="input"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="name"
            />
            <br />
            <label>Email</label>
            <br />
            <input
              className="input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
            />
            <br />
            <label>Phone</label>
            <br />
            <input
              className="input"
              type="number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              name="phone"
            />
            <br />
            <label>Password</label>
            <br />
            <input
              className="input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
            />
            <br />
            <br />
            <button>Signup</button>
          </form>
          <Link to="/login">Login</Link>
        </div>
    </>
  )
}
