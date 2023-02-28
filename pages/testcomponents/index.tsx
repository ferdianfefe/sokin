import React from 'react'
import Button from 'components/elements/Button'
import Navbar from 'components/elements/Navbar'

export default function TestComponents() {
  return (
    <>
      <div className='grid-flow-row max-w-sm align-middle'>
        <Button text='Button' type='secondary' size='small'/>
        <Button text='Masuk' size='big'/>
      </div>
      <div className='mt-2'>
        <Navbar location='home'/>
      </div>
    </>
  )
}
