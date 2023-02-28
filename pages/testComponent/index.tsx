import React from 'react'
import Button from 'components/elements/Button'

export default function index() {
  return (
    <div className='max-w-sm justify-center flex'>
        <Button text='Button' type='secondary' size='small'/>
        <Button text='Button' size='big'/>
    </div>
  )
}
