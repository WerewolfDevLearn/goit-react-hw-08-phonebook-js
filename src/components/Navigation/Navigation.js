import { NavLink } from 'react-router-dom';
import UserMenu from '../UserMenu/UserMenu';
import routes from '../../routes';
import navStyle from './Navigation.module.css';

const Navigation = () => {
  return (
    <ul className={navStyle.list}>
      <li key="NavigationHome" className={navStyle.listItem}>
        <NavLink to={routes.home} className={navStyle.navLink}>
          Home
        </NavLink>
      </li>
      <li key="UserRegistration" className={navStyle.listItem}>
        <NavLink to={routes.userRegistration} className={navStyle.navLink}>
          Registration
        </NavLink>
      </li>
      <li key="UserLogIn" className={navStyle.listItem}>
        <NavLink to={routes.userLogIn} className={navStyle.navLink}>
          Login
        </NavLink>
      </li>
      <li key="UserBar" className={navStyle.listItem}>
        <UserMenu />
      </li>
    </ul>
  );
};

export default Navigation;
