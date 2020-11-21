import React, { ChangeEvent, useState } from 'react'
import InputPass from '../../../molecules/Register/input-pass'
import ConfirmPass from '../../../molecules/Register/inputs/ConfirmPass'
import BtnmReturn from '../../../atoms/Register/BtnmReturn'
import BtnRegister from '../../../atoms/Register/BtnRegister'

interface FormStateValues {
  password: string
  confirmPassword: string
}

const formInitialValues: FormStateValues = {
  password: '',
  confirmPassword: ''
}

interface FormErrors {
  password: boolean
  confirmPassword: boolean
}

const formInitialErrors: FormErrors = {
  password: false,
  confirmPassword: false
}

function PageFormTwo() {
  const [formState, setFormState] = useState<FormStateValues>(formInitialValues)
  const [formErrors, setFormErrors] = useState<FormErrors>(formInitialErrors)
  const isEmpty = (value: string): boolean => {
    return value.trim().length === 0
  }

  const handleOnChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    console.log(e.target.name)
    const hasError = isEmpty(e.target.value)
    setFormState({ ...formState, [e.target.name]: e.target.value })
    setFormErrors({ ...formErrors, [e.target.name]: hasError })
  }

  return (
    <>
      <div className="content-input">
        <InputPass
          required
          placeHolder="*Ingresa tu contraseña"
          handleOnChange={handleOnChange}
          error={formErrors.password}
          name="password"
          value={formState.password}
        />

        <InputPass
          required
          placeHolder="*Ingresa tu contraseña"
          handleOnChange={handleOnChange}
          error={formErrors.confirmPassword}
          name="confirmPassword"
          value={formState.confirmPassword}
        />
        {/*  <ConfirmPass /> */}
      </div>
      <div className="container-btns-register">
        <div className="containerbtn-return">
          <BtnmReturn />
        </div>
        <div className="containerbtn-blue">
          <BtnRegister />
        </div>
      </div>
    </>
  )
}

export default PageFormTwo
