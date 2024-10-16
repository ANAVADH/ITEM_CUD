
import { Button, Dialog, Flex, IconButton } from '@radix-ui/themes'
import React from 'react'
import ItemCard from './ItemCard'
import { CrossCircledIcon } from '@radix-ui/react-icons'
import prisma from '@/lib/prisma'


async function ViewItems() {

	const data = await prisma.items.findMany()

	return (
		<div>
			<Dialog.Root>
				<Dialog.Trigger>
					<Button color='jade' style={{ width: "150px" }}>View Items</Button>
				</Dialog.Trigger>

				<Dialog.Content maxHeight={'600px'} maxWidth="600px">
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
								<ItemCard key={index} title={eachItem?.title} desc={eachItem?.description} createdBy={eachItem?.createdBy} itemId={eachItem?.id} />
							))
						}
					</div>

				</Dialog.Content>
			</Dialog.Root>
		</div>
	)
}

export default ViewItems