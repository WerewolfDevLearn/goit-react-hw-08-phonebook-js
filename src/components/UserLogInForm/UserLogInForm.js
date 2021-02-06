import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/auth-opretion';
import UserLogInFormStl from './UserLogInForm.module.css';

export default function UserLogInForm() {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const dispatch = useDispatch();

  const onlogInUser = (userEmail, userPassword) => {
    const userData = { email: userEmail, password: userPassword };
    console.log(userData);
    dispatch(logIn(userData));
  };

  const onInputValue = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'userEmail':
        setUserEmail(value);
        break;
      case 'userPassword':
        setUserPassword(value);
        break;
      default:
        break;
    }
  };
  const onSubmitLogInUser = e => {
    e.preventDefault();
    onlogInUser(userEmail, userPassword);
    setUserEmail('');
    setUserPassword('');
  };

  return (
    <form onSubmit={onSubmitLogInUser} className={UserLogInFormStl.ContactForm}>
      <label className={UserLogInFormStl.label}>
        Email
        <input
          type="email"
          value={userEmail}
          onChange={onInputValue}
          name="userEmail"
          className={UserLogInFormStl.input}
        />
      </label>
      <label className={UserLogInFormStl.label}>
        Password
        <input
          type="password"
          value={userPassword}
          onChange={onInputValue}
          name="userPassword"
          className={UserLogInFormStl.input}
        />
      </label>
      <button type="submit" className={UserLogInFormStl.buttonSubmit}>
        LogIn
      </button>
    </form>
  );
}
