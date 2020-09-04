import React, { useState } from 'react'
import Form from '../../organisms/form/form'

export const multiStepContext = React.createContext()
function StepContext() {
  const [currentStep, setStep] = useState(1)
  const [userPass, setUserPass] = useState([])

  return (
    <div>
      <multiStepContext.Provider
        value={{ currentStep, setStep, userPass, setUserPass }}
      >
        <Form />
      </multiStepContext.Provider>
    </div>
  )
}

export default StepContext
