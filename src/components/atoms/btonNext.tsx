import React, { useState, useContext } from 'react'
import { multiStepContext } from '../molecules/various/StepContext'

function BtnNext() {
  const { setStep, userPass, setUserPass } = useContext(multiStepContext)
  return (
    <>
      <a className="btn-medium-next " href="" onClick={() => setStep(2)}>
        Continuar
      </a>
    </>
  )
}

export default BtnNext
