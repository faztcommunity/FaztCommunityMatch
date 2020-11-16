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

  const confirmLastname = () => {
    let input = document.querySelector('#LastNameInput')
    if (input == null) {
      alert('Debe ingresar el apellido')
    }
  }

  return (
    <div aria-label="input last name" className="content-lastname">
      <input
        type="text"
        name="lastname"
        onChange={confirmLastname}
        placeholder="* Ingresa tu Apellido"
        className="input-lastname"
        required={true}
        id="LastNameInput"
      />
      <i aria-hidden="true" className="fas fa-user" id="user"></i>
    </div>
  )
}

export default LastnameInput
