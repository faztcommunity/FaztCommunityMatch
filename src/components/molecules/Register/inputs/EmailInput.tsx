import { ChangeEvent, useState } from 'react'

interface EmailInputProps {
  required: boolean
  placeHolder: string
  handleOnChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
  error: boolean
  name: string
  value: string
}

const EmailInput = ({
  required,
  placeHolder,
  handleOnChange,
  error,
  name,
  value
}: EmailInputProps) => {
  ////////CHANGE STATE////////

  /* const [email, setconfirmPass] = useState({
    email: ''
  })

  const handleInputChange = (event) => {
    console.log(event.target.value)
    setconfirmPass({
      ...email,
      [event.target.name]: event.target.value
    })
  } */

  return (
    <div className="global-content-name">
      {error && (
        <div class="error-input">
          <span className="span-error">Completa el campo para continuar</span>
        </div>
      )}
      <div aria-label="input email" className="content-email">
        <input
          type={name}
          name="email"
          placeholder={placeHolder}
          className={` ${error ? 'error' : 'input-email'}`}
          id="password"
          value={value}
          onChange={handleOnChange}
          required={required}
        />
        <i aria-hidden="true" className="fas fa-envelope" id="password"></i>
      </div>
    </div>
  )
}

export default EmailInput
