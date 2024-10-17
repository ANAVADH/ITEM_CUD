'use client'
import { getAllItems } from '@/lib/actions';
import React, { useEffect, useState } from 'react'
import ItemCard from '../dashboard/ItemCard';
import { Button, Dialog, Flex, IconButton, } from '@radix-ui/themes';
import { CrossCircledIcon } from '@radix-ui/react-icons';
import { useRouter } from 'next/navigation';

function AllItems() {
    const router = useRouter();
    const [data, setData] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            const items = await getAllItems();
            setData(items);
        };
        fetchData();
    }, [isOpen]);

    const handleHomeClick = () => {
        const token = localStorage.getItem('token');
        if (token) {
            router.push('/dashboard')
        } else {
            router.push('/login')
        }
    }


    return (
        <div className='flex flex-col items-center justify-center min-h-screen gap-4'>
            <Dialog.Root onOpenChange={setIsOpen}>

                <Dialog.Trigger>
                    <Button color='jade' style={{ width: "150px" }}>View All Items</Button>
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
                                <ItemCard key={index} title={eachItem?.title} desc={eachItem?.description} createdBy={eachItem?.createdBy} itemId={eachItem?.id} onDeleteItem={() => { }} />
                            ))
                        }
                    </div>

                </Dialog.Content>
            </Dialog.Root>
            <Button onClick={handleHomeClick} size='2' color="indigo" variant="solid" highContrast>
                Home
            </Button>
        </div>
    )
}

export default AllItems