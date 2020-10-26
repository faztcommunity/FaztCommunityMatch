import React from 'react'
import Link from 'next/link'

function BtonCreateProject() {
  return (
    <>
    <Link href="/crear-proyecto">
      <button className="btn-create-project">Crear Proyecto</button>
      </Link>
    </>
  )
}

export default BtonCreateProject
