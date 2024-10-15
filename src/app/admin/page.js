import { Heading } from '@radix-ui/themes'
import React from 'react'
import Logout from '../dashboard/Logout'
import AddUser from './AddUser'


function Admin() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen gap-4'>
      <Heading color='orange' mb="2" size="9">Admin Panel</Heading>
      <AddUser/>
      <Logout/>

    </div>
  )
}

export default Admin