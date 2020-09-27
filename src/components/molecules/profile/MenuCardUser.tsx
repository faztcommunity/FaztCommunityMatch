import React from 'react'
import { useState } from 'react'
import AboutMeUser from './AboutMeUser'
import SectionAbilitiesUser from './SectionAbilitiesUser'
import SectionMatchUser from './SectionMatchUser'
import SectionTestUser from './SectionTestUser'

function MenuCardUser() {
  const sectionAboutUser = [{ component: <AboutMeUser /> }]
  const sectionUserTest = [{ componentTest: <SectionTestUser /> }]
  const sectionUserAbilities = [
    { componentAbilities: <SectionAbilitiesUser /> }
  ]
  const sectionUserMatch = [{ componentMatch: <SectionMatchUser /> }]

  const [component, setComponent] = useState(sectionAboutUser[0].component)
  const [] = useState(sectionUserTest[0].componentTest)
  const [] = useState(sectionUserAbilities[0].componentAbilities)
  const [] = useState(sectionUserMatch[0].componentMatch)

  return (
    <div className="content-menu-user">
      <div className="content-menu-me">
        {sectionAboutUser.map((item, a) => (
          <a
            key={a}
            onClick={() => setComponent(item.component)}
            className="title-menu-user"
          >
            Sobre Mi
          </a>
        ))}
        <span className="line-hover-me"></span>
      </div>
      <div className="content-info-me">{component}</div>

      <div className="content-menu-test">
        {sectionUserTest.map((item, e) => (
          <a
            key={e}
            onClick={() => setComponent(item.componentTest)}
            className="title-menu-user"
          >
            Test
          </a>
        ))}
        <span className="line-hover-test"></span>
      </div>

      <div className="content-menu-abilities">
        {sectionUserAbilities.map((item, i) => (
          <a
            key={i}
            onClick={() => setComponent(item.componentAbilities)}
            className="title-menu-user"
          >
            Habilidades
          </a>
        ))}
        <span className="line-hover-abilities"></span>
      </div>

      <div className="content-menu-match">
        {sectionUserMatch.map((item, o) => (
          <a
            key={o}
            onClick={() => setComponent(item.componentMatch)}
            className="title-menu-match"
          >
            Match
          </a>
        ))}
        <span className="line-hover-match"></span>
      </div>
    </div>
  )
}

export default MenuCardUser
