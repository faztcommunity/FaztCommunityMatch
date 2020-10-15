import Head from 'next/head'
import QuestionUserOne from '../../components/organisms/test-user/QuestionUserOne'
import QuestionUserTwo from '../../components/organisms/test-user/QuestionUserTwo'
import QuestionUserThree from '../../components/organisms/test-user/QuestionUserThree'
import QuestionUserFour from '../../components/organisms/test-user/QuestionUserFour'
import QuestionUserFive from '../../components/organisms/test-user/QuestionUserFive'
import TitleDescriptionTestUser from '../../components/molecules/test-user/TitleDescriptionTestUser'
import React, { useState } from 'react'
import QuestionUserSix from '../../components/organisms/test-user/QuestionUserSix'
import QuestionUserSeven from '../../components/organisms/test-user/QuestionUserSeven'
import QuestionUserEight from '../../components/organisms/test-user/QuestionUserEight'
import QuestionUserNine from '../../components/organisms/test-user/QuestionUserNine'
import QuestionUserTen from '../../components/organisms/test-user/QuestionUserTen'

function TestUser() {
  const [page, setPage] = useState(0)

if (page === 0){

  return (
    <>
      <Head>
        <title>Test Usuario</title>
      </Head>

      <div>
      <section className="global-test-user">
      <TitleDescriptionTestUser />
        <QuestionUserOne />
        <QuestionUserTwo />
        <QuestionUserThree />
        <QuestionUserFour />
        <QuestionUserFive />
        <button onClick={() => setPage(page + 1)} className="btn-next-question">Continuar</button>
</section>
      </div>
    </>
  )
}

if(page === 1){
  return(
<div>
      <section className="global-test-user">
        <QuestionUserSix />
        <QuestionUserSeven />
        <QuestionUserEight />
        <QuestionUserNine />
        <QuestionUserTen />
        <div className="content-btns">
        <button onClick={() => setPage(page - 1)} className="btn-previus-question">Anterior</button>
        <button onClick={() => setPage(page + 1)} className="btn-next-question-two">Continuar</button>
        </div>
</section>
      </div>

  )}
}
export default TestUser
