import React, { useState } from 'react'

function NameInput() {
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
    <div aria-label="name" className="content-name">
      <input
        type="text"
        name="firtName"
        onChange={handleInputChange}
        placeholder="* Ingresa tu Nombre"
        className="input-name"
      />
      <i aria-hidden="true" className="fas fa-user" id="name"></i>
    </div>
  )
}

export default NameInput
