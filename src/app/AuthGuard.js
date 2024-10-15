'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const AuthGuard = ({ children, adminOnly = false }) => {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('user');

    if (!token) {
      router.push('/login');
    } else if (adminOnly && userId !== '1') {
      router.push('/dashboard');
    } else {
      setIsAuthorized(true);
    }
  }, [router, adminOnly]);

  if (!isAuthorized) return null; 

  return <>{children}</>;
};

export default AuthGuard;

