import { useState } from 'react'

function LastnameInput() {
  ////////CHANGE STATE////////

  const [lastname, setconfirmPass] = useState({
    lastname: ''
  })

  const handleInputChange = (event) => {
    console.log(event.target.value)
    setconfirmPass({
      ...lastname,
      [event.target.name]: event.target.value
    })
  }

  return (
    <div aria-label="input last name" className="content-lastname">
      <input
        type="text"
        name="lastname"
        onChange={handleInputChange}
        placeholder="* Ingresa tu Apellido"
        className="input-lastname"
      />
      <i aria-hidden="true" className="fas fa-user" id="user"></i>
    </div>
  )
}

export default LastnameInput
