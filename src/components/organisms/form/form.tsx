import React, { useContext } from 'react'
import PageFormTwo from './page-two'
import TitleRpass from '../../atoms/titleRpass'
import ProgressBar from '../../molecules/various/progress-bar'
import PageFormOne from './page-one'
import { multiStepContext } from '../../molecules/various/StepContext'
import Stepper from '@material-ui/core/Stepper'

function Form() {
  const { currentStep, userPass } = useContext(multiStepContext)
  function showStep(step) {
    switch (step) {
      case 1:
        return <PageFormOne />
      case 2:
        return <PageFormTwo />
    }
  }

  return (
    <section className="principal-container">
      <div className="second-container">
        <header>
          <TitleRpass />
        </header>
        <ProgressBar />
        <form className="principal-form" action="">
          <div className="content-form movpag">{showStep(currentStep)}</div>

          <div className="content-form"></div>
        </form>
      </div>
    </section>
  )
}

export default Form
