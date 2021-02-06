import { useSelector, useDispatch } from 'react-redux';
import { userEmail } from '../../../redux/auth/auth-selectors';
import { logOut } from '../../../redux/auth/auth-opretion';
import defaultAvatar from '../../../images/Avatar_PH.svg';
import UserMenuStl from './UserMenu.module.css';

export default function UserMenu() {
  const email = useSelector(userEmail);
  const dispatch = useDispatch();
  const onLogOut = () => dispatch(logOut());

  return (
    <div className={UserMenuStl.userBarContainer}>
      <p className={UserMenuStl.userEmail}>{email}</p>
      <img
        src={defaultAvatar}
        alt="avatar"
        width="40"
        className={UserMenuStl.userAvatar}
      />
      <button type="button" onClick={onLogOut} className={UserMenuStl.button}>
        LogOut
      </button>
    </div>
  );
}
