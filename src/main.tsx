import 'antd/dist/reset.css';
// import './styles/globals.scss';
import './i18n';
import { Provider } from 'jotai';
import ReactDOM from 'react-dom/client';

import App from './App';

import 'react-nice-scroll/dist/styles.css';

ReactDOM.createRoot(document.querySelector('#root') as HTMLElement).render(
    <Provider>
      <App />
    </Provider>
);
