import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { getIsUserLoged } from '../../redux/auth/auth-selectors';
import routes from '../../routes';

export default function PrivateRoute({ children, ...routeProps }) {
  const isUseLoggedIn = useSelector(getIsUserLoged);

  return (
    <Route {...routeProps}>
      {isUseLoggedIn ? children : <Redirect to={routes.logIn} />}
    </Route>
  );
}
