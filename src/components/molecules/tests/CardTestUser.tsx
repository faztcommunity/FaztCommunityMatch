import React from 'react'
import Link from 'next/link'
import ImageTestUser from '../../../assets/images/test-user.jpg'

function CardTestUser() {
  return (
    <Link href="/test-usuario">
      <section className="section-test-user">
        <div className="content-line-text">
          <h2 className="subtitle-test-user">Test para Usuarios</h2>
          <span className="line-test-user"></span>
        </div>

        <img className="image-test-user" src={ImageTestUser} alt="" />

        <p className="description-test-user-card">
          Haz el test para usuarios, así podrás empezar a tener match con
          distintos proyectos, contesta con honestidad para asegurar un mejor
          resultado con respecto a tus gustos.
        </p>
      </section>
    </Link>
  )
}

export default CardTestUser
