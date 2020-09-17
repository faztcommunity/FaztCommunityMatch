import React from 'react'
import Link from 'next/link'

function BtonsMenu() {
  return (
    <div className="content-btns-menu">
      <Link href="/tests">
        <a>Realizar Test</a>
      </Link>
      <Link href="/proyecto">
        <a>Proyecto</a>
      </Link>
    </div>
  )
}

export default BtonsMenu
