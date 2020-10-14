import Head from 'next/head'
import QuestionUserOne from '../../components/organisms/test-user/QuestionUserOne'
import QuestionUserTwo from '../../components/organisms/test-user/QuestionUserTwo'
import QuestionUserThree from '../../components/organisms/test-user/QuestionUserThree'
import QuestionUserFour from '../../components/organisms/test-user/QuestionUserFour'
import QuestionUserFive from '../../components/organisms/test-user/QuestionUserFive'

function TestUser() {
  return (
    <>
      <Head>
        <title>Test Usuario</title>
      </Head>

      <div>
      <section className="global-test-user">
        <QuestionUserOne />
        <QuestionUserTwo />
        <QuestionUserThree />
        <QuestionUserFour />
        <QuestionUserFive />
</section>
      </div>
    </>
  )
}
export default TestUser
