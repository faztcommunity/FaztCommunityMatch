import React from 'react'
import Head from 'next/head'
import NavProfile from '../../components/organisms/profile/NavProfile'
import MyProjectColumnOne from '../../components/organisms/my-project/MyProjectColumnOne'


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
      </section>
    </>
  )
}
export default MyProject
