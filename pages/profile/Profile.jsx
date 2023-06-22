import { useRouter } from 'next/router';
import { useEffect } from 'react';

const ProfilePage = () => {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('access_token');

    if (!isLoggedIn) {
      router.push('/auth/sign-in');
    }
  }, [router]);

  return <div>Profile page</div>;
};

export default ProfilePage;
