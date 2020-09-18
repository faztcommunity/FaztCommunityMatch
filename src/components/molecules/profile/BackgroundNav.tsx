import React from 'react'
import IconNavMatch from '../../atoms/profile/IconNavMatch'
import BtonMatch from './BtonMatch'
import Link from 'next/link'

function BackgroundNav() {
  return (
    <div className="background-nav">
      <Link href="/Match">
        <div className="content-nav-match">
          <BtonMatch />
          <IconNavMatch />
        </div>
      </Link>
    </div>
  )
}

export default BackgroundNav
