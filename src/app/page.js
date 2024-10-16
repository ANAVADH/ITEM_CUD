'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Spinner } from '@radix-ui/themes';
export default function Home() {
  const router = useRouter();
  useEffect(()=>{
    router.push('/login');
  },[])
  return (
 <div className='flex flex-col items-center justify-center min-h-screen gap-4'>
  <Spinner size="3" />
  </div>
  );
}
