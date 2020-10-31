import React, { useState } from 'react'
import SectionTestProject from './SectionTestProject'
import SectionAbilitiesProject from './SectionAbilitiesProject'
import SectionMatchProject from './SectionMatchProject'

function PaginationProfileProject() {
  const sectionProjectTest = [{ componentProjectTest: <SectionTestProject /> }]
  const sectionProjectAbilities = [
    { componentAbilitiesProject: <SectionAbilitiesProject /> }
  ]
  const sectionProjectMatch = [{ componentProjectMatch: <SectionMatchProject /> }]

  const [componentProjectTest, setComponentProjectTest] = useState(sectionProjectTest[0].componentProjectTest)
  const [] = useState(sectionProjectAbilities[0].componentAbilitiesProject)
  const [] = useState(sectionProjectMatch[0].componentProjectMatch)

  return (
    <div className="content-menu-project">

      <div className="content-info-project">{componentProjectTest}</div>
      <div className="content-menu-test-project">
        {sectionProjectTest.map((item, e) => (
          <a
            key={e}
            onClick={() => setComponentProjectTest(item.componentProjectTest)}
            className="title-menu-test-project"
          >
            Test
          </a>
        ))}
        <span className="line-hover-test-project"></span>
      </div>

      <div className="content-menu-abilities-project">
        {sectionProjectAbilities.map((item, i) => (
          <a
            key={i}
            onClick={() => setComponentProjectTest(item.componentAbilitiesProject)}
            className="title-menu-project"
          >
            Requisitos
          </a>
        ))}
        <span className="line-hover-abilities-project"></span>
      </div>

      <div className="content-menu-match-project">
        {sectionProjectMatch.map((item, o) => (
          <a
            key={o}
            onClick={() => setComponentProjectTest(item.componentProjectMatch)}
            className="title-menu-match-project"
          >
            Match
          </a>
        ))}
        <span className="line-hover-match-project"></span>
      </div>
    </div>
  )
}

export default PaginationProfileProject
