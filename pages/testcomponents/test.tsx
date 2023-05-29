import React from 'react'
import Button from 'components/elements/Button'
import Navbar from 'components/elements/Navbar'
import DefaultLayout from 'components/layout/DefaultLayout'
import PopupNotif from 'components/elements/PopupNotif'

export default function TestComponents() {
  return (
    <>
      <DefaultLayout location='home'>
        <div className='min-h-screen'>
        </div>
      </DefaultLayout>
    </>
  )
}