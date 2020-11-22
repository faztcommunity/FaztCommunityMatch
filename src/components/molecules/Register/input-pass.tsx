import React, { ChangeEvent, useState } from 'react'

interface PasswordInputProps {
  required: boolean
  placeHolder: string
  handleOnChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
  error: boolean
  name: string
  value: string
}

const InputPass = ({
  required,
  placeHolder,
  handleOnChange,
  error,
  name,
  value
}: PasswordInputProps) => {
  ////////CHANGE STATE////////

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
    <div className="global-content-name">
      {error && (
        <div class="error-input">
          <span className="span-error">Completa el campo para continuar</span>
        </div>
      )}
      <div className="content-password" id="show_hide_password">
        <input
          type={passwordShown ? 'text' : 'password'}
          autoComplete="off"
          name={name}
          placeholder={placeHolder}
          className={` ${error ? 'error' : 'input-password'}`}
          id="password"
          required={required}
          value={value}
          onChange={handleOnChange}
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
    </div>
  )
}

export default InputPass
