import React from 'react'
import Link from 'next/link'

function BtonFree() {
  return (
    <div className="content-btn-free">
      <Link href="/perfil">
        <a className="btn-free">Gratis</a>
      </Link>
    </div>
  )
}

export default BtonFree
