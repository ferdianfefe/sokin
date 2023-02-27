import React from 'react'
import Button from 'components/elements/Button'
import Navbar from 'components/elements/Navbar'

export default function TestComponents() {
  return (
    <>
      <div className='max-w-sm justify-center flex'>
        <Button text='Button' type='secondary' size='small'/>
        <Button text='Button' size='big'/>
      </div>
      <div>
        <Navbar />
      </div>
    </>
  )
}
