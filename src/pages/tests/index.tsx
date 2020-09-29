import React from 'react'
import Head from 'next/head'
import NavProfile from '../../components/organisms/profile/NavProfile'
import ChooseTest from '../../components/organisms/tests/ChooseTest'

function Tests() {
  return (
    <>
      <Head>
        <title>Tests</title>
      </Head>
      <NavProfile />
      <ChooseTest />
    </>
  )
}
export default Tests
