import React from 'react'
import Button from 'components/elements/Button'
import Navbar from 'components/elements/Navbar'
import Input from 'components/elements/Input'
import ProductCard from 'components/elements/ProductCard'

export default function TestComponents() {
  return (
    <>
      <div className='flex flex-col max-w-sm align-middle'>
        <Button text='Button' type='secondary' size='small'/>
        <Button text='Masuk' size='big'/>
      </div>
      <div className='mt-2'>
        <Navbar location='home' role='customer'/>
        <Navbar location='home'role='merchant'/>
      </div>
      <div>
        <Input text='Nama Pengguna' side='/images/profil.svg'/>
        <Input text='E-mail' side='/images/envelope.svg'/>
        <Input text='Password' side='/images/Lock.svg'/>
      </div>
      <div>
        <ProductCard />
      </div>

    </>
  )
}
