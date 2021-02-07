import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsUserLoged } from '../../redux/auth/auth-selectors';
import UserMenu from './UserMenu/UserMenu';
import AuthNav from './AuthNav/AuthNav';
import routes from '../../routes';
import navStyle from './Navigation.module.css';

function Navigation() {
  const isOnline = useSelector(getIsUserLoged);
  return (
    <div className={navStyle.navigationContainer}>
      <div className={navStyle.listItem}>
        <NavLink to={routes.home} className={navStyle.navLink}>
          Home
        </NavLink>
        {isOnline && (
          <NavLink to={routes.contacts} className={navStyle.navLink}>
            Contacts
          </NavLink>
        )}
      </div>
      {isOnline ? <UserMenu /> : <AuthNav />}
      {/* <AuthNav />
      <UserMenu /> */}
    </div>
  );
}

export default Navigation;
