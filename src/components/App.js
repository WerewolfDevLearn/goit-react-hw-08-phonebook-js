import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import { getCurrentUser } from '../redux/auth/auth-opretion';
import {
  HomePage,
  UserLogInPage,
  UserRegistrationPage,
  ContactsPage,
} from '../Pages';

import Layout from './Layout/Layout';
// import Loader from './Loader/Loader';
import { ToastContainer } from 'react-toastify';

import routes from '../routes';

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <Layout>
      <ToastContainer />
      {/* <Suspense fallback={<Loader />}> */}
      <Switch>
        <Route path={routes.home} exact component={HomePage} />
        <Route path={routes.contacts} exact component={ContactsPage} />
        <Route path={routes.logIn} component={UserLogInPage} />
        <Route path={routes.registration} component={UserRegistrationPage} />
        <Redirect to={routes.home} />
      </Switch>
      {/* </Suspense> */}
    </Layout>
  );
}
