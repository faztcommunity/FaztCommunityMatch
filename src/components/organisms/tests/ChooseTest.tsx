import React from 'react'
import BtonNextTest from '../../atoms/tests/BtonNextTest'
import TitleChooseTest from '../../atoms/tests/TitleChooseTest'
import CardTestProject from '../../molecules/tests/CardTestProject'
import CardTestUser from '../../molecules/tests/CardTestUser'

function ChooseTest() {
  return (
    <div className="content-choose-test">
      <TitleChooseTest />
      <div className="content-cards-test">
        <CardTestUser />
        <CardTestProject />
      </div>
      <BtonNextTest />
    </div>
  )
}

export default ChooseTest
