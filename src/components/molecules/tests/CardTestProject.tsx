import React from 'react'
import ImageTestProject from '../../../assets/images/test-project.jpg'
import Link from 'next/link'

function CardTestProject() {
  return (
    <Link href="/test-proyecto">
      <section className="section-test-project">
        <div className="content-line-text">
          <h2 className="subtitle-test-project">Test para Proyectos</h2>
          <span className="line-test-project"></span>
        </div>

        <img className="image-test-project" src={ImageTestProject} alt="" />

        <p className="description-test-project">
          Haz el test para proyectos, así podrás empezar a tener match con
          distintos usuarios, contesta con honestidad para asegurar un mejor
          resultado con respecto a las metas de tu proyecto.
        </p>
      </section>
    </Link>
  )
}

export default CardTestProject
