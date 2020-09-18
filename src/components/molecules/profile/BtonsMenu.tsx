import React from 'react'
import Link from 'next/link'
import IconProject from '../../atoms/profile/IconProject'
import IconTest from '../../atoms/profile/IconTest'

function BtonsMenu() {
  return (
    <div className="content-btns-menu">
      <Link href="/tests">
        <div className="content-test">
          <div className="background-hover">
            <IconTest />
            <a className="test">Realizar Test</a>
          </div>
        </div>
      </Link>
      <div className="content-project">
        <Link href="/proyecto">
          <div className="background-hover">
            <IconProject />
            <a className="project">Proyecto</a>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default BtonsMenu
