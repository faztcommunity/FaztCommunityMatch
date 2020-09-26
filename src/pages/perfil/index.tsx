import React from 'react'
import Head from 'next/head'
import NavProfile from '../../components/organisms/profile/NavProfile'
import SectionUserInfo from '../../components/organisms/profile/SectionUserInfo'
import RecordUser from '../../components/molecules/profile/RecordUser'

function Plans() {
  return (
    <>
      <Head>
        <title>Perfil</title>
      </Head>

      <header>
        <NavProfile />
      </header>
      <section>
        <SectionUserInfo />
      </section>
      <section>
        <RecordUser />
      </section>
    </>
  )
}
export default Plans
