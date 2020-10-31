import Head from 'next/head'
import NavProfile from '../../components/organisms/profile/NavProfile'
import MyProjectColumnOne from '../../components/organisms/my-project/MyProjectColumnOne'
import MyProjectColumnTwo from '../../components/organisms/my-project/MyProjectColumnTwo'
import MyProjectColumnThree from '../../components/organisms/my-project/MyProjectColumnThree'

function MyProject() {
  return (
    <>
      <Head>
        <title>Mi Proyecto</title>
      </Head>

      <header>
        <NavProfile />
      </header>
      <section className="section-my-project">
        <MyProjectColumnOne />
        <MyProjectColumnTwo />
        <MyProjectColumnThree />
      </section>
    </>
  )
}
export default MyProject
