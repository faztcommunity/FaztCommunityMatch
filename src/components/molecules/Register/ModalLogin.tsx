import React, { ChangeEvent, useState } from 'react'
import styled from 'styled-components'
import {MdClose} from 'react-icons/md'
import LoginImage from '../../../assets/svg/login-image.svg'
import EmailInput from './inputs/EmailInput'
import InputPass from './input-pass'

const CloseModalButton = styled(MdClose)`
cursor: pointer;
position: absolute;
top: 20px;
right: 20px;
width: 32px;
height: 32px;
padding: 0;
z-index: 4;
`
  interface FormStateValues {
    password: string
    email: string
  }

  const formInitialValues: FormStateValues = {
    password: '',
    email: ''
  }

  interface FormErrors {
    password: boolean
    email: boolean
  }

  const formInitialErrors: FormErrors = {
    password: false,
    email: false
  }



const ModalLogin = ({showModal, setShowModal}) => {
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

        {showModal
        ? (
        <section className="section-modal-login">
          <div className="backgron-modal-login">
          <LoginImage />
              <h1 className="title-modal-login">Iniciar Sesión</h1>
              <CloseModalButton
              aria-label='Close modal'
              onClick={() => setShowModal (prev => !prev)} />
              <div className="inputs-modal-login">
                  <label htmlFor="" className="label-modal-login"> Correo
              <EmailInput
        className="margin-input-email"
        required
        placeHolder="*Ingresa tu Correo"
        handleOnChange={handleOnChange}
        error={formErrors.email}
        name="email"
        value={formState.email}
      />
      </label>
      <label htmlFor="" className="label-modal-login"> Contraseña
              <InputPass
          required
          placeHolder="*Ingresa tu contraseña"
          handleOnChange={handleOnChange}
          error={formErrors.password}
          name="password"
          value={formState.password}
        />
        </label>
              </div>

              <div className="content-btn-next-mondal-login">
      <a className="btn-medium-next-modal-login" href="">
        Continuar
      </a>
    </div>


          </div>
        </section>
        )

        : null}

        </>
    )
}

export default ModalLogin
