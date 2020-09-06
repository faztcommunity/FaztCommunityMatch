import React, { useState } from 'react'

function BtnmReturn() {
  const [after, setAfter] = useState('false')

  const handleOnClick = () => {
    console.log(after, localStorage.getItem('index'))
    localStorage.setItem('index', 'true')
    setAfter('true')
  }

  return (
    <a className="btn-medium-return" href="" onClick={handleOnClick}>
      Regresar
    </a>
  )
}

export default BtnmReturn
