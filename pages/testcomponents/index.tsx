import React from 'react'
import Button from 'components/elements/Button'
import Navbar from 'components/elements/NavbarCustomer'
import Input from 'components/elements/Input'
import NavbarCustomer from 'components/elements/NavbarCustomer'
import NavbarMerchant from 'components/elements/NavbarMerchant'

export default function TestComponents() {
  return (
    <>
      <div className='flex flex-col max-w-sm align-middle'>
        <Button text='Button' type='secondary' size='small'/>
        <Button text='Masuk' size='big'/>
      </div>
      <div className='mt-2'>
        <NavbarCustomer location='home'/>
        <NavbarMerchant location='home'/>
      </div>
      <div>
        <Input text='Nama Pengguna' side='/images/profil.svg'/>
        <Input text='E-mail' side='/images/envelope.svg'/>
        <Input text='Password' side='/images/Lock.svg'/>
      </div>

    </>
  )
}
