import React from 'react'
import Head from 'next/head'
import NavProfile from '../../components/organisms/profile/NavProfile'
import ChooseTest from '../../components/organisms/tests/ChooseTest'
import Footer from '../../components/organisms/footer/Footer'

function Tests() {
  return (
    <>
      <Head>
        <title>Tests</title>
      </Head>
      <NavProfile />
      <ChooseTest />
      <Footer />
    </>
  )
}
export default Tests
