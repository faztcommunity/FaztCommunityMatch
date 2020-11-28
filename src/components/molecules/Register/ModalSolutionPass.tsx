import React, { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react'
import { MdClose } from 'react-icons/md'
import styled from 'styled-components'
import EmailInput from './inputs/EmailInput';

interface FormStateValues {
    email: string
}

const formInitialValues: FormStateValues = {
    email: ''
}

interface FormErrors {
    email: boolean
}

const formInitialErrors: FormErrors = {
    email: false
}


function ModalSolutionPass({ showModal, setShowModal }) {
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

    const modalRef = useRef()

    const closeModal = e => {
        if (modalRef.current === e.target) {
            setShowModal(false)
        }
    };

    const keyPress = useCallback(e => {
        if (e.key === 'Escape' && showModal) {
            setShowModal(false)
        }
    }, [setShowModal, showModal])

    useEffect(() => {
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress);
    },
        [keyPress]
    )

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

    return (
        <>

            {showModal
                ? (
                    <section className="section-modal-solution"
                        ref={modalRef}
                        onClick={closeModal}>
                        <div className="content-modal-solution">
                            <h1 className="title-modal-solution">Ingresa tu correo para recuperar la contraseña</h1>
                            <EmailInput
                                className="margin-input-email"
                                required
                                placeHolder="*Ingresa tu Correo"
                                handleOnChange={handleOnChange}
                                error={formErrors.email}
                                name="email"
                                value={formState.email}
                            />
                            <div className="content-btn-send-mondal-solution">
                                <a className="btn-medium-send-modal-solution" href="">
                                    Enviar
                                </a>
                            </div>
                            <CloseModalButton
                                aria-label='Close modal'
                                onClick={() => setShowModal(prev => !prev)} />
                        </div>
                    </section>
                )

                : null}

        </>
    )
}

export default ModalSolutionPass
