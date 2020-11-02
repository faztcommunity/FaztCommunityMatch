import Head from 'next/head'
import NavProfile from '../../components/organisms/profile/NavProfile'
import MyProjectColumnOne from '../../components/organisms/my-project/MyProjectColumnOne'
import MyProjectColumnTwo from '../../components/organisms/my-project/MyProjectColumnTwo'
import MyProjectColumnThree from '../../components/organisms/my-project/MyProjectColumnThree'
import React from 'react'
import Footer from '../../components/organisms/footer/Footer'

function MyProject() {
  return (
    <>
      <Head>
        <title>Mi Proyecto</title>
      </Head>

      <header>
        <NavProfile />
      </header>



      <section className="section-my-project-global">
        <div className="section-my-project">
        <MyProjectColumnOne />
        <MyProjectColumnTwo />
        <MyProjectColumnThree />
        </div>
      <Footer />
      </section>

    </>
  )
}
export default MyProject
