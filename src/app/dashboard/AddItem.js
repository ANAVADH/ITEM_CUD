'use client'
import { createItems } from '@/lib/actions'
import { Button, Dialog, Flex, Text, TextField } from '@radix-ui/themes'
import React, { useState } from 'react'
import ToastMessage, { showToast } from '../../components/ToastMessage';

function AddItem() {
const [title,setTitle] = useState('')
const [description,setDescription] = useState('')
const currentUser = localStorage.getItem('user')

const handleSave=async()=>{
if(title.length > 0 && description.length > 0){
	const res =await createItems({title,description,userId:parseInt(currentUser)})
	if(res.success){
		showToast(res.message, true);
		setTitle('')
		setDescription('')
	}else{
		showToast(res.message, false);
	}
}}

	return (
		<div>
			<Dialog.Root>
				<Dialog.Trigger>
					<Button color='jade' style={{ width: "150px" }}>Add Item</Button>
				</Dialog.Trigger>
				<Dialog.Content maxWidth="450px">
					<Dialog.Title>Add Item</Dialog.Title>
					<Dialog.Description size="2" mb="4">
						Add your item here
					</Dialog.Description>

					<Flex direction="column" gap="3">
						<label>
							<Text as="div" size="2" mb="1" weight="bold">
								Title
							</Text>
							<TextField.Root
							value={title}
                                onChange={(e) =>setTitle(e.target.value)}
								placeholder="Enter your title here"
							/>
						</label>
						<label>
							<Text as="div" size="2" mb="1" weight="bold">
								Description
							</Text>
							<TextField.Root
							value={description}
                                onChange={(e) =>setDescription(e.target.value)}
								placeholder="Enter your description"
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

export default AddItem