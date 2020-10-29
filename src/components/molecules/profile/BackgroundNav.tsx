import IconNavMatch from '../../atoms/profile/IconNavMatch'
import Link from 'next/link'
import IconMatchSmall from '../../atoms/profile/IconMatchSmall'

function BackgroundNav() {
  return (
    <div className="background-nav">
      <div className="content-nav-match">
        <Link href="/match">
          <div className="content-btn-match">
            <IconMatchSmall />
            <a className="text-match">Hacer Match</a>
          </div>
        </Link>
        <IconNavMatch />
        <span className="line-hover"></span>
      </div>
    </div>
  )
}

export default BackgroundNav
