import React, { useState } from 'react'

function BtnmReturn() {
  const [after, setAfter] = useState('false')

  const handleOnClick = () => {
    console.log(after, localStorage.getItem('index'))
    localStorage.setItem('index', 'true')
    setAfter('true')
  }

  return (
    <button className="btn-medium-return" onClick={handleOnClick}>
      Regresar
    </button>
  )
}

export default BtnmReturn
