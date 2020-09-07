import React, { useState, useEffect } from 'react'
import PageFormTwo from './page-two'
import TitleRpass from '../../atoms/titleRpass'
import ProgressBar from '../../molecules/various/progress-bar'
import PageFormOne from './page-one'
import IconMatch from '../../atoms/background-svg'
import BallsSvg from '../../atoms/balls-svg'
import BackgroundEffect from '../../atoms/background-effect'
import TitleHome from '../../atoms/TitleHome'

function Form() {
  const [index, setIndex] = useState('true')

  useEffect(() => {
    console.log('Hola')
    console.log(index, localStorage.getItem('index'))
    if (!localStorage.getItem('index')) {
      localStorage.setItem('index', 'true')
    } else {
      setIndex(localStorage.getItem('index'))
    }

    const interval = setInterval(() => {
      if (localStorage.getItem('index') != index)
        setIndex(localStorage.getItem('index'))
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  })
  return (
    <section className="principal-container">
      <TitleHome />
      <IconMatch />
      <BackgroundEffect />
      <BallsSvg />
      <div className="background-two">
        <div className="second-container">
          <header>
            <TitleRpass />
          </header>
          <ProgressBar />

          <form className="principal-form" action="">
            <div aria-label="registration form" className="content-form movpag">
              {index == 'true' ? <PageFormOne /> : <PageFormTwo />}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Form
