import { useState } from 'react'
import useForm from '../../../organisms/Register/form/useForm'

function NameInput() {
  ////////CHANGE STATE////////

  const {handleChange, values } = useForm();

 /*  const [values, setValues] = useState({
    firstName: ''
  })


  const handleInputChange = (event) => {
const {name, value} = event.target

    console.log(event.target.value)
    setValues({
      ...values,
      [name]: value
    });
  }; */

  return (
    <div aria-label="name" className="content-name">
      <input
        type="text"
        name="firstName"
        placeholder="* Ingresa tu Nombre"
        className="input-name"
        onChange={handleChange}
        value={values.firstName}
      />
      <i aria-hidden="true" className="fas fa-user" id="name"></i>
    </div>
  )
}

export default NameInput
