'use client'
import { deleteItem } from '@/lib/actions'
import { TrashIcon } from '@radix-ui/react-icons'
import { Card, Flex, IconButton, Text } from '@radix-ui/themes'
import React from 'react'
import ToastMessage, { showToast } from '../../components/ToastMessage';

function ItemCard({ title, desc, itemId, createdBy }) {

	const currentUser = localStorage.getItem('user')

	console.log(`createdBy:${createdBy},currentUser:${currentUser}`)

	const handleDelete = async (id) => {
		if (id) {
			const res = await deleteItem(id)
			if (res.success) {
				showToast(res.message, true);
			} else {
				showToast(res.message, false);
			}
		}
	}

	return (
		<Card mt={2} variant="surface">
			<ToastMessage />
			<Flex justify='between'>
				<div>
					<Text as="div" size="2" weight="bold">
						{title}
					</Text>
					<Text as="div" color="gray" size="2">
						{desc}
					</Text>
				</div>
				{
					currentUser == createdBy &&
					<IconButton onClick={() => handleDelete(itemId)} disabled={false} size="3" variant="soft">
						<TrashIcon color='red' width="22" height="22" />
					</IconButton>
				}
			</Flex>
		</Card>
	)
}

export default ItemCard