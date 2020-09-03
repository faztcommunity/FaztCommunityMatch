import React from 'react'
import PageFormTwo from './page-two'
import TitleRpass from '../../atoms/titleRpass'
import ProgressBar from '../../molecules/various/progress-bar'
import PageFormOne from './page-one'

function Form() {
  return (
    <section className="principal-container">
      <div className="second-container">
        <header>
          <TitleRpass />
        </header>
        <ProgressBar />

        <form className="principal-form" action="">
          <div className="content-form movpag">
            <PageFormOne />
          </div>

          <div className="content-form">
            <PageFormTwo />
          </div>
        </form>
      </div>
    </section>
  )
}

export default Form
