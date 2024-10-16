"use client"
import { Button, Dialog, Flex, IconButton } from '@radix-ui/themes'
import React, { useEffect, useState } from 'react'
import ItemCard from './ItemCard'
import { CrossCircledIcon } from '@radix-ui/react-icons'
import { getItems } from '@/lib/actions'
import ToastMessage, { showToast } from '../../components/ToastMessage';


function ViewItems() {

	const [data, setData] = useState([]);
	const [isOpen, setIsOpen] = useState(false);
	const [itemId, setItemId] = useState(0)

	useEffect(() => {
		const fetchData = async () => {
			const items = await getItems();
			setData(items);
		};
		fetchData();
	}, [isOpen, itemId]);

	const handleDeleteStatus = (id, status, message) => {
		if (status) {
			setItemId(id)
			showToast(message, true);
		} else {
			showToast(message, false);
		}

	}


	return (
		<div>
			<Dialog.Root onOpenChange={setIsOpen}>

				<Dialog.Trigger>
					<Button color='jade' style={{ width: "150px" }}>View Items</Button>
				</Dialog.Trigger>

				<Dialog.Content maxHeight={'600px'} maxWidth="600px">
					<ToastMessage />
					<Flex className='items-center' justify='between'>
						<Dialog.Title>All Items</Dialog.Title>
						<Flex style={{ marginBottom: '10px' }}>
							<Dialog.Close >
								<IconButton size="3" variant="soft">
									<CrossCircledIcon width="22" height="22" />
								</IconButton>
							</Dialog.Close>
						</Flex>
					</Flex>

					<div className='flex flex-col  gap-5'>
						{
							data?.map((eachItem, index) => (
								<ItemCard key={index} title={eachItem?.title} desc={eachItem?.description} createdBy={eachItem?.createdBy} itemId={eachItem?.id} onDeleteItem={handleDeleteStatus} />
							))
						}
					</div>

				</Dialog.Content>
			</Dialog.Root>
		</div>
	)
}

export default ViewItems