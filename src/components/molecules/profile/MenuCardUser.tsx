import React from 'react'

function MenuCardUser() {
  return (
    <div className="content-menu-user">
      <div className="content-menu-me">
        {' '}
        <a href="" className="title-menu-user">
          Sobre Mi
        </a>
        <span className="line-hover-me"></span>
      </div>
      <div className="content-menu-test">
        {' '}
        <a href="" className="title-menu-user">
          Test
        </a>
        <span className="line-hover-test"></span>
      </div>
      <div className="content-menu-abilities">
        {' '}
        <a href="" className="title-menu-user">
          Habilidades
        </a>
        <span className="line-hover-abilities"></span>
      </div>
      <div className="content-menu-match">
        {' '}
        <a href="" className="title-menu-match">
          Match
        </a>
        <span className="line-hover-match"></span>
      </div>
    </div>
  )
}

export default MenuCardUser
