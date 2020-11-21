import { ChangeEvent, useState } from 'react'

interface NameInputProps {
  required: boolean
  placeHolder: string
  handleOnChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
  error: boolean
  name: string
  value: string
}

const NameInput = ({
  required,
  placeHolder,
  handleOnChange,
  error,
  name,
  value
}: NameInputProps) => {
  ////////CHANGE STATE////////

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
    <>
      <div className="global-content-name">
        {error && (
          <div class="error-input">
            <span className="span-error">Completa el campo para continuar</span>
          </div>
        )}

        <div aria-label="name" className="content-name">
          <input
            type="text"
            name={name}
            placeholder={placeHolder}
            className={` ${error ? 'error' : 'input-name'}`}
            required={required}
            value={value}
            onChange={handleOnChange}
          />
          <i aria-hidden="true" className="fas fa-user" id="name"></i>
        </div>
      </div>
    </>
  )
}

export default NameInput
