import React, { useState } from 'react'
import Head from 'next/head'
import RangeSlider from '../../components/molecules/test-user/RangeSlider'

function TestUser() {
  return (
    <>
      <Head>
        <title>Test Usuario</title>
      </Head>

      <div>
        <RangeSlider />
      </div>
    </>
  )
}
export default TestUser
