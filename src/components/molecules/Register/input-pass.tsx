import React, { useState } from 'react'
import useForm from '../../organisms/Register/form/useForm'

function InputPass() {
  ////////CHANGE STATE////////
  const {handleChange, values } = useForm();


  /* const [password, setconfirmPass] = useState({
    password: ''
  })

  const handleInputChange = (event) => {
    console.log(event.target.value)
    setconfirmPass({
      ...password,
      [event.target.name]: event.target.value
    })
  } */

  ////////////////HIDE/SHOW-PASS////////////////
  const [passwordShown, setPasswordShown] = useState(false)

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true)
  }

  ////////////////CHANGE-ICON////////////////
  const [changeIcon, setChangeIcon] = useState(false)

  const toggleChangeIcon = () => {
    setChangeIcon(changeIcon ? false : true)
  }

  ////////////////MERGE FUNCTION IN ONCLICK////////////////
  class Pass extends React.Component {
    onClick(event) {
      togglePasswordVisiblity()
      toggleChangeIcon()
    }
  }

  return (
    <div className="content-password" id="show_hide_password">
      <input
        type={passwordShown ? 'text' : 'password'}
        autoComplete="off"
        name="password"
        placeholder="* Ingresa tu Contraseña"
        className="input-password"
        id="password"
        onChange={handleChange}
        value={values.password}
      />
      <i
        onClick={function (event) {
          togglePasswordVisiblity()
          toggleChangeIcon()
        }}
        className={changeIcon ? 'fas fa-eye-slash' : ' fas fa-eye'}
        id="password"
        title={changeIcon ? 'Ocultar Contraseña' : 'Mostrar Contraseña'}
      ></i>
    </div>
  )
}

export default InputPass
