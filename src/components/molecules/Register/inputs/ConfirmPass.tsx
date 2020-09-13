import React, { useState } from 'react'

function ConfirmPass() {
  ////////CHANGE STATE////////

  const [confirmPass, setconfirmPass] = useState({
    confirmPassword: ''
  })

  const handleInputChange = (event) => {
    console.log(event.target.value)
    setconfirmPass({
      ...confirmPass,
      [event.target.name]: event.target.value
    })
  }

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
    <div className="content-confirmpass" id="show_hide_password">
      <input
        type={passwordShown ? 'text' : 'password'}
        autoComplete="off"
        name="confirmPassword"
        onChange={handleInputChange}
        placeholder="* Confirmar tu Contraseña"
        className="input-compare-pass"
        id="confirm-password"
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

export default ConfirmPass
