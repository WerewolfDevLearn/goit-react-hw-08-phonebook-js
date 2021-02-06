import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/auth-opretion';
import RegistrationFormStl from './RegistrationForm.module.css';

export default function RegistrationForm() {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const dispatch = useDispatch();

  const onRegisterUser = (userName, userEmail, userPassword) => {
    const user = { name: userName, email: userEmail, password: userPassword };
    console.log(user);
    dispatch(register(user));
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
      case 'userName':
        setUserName(value);
        break;
      default:
        break;
    }
  };

  const onSubmitRegisterUser = e => {
    e.preventDefault();
    onRegisterUser(userName, userEmail, userPassword);
    setUserName('');
    setUserEmail('');
    setUserPassword('');
  };

  return (
    <form
      onSubmit={onSubmitRegisterUser}
      className={RegistrationFormStl.ContactForm}
    >
      <label className={RegistrationFormStl.label}>
        Name
        <input
          type="text"
          value={userName}
          onChange={onInputValue}
          name="userName"
          className={RegistrationFormStl.input}
        />
      </label>
      <label className={RegistrationFormStl.label}>
        Email
        <input
          type="email"
          value={userEmail}
          onChange={onInputValue}
          name="userEmail"
          autoCapitalize="off"
          className={RegistrationFormStl.input}
        />
      </label>
      <label className={RegistrationFormStl.label}>
        Password
        <input
          type="password"
          value={userPassword}
          onChange={onInputValue}
          name="userPassword"
          autoCapitalize="off"
          className={RegistrationFormStl.input}
        />
      </label>
      <button type="submit" className={RegistrationFormStl.buttonSubmit}>
        Register
      </button>
    </form>
  );
}
