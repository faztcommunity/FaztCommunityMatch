import Head from 'next/head'
import React from 'react'
import Footer from '../../components/organisms/footer/Footer'
import NavProfile from '../../components/organisms/profile/NavProfile'
import SectionCreateProject from '../../components/organisms/project/SectionCreateProject'

function Project() {
  return (
    <>
      <Head>
        <title>Proyecto</title>
      </Head>
      <header>
        <NavProfile />
      </header>
      <main className="main-section-create-project">
        <section className="section-create-new-project">
        <SectionCreateProject />
        </section>
        <Footer />
      </main>
    </>
  )
}
export default Project
