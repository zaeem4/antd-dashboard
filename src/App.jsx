/*!
=========================================================
* Muse Ant Design Dashboard - v1.0.0
=========================================================
* Product Page: https://www.creative-tim.com/product/muse-ant-design-dashboard
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/muse-ant-design-dashboard/blob/main/LICENSE.md)
* Coded by Creative Tim
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { MeshProvider } from '@meshsdk/react';
import { App as AntdApp } from 'antd';

import { store, persistor } from './redux/store';

import 'antd/dist/reset.css';
import './assets/styles/main.css';
import './assets/styles/responsive.css';

import Router from './router';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MeshProvider>
          <AntdApp>
            <div className="App">
              <Router />
            </div>
          </AntdApp>
        </MeshProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
