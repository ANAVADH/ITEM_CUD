
import {  Heading } from '@radix-ui/themes'
import React from 'react'
import AddItem from './AddItem'
import ViewItems from './ViewItems'
import Logout from './Logout'



function Dashboard() {

  return (
    <div className='flex flex-col items-center justify-center min-h-screen gap-4'>
      <Heading color='jade' mb="2" size="9">Hi,Welcome Back</Heading>
      <AddItem />
      <ViewItems />
      <Logout/>
    </div>
  )
}

export default Dashboard