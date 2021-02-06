import { NavLink } from 'react-router-dom';
import routes from '../../../routes';
import navStyle from '../Navigation.module.css';

export default function AuthNav() {
  return (
    <ul className={navStyle.list}>
      <li key="UserRegistration" className={navStyle.listItem}>
        <NavLink to={routes.registration} className={navStyle.navLink}>
          Registration
        </NavLink>
      </li>
      <li key="UserLogIn" className={navStyle.listItem}>
        <NavLink to={routes.logIn} className={navStyle.navLink}>
          Login
        </NavLink>
      </li>
    </ul>
  );
}
