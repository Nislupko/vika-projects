import * as ReactDOM from 'react-dom';
import {BrowserRouter, NavLink, Route, Routes, } from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store/store';
import {Router} from "./helpers/Router";
import {LandingPage} from "./features/landing";
import {Layout} from "./components/Layout";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path={Router.HOME.path} element={<Layout />}>
          <Route index element={<LandingPage/>} />
          <Route path={Router.DASHBOARD.path} element={<div>Dashboard</div>} />
          <Route path={Router.SIGN_ON.path} element={<div>Sign on</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
