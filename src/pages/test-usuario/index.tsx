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
import QuestionUserEleven from '../../components/organisms/test-user/QuestionUserEleven'
import QuestionUserTwelve from '../../components/organisms/test-user/QuestionUserTwelve'
import QuestionUserThirteen from '../../components/organisms/test-user/QuestionUserThirteen'
import QuestionUserFourteen from '../../components/organisms/test-user/QuestionUserFourteen'
import QuestionUserFiveteen from '../../components/organisms/test-user/QuestionUserFiveteen'
import QuestionUserSixteen from '../../components/organisms/test-user/QuestionUserSixteen'
import QuestionUserSeventeen from '../../components/organisms/test-user/QuestionUserSeventeen'
import QuestionUserEighteen from '../../components/organisms/test-user/QuestionUserEighteen'
import QuestionUserNineteen from '../../components/organisms/test-user/QuestionUserNineteen'
import QuestionUserTwenty from '../../components/organisms/test-user/QuestionUserTwenty'
import TestCompleted from '../../components/organisms/test-user/TestCompleted'

function TestUser() {
  const [page, setPage] = useState(0)

  if (page === 0) {
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
            <button
              onClick={() => setPage(page + 1)}
              className="btn-next-question"
            >
              Continuar
            </button>
          </section>
        </div>
      </>
    )
  }

  if (page === 1) {
    return (
      <div>
        <section className="global-test-user">
          <QuestionUserSix />
          <QuestionUserSeven />
          <QuestionUserEight />
          <QuestionUserNine />
          <QuestionUserTen />
          <div className="content-btns">
            <button
              onClick={() => setPage(page - 1)}
              className="btn-previus-question"
            >
              Anterior
            </button>
            <button
              onClick={() => setPage(page + 1)}
              className="btn-next-question-two"
            >
              Continuar
            </button>
          </div>
        </section>
      </div>
    )
  }

  if (page === 2) {
    return (
      <div>
        <section className="global-test-user">
          <QuestionUserEleven />
          <QuestionUserTwelve />
          <QuestionUserThirteen />
          <QuestionUserFourteen />
          <QuestionUserFiveteen />
          <div className="content-btns">
            <button
              onClick={() => setPage(page - 1)}
              className="btn-previus-question"
            >
              Anterior
            </button>
            <button
              onClick={() => setPage(page + 1)}
              className="btn-next-question-two"
            >
              Continuar
            </button>
          </div>
        </section>
      </div>
    )
  }

  if (page === 3) {
    return (
      <div>
        <section className="global-test-user">
          <QuestionUserSixteen />
          <QuestionUserSeventeen />
          <QuestionUserEighteen />
          <QuestionUserNineteen />
          <QuestionUserTwenty />
          <div className="content-btns">
            <button
              onClick={() => setPage(page - 1)}
              className="btn-previus-question"
            >
              Anterior
            </button>
            <button
              onClick={() => setPage(page + 1)}
              className="btn-next-question-two"
            >
              Finalizar
            </button>
          </div>
        </section>
      </div>
    )
  }

  if (page === 4) {
    return (
      <section className="global-test-user-modal">
        <TestCompleted />
      </section>
    )
  }
}
export default TestUser
