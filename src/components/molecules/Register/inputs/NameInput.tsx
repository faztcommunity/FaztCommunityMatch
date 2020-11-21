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
    <div aria-label="name" className="content-name">
      {error && <span>Error</span>}
      <input
        type="text"
        name={name}
        placeholder={placeHolder}
        className={`input-name ${error ? 'error' : ''}`}
        required={required}
        value={value}
        onChange={handleOnChange}
      />
      <i aria-hidden="true" className="fas fa-user" id="name"></i>
    </div>
  )
}

export default NameInput
