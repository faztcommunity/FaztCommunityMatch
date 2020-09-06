import React, { useState, useContext } from 'react'

function BtnNext() {
  const [index, setIndex] = useState('true')

  const handleOnClick = () => {
    console.log(index, localStorage.getItem('index'))
    localStorage.setItem('index', 'false')
    setIndex('false')
  }

  return (
    <div className="content-btn-next">
      <a className="btn-medium-next " href="" onClick={handleOnClick}>
        Continuar
      </a>
    </div>
  )
}

export default BtnNext
