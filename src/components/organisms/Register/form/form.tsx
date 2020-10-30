import { useState, useEffect } from 'react'
import PageFormTwo from './PageFormTwo'
import TitleRpass from '../../../atoms/Register/titleRpass'
import ProgressBar from '../../../molecules/Register/various/progress-bar'
import PageFormOne from './PageFormOne'
import IconMatch from '../../../atoms/Register/IconMatch'
import BallsSvg from '../../../atoms/Register/balls-svg'
import BackgroundEffect from '../../../atoms/Register/background-effect'
import TitleHome from '../../../atoms/Register/TitleHome'

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
