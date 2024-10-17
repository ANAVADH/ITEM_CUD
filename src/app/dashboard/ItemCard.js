'use client'
import { deleteItem } from '@/lib/actions'
import { TrashIcon } from '@radix-ui/react-icons'
import { Card, Flex, IconButton, Text } from '@radix-ui/themes'
import React from 'react'


function ItemCard({ title, desc, itemId, createdBy, onDeleteItem }) {

	const currentUser = localStorage.getItem('user')

	

	const handleDelete = async (id) => {
		if (id) {
			const res = await deleteItem(id)
			if (res.success) {
				onDeleteItem(id, true, res.message)
			} else {
				onDeleteItem(id, false, res.message)
			}
		}
	}

	return (
		<Card mt={2} variant="surface">
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