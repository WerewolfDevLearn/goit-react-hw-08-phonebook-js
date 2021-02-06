import React, { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import {
  HomePage,
  UserLogInPage,
  UserRegistrationPage,
  ContactsPage,
} from '../Pages';
import Layout from './Layout/Layout';
import Loader from './Loader/Loader';
import { ToastContainer } from 'react-toastify';

import routes from '../routes';

export default function App() {
  return (
    <Layout>
      <ToastContainer />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path={routes.home} exact component={HomePage} />
          <Route path={routes.userLogIn} component={UserLogInPage} />
          <Route
            path={routes.userUserRegistration}
            component={UserRegistrationPage}
          />
          <Route path={routes.userContacts} component={ContactsPage} />
          <Redirect to={routes.home} />
        </Switch>
      </Suspense>
    </Layout>
  );
}
