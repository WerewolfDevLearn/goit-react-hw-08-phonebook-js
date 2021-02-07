import React, { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Redirect } from 'react-router-dom';
import { getCurrentUser } from '../redux/auth/auth-opretion';
import { getRefreshingUser } from '../redux/auth/auth-selectors';
import PrivateRoute from './Routes/PrivetRoute';
import PubliceRoute from './Routes/PabliceRoute';
import { HomePage } from '../Pages';
import Layout from './Layout/Layout';
import Loader from './Loader/Loader';
import { ToastContainer } from 'react-toastify';
import routes from '../routes';

const UserLogInPage = lazy(() =>
  import('../Pages/UserLogInPage/UserLoginPage'),
);
const UserRegistrationPage = lazy(() =>
  import('../Pages/UserRegistrationPage/UserRegistrationPage'),
);

const ContactsPage = lazy(() => import('../Pages/ContactsPage/ContactsPage'));

export default function App() {
  const dispatch = useDispatch();
  const refreshingUser = useSelector(getRefreshingUser);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return refreshingUser ? (
    <Loader />
  ) : (
    <Layout>
      <ToastContainer />

      <Suspense fallback={<Loader />}>
        <Switch>
          {/* <Route path={routes.home} exact component={HomePage} /> */}
          <PubliceRoute exact path={routes.home}>
            <HomePage />
          </PubliceRoute>

          {/* <Route path={routes.contacts} exact component={ContactsPage} /> */}
          <PrivateRoute path={routes.contacts}>
            <ContactsPage />
          </PrivateRoute>

          {/* <Route path={routes.logIn} component={UserLogInPage} /> */}
          <PubliceRoute
            exact
            path={routes.logIn}
            restricted
            redirectTo={routes.contacts}
          >
            <UserLogInPage />
          </PubliceRoute>

          {/* <Route path={routes.registration} component={UserRegistrationPage} /> */}

          <PubliceRoute
            exact
            path={routes.registration}
            restricted
            redirectTo={routes.contacts}
          >
            <UserRegistrationPage />
          </PubliceRoute>

          <Redirect to={routes.home} />
        </Switch>
      </Suspense>
    </Layout>
  );
}
