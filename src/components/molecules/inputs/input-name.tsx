import React, { useState, useContext } from 'react'

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
    <div className="content-name">
      <input
        type="text"
        name="firtName"
        onChange={handleInputChange}
        placeholder="* Ingresa tu Nombre"
        className="input-name"
      />
      <i className="fas fa-user" id="name"></i>
    </div>
  )
}

export default NameInput
