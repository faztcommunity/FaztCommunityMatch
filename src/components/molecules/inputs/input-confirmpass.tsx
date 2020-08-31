import React, { useState } from 'react'

function ConfirmPass() {
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
        name="password"
        placeholder="* Confirmar Contraseña"
        className="input-compare-pass"
        id="password"
      />
      <i
        onClick={function (event) {
          togglePasswordVisiblity()
          toggleChangeIcon()
        }}
        className={changeIcon ? 'fas fa-eye-slash' : ' fas fa-eye'}
        id="password"
      ></i>
    </div>
  )
}

export default ConfirmPass
