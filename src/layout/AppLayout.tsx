import { Suspense } from 'react';

import { useMount } from 'ahooks';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
  useMount(() => {
  });

  return (
    <Suspense fallback={undefined}>
      <Outlet />
    </Suspense>
  );
};

export default AppLayout;
