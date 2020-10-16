import React from 'react'
import Head from 'next/head'
import NavProfile from '../../components/organisms/profile/NavProfile'
import SectionUserInfo from '../../components/organisms/profile/SectionUserInfo'
import RecordUser from '../../components/molecules/profile/RecordUser'
import BtonChange from '../../components/molecules/profile/BtonChange'
import CardMatchProject from '../../components/organisms/match/CardMatchProject'

function Plans() {
  return (
    <>
      <Head>
        <title>Haz Match!</title>
      </Head>

      <header>
        <NavProfile />
      </header>
      <main className="content-global-match-project">
      <CardMatchProject />
      </main>
    </>
  )
}
export default Plans
