import Head from 'next/head'
import QuestionProjectOne from '../../components/organisms/test-project/QuestionProjectOne'
import QuestionProjectTwo from '../../components/organisms/test-project/QuestionProjectTwo'
import QuestionProjectThree from '../../components/organisms/test-project/QuestionProjectThree'
import QuestionProjectFour from '../../components/organisms/test-project/QuestionProjectFour'
import QuestionProjectFive from '../../components/organisms/test-project/QuestionProjectFive'
import TitleDescriptionTestProject from '../../components/molecules/test-project/TitleDescriptionTestProject'
import React, { useState } from 'react'
import QuestionProjectSix from '../../components/organisms/test-project/QuestionProjectSix'
import QuestionProjectSeven from '../../components/organisms/test-project/QuestionProjectSeven'
import QuestionProjectEight from '../../components/organisms/test-project/QuestionProjectEight'
import QuestionProjectNine from '../../components/organisms/test-project/QuestionProjectNine'
import QuestionProjectTen from '../../components/organisms/test-project/QuestionProjectTen'
import QuestionProjectEleven from '../../components/organisms/test-project/QuestionProjectEleven'
import QuestionProjectTwelve from '../../components/organisms/test-project/QuestionProjectTwelve'
import QuestionProjectThirteen from '../../components/organisms/test-project/QuestionProjectThirteen'
import QuestionProjectFourteen from '../../components/organisms/test-project/QuestionProjectFourteen'
import QuestionProjectFiveteen from '../../components/organisms/test-project/QuestionProjectFiveteen'
import QuestionProjectSixteen from '../../components/organisms/test-project/QuestionProjectSixteen'
import QuestionProjectSeventeen from '../../components/organisms/test-project/QuestionProjectSeventeen'
import QuestionProjectEighteen from '../../components/organisms/test-project/QuestionProjectEighteen'
import QuestionProjectNineteen from '../../components/organisms/test-project/QuestionProjectNineteen'
import QuestionProjectTwenty from '../../components/organisms/test-project/QuestionProjectTwenty'
import TestCompleted from '../../components/organisms/test-project/TestCompleted'

function TestProject() {
  const [page, setPage] = useState(0)

  if (page === 0) {
    return (
      <>
        <Head>
          <title>Test Proyecto</title>
        </Head>

        <div>
          <section className="global-test-project">
            <TitleDescriptionTestProject />
            <QuestionProjectOne />
            <QuestionProjectTwo />
            <QuestionProjectThree />
            <QuestionProjectFour />
            <QuestionProjectFive />
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
        <section className="global-test-project">
          <QuestionProjectSix />
          <QuestionProjectSeven />
          <QuestionProjectEight />
          <QuestionProjectNine />
          <QuestionProjectTen />
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
        <section className="global-test-project">
          <QuestionProjectEleven />
          <QuestionProjectTwelve />
          <QuestionProjectThirteen />
          <QuestionProjectFourteen />
          <QuestionProjectFiveteen />
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
        <section className="global-test-project">
          <QuestionProjectSixteen />
          <QuestionProjectSeventeen />
          <QuestionProjectEighteen />
          <QuestionProjectNineteen />
          <QuestionProjectTwenty />
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
      <section className="global-test-project-modal">
        <TestCompleted />
      </section>
    )
  }
}
export default TestProject
