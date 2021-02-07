import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { getIsUserLoged } from '../../redux/auth/auth-selectors';
import routes from '../../routes';

export default function PubliceRoute({
  children,
  redirectTo = routes.home,
  restricted = false,
  ...routeProps
}) {
  const isUseLoggedIn = useSelector(getIsUserLoged);
  const shouldRedirect = isUseLoggedIn && restricted;

  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
}
