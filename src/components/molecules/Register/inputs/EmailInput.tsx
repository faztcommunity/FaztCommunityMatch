import { useState } from 'react'

function EmailInput() {
  ////////CHANGE STATE////////



  /* const [email, setconfirmPass] = useState({
    email: ''
  })

  const handleInputChange = (event) => {
    console.log(event.target.value)
    setconfirmPass({
      ...email,
      [event.target.name]: event.target.value
    })
  } */

  return (
    <div aria-label="input email" className="content-email">
      <input
        type="email"
        name="email"
        placeholder="* Ingresa tu Correo"
        className="input-email"
        id="password"
      />
      <i aria-hidden="true" className="fas fa-envelope" id="password"></i>
    </div>
  )
}

export default EmailInput
