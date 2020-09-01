import React from 'react'
import PageFormTwo from '../../components/organisms/form/pagetwo'
import PageFormOne from '../../components/organisms/form/pageone'

import TitleRpass from '../../components/atoms/titleRpass'

const Register: React.FC = () => {
  return (
    <body className="principal-container">
      <div className="second-container">
        <header>
          <TitleRpass />
        </header>

        <form className="principal-form" action="">
          <div className="content-form">
            <PageFormTwo />
          </div>

          <div className="content-form">
            <PageFormOne />
          </div>
        </form>
      </div>
    </body>
  )
}
export default Register
