import React from 'react'
import ImageTestUser from '../../../assets/images/test-user.jpg'

function CardTestUser() {
  return (
    <section className="section-test-user">
      <div className="content-line-text">
        <h2 className="subtitle-test-user">Test para Usuarios</h2>
        <span className="line-test-user"></span>
      </div>

      <img className="image-test-user" src={ImageTestUser} alt="" />

      <p className="description-test-user">
        Haz el test para usuarios, así podrás empezar a tener match con
        distintos proyectos, contesta con honestidad para asegurar un mejor
        resultado con respecto a tus gustos.
      </p>
    </section>
  )
}

export default CardTestUser
