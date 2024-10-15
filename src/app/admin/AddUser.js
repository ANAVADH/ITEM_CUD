'use client'
import { createUser } from '@/lib/actions'
import { Button, Dialog, Flex, Text, TextField } from '@radix-ui/themes'
import React, { useState } from 'react'
import ToastMessage, { showToast } from '../../components/ToastMessage';

function AddUser() {
const [password,setPassword] = useState('')
const [email,setEmail] = useState('')

const handleSave=async()=>{
    if(email.length > 0 && password.length > 0){
       const res = await createUser(email,password)
	   if(res.success){
		showToast(res.message, true);
		setEmail('')
		setPassword('')
	}else{
		showToast(res.message, false);
	}
    }}

  return (
   	<div>
			<Dialog.Root>
				<Dialog.Trigger>
					<Button color='orange' style={{ width: "150px" }}>Add User</Button>
				</Dialog.Trigger>
				<Dialog.Content maxWidth="450px">
					<Dialog.Title>Add User</Dialog.Title>
					<Dialog.Description size="2" mb="4">
						Register User
					</Dialog.Description>

					<Flex direction="column" gap="3">
						<label>
							<Text as="div" size="2" mb="1" weight="bold">
								Email
							</Text>
							<TextField.Root
							    value={email}
                                onChange={(e) =>setEmail(e.target.value)}
								placeholder="Enter email"
							/>
						</label>
						<label>
							<Text as="div" size="2" mb="1" weight="bold">
								Password
							</Text>
							<TextField.Root
							    value={password}
                                onChange={(e) =>setPassword(e.target.value)}
								placeholder="Enter your password"
							/>
						</label>
					</Flex>

					<Flex gap="3" mt="4" justify="end">
						<Dialog.Close>
							<Button variant="soft" color="gray">
								Close
							</Button>
						</Dialog.Close>
						
							<Button onClick={handleSave}>Save</Button>
							<ToastMessage/>
						
					</Flex>
				</Dialog.Content>
			</Dialog.Root>
		</div>
  )
}

export default AddUser