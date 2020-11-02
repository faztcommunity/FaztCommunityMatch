import Head from 'next/head'
import NavProfile from '../../components/organisms/profile/NavProfile'
import SectionUserInfo from '../../components/organisms/profile/SectionUserInfo'
import RecordUser from '../../components/molecules/profile/RecordUser'
import BtonChange from '../../components/molecules/profile/BtonChange'
import React from 'react'
import Footer from '../../components/organisms/footer/Footer'

function Plans() {
  return (
    <>
      <Head>
        <title>Perfil</title>
      </Head>

      <header>
        <NavProfile />
      </header>

<main className="content-main-profile">
      <section>
        <SectionUserInfo />
      </section>
      <section>
        <RecordUser />
      </section>
      <BtonChange />
      <Footer />
      </main>
    </>
  )
}
export default Plans
