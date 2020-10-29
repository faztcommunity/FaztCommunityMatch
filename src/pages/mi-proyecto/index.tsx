import React from 'react'
import Head from 'next/head'
import NavProfile from '../../components/organisms/profile/NavProfile'


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

      </section>
    </>
  )
}
export default MyProject
