import { RouterProvider } from 'react-router-dom';

import { router } from './routes';
import { useMount } from 'ahooks';
import { setLayout } from './utils/Layout';

function App() {
  useMount(() => {
    setLayout();
  });
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
