import React from 'react'
import Link from 'next/link'
import IconProject from '../../atoms/profile/IconProject'
import IconTest from '../../atoms/profile/IconTest'

function BtonsMenu() {
  return (
    <div className="content-btns-menu">
      <div className="content-test">
        <Link href="/tests">
          <div className="background-hover">
            <IconTest />
            <a className="test">Realizar Test</a>
          </div>
        </Link>
        <span className="line-hover"></span>
      </div>

      <div className="content-project">
        <Link href="/proyecto">
          <div className="background-hover">
            <IconProject />
            <a className="project">Proyecto</a>
          </div>
        </Link>
        <span className="line-hover"></span>
      </div>
    </div>
  )
}

export default BtonsMenu
