import { useState } from 'react'
import useForm from '../../../organisms/Register/form/useForm'

function LastnameInput() {
  ////////CHANGE STATE////////

  const {handleChange, values } = useForm();



  /* const [lastname, setconfirmPass] = useState({
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
  } */

  return (
    <div aria-label="input last name" className="content-lastname">
      <input
        type="text"
        name="lastName"
        placeholder="* Ingresa tu Apellido"
        className="input-lastname"
        required={true}
        id="LastNameInput"
        onChange={handleChange}
        value={values.lastName}
      />
      <i aria-hidden="true" className="fas fa-user" id="user"></i>
    </div>
  )
}

export default LastnameInput
