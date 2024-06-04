import { Suspense } from 'react';

import { useMount } from 'ahooks';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { ROUTE_PATH } from '@/admin/constants/routes';
import { getAccessToken } from '@/admin/store/auth/useAuth';
// import { useProfile } from '@/store/profile/useProfile';
// import '@/admin/assets/scss/index.scss';

const AppLayout = () => {
  
  const navigate = useNavigate();
  // const location = useLocation();
  // useProfile();

  useMount(() => {
    console.log(123123);
    const isLogin = getAccessToken();
    if (!isLogin) {
      return navigate(ROUTE_PATH.SIGN_IN);
    }

    // if (location.pathname === '/') {
    //   navigate(ROUTE_PATH.INDEX);
    // }
  });

  return (
    <Suspense fallback={undefined}>
      <Outlet />
    </Suspense>
  );
};

export default AppLayout;
