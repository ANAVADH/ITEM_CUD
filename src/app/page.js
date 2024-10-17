'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Heading, Spinner, Text } from '@radix-ui/themes';
import AddUser from './admin/AddUser';
import { getAllUsers } from '@/lib/actions';
export default function Home() {

  const router = useRouter();
  const [data, setData] = useState([]);
  const [successData, setSuccessData] = useState({})

  useEffect(() => {
    if (data.length > 0) {
      router.push('/login');
    }

  }, [data])

  useEffect(() => {
    const fetchData = async () => {
      const users = await getAllUsers();
      setData(users);
    };
    fetchData();
  }, [successData]);

  const handleSuccess = (data) => {
    setSuccessData(data)
  }

  return data.length < 1 ? (
    <div className='flex flex-col items-center justify-center min-h-screen gap-4'>
      <Heading color='orange' mb="2" size="9">Create Admin</Heading>
      <Text size='2'>Note - Admin can be only created once...!</Text>
      <AddUser isAdmin={true} confirmAdminPage={handleSuccess} />
    </div>
  ) : (
    <div className='flex flex-col items-center justify-center min-h-screen gap-4'>
      <Spinner size="3" />
    </div>
  )
}
