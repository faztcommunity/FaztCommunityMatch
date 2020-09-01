import React from 'react'
import PageFormTwo from '../../components/organisms/form/pagetwo'
import PageFormOne from '../../components/organisms/form/pageone'

import TitleRpass from '../../components/atoms/titleRpass'
import ProgressBar from '../../components/molecules/various/progress-bar'

const Register: React.FC = () => {
  return (
    <section className="principal-container">
      <div className="second-container">
        <header>
          <TitleRpass />
        </header>
        <ProgressBar />

        <form className="principal-form" action="">
          <div className="content-form">
            <PageFormTwo />
          </div>

          <div className="content-form movpag">
            <PageFormOne />
          </div>
        </form>
      </div>
    </section>
  )
}
export default Register
