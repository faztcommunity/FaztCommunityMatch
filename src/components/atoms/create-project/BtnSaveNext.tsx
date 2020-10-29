import React from 'react'
import Link from 'next/link'

function BtnSaveNext() {
  return (
    <>
    <Link href="/mi-proyecto">
      <button className="btn-save-next">Guardar y Continuar</button>
      </Link>
    </>
  )
}

export default BtnSaveNext
