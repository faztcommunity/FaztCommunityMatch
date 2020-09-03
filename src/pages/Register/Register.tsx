import React, { useContext, useState } from 'react'
import PageFormOne from '../../components/organisms/form/page-one'
import PageFormTwo from '../../components/organisms/form/page-two'
import TitleRpass from '../../components/atoms/titleRpass'
import ProgressBar from '../../components/molecules/various/progress-bar'

function Register() {
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
export default Register
