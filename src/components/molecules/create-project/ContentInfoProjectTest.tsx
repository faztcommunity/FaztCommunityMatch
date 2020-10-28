import React from 'react'
import BtnCreateTestProject from '../../atoms/create-project/BtnCreateTestProject'


function ContentInfoProjectTest() {
  return (
    <>
        <div className="content-info-test-project">
        <p className="info-test-project">Antes de buscar Match es obligatorio hacer el test para proyectos, dar click en el siquiente botón para que lo redirija a la página para hacer el test:</p>
        <BtnCreateTestProject />
        </div>
    </>
  )
}

export default ContentInfoProjectTest
