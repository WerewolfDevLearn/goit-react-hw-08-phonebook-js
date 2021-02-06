import { useState } from 'react';
import RegistrationFormStl from './RegistrationForm.module.css';

export default function RegistrationForm() {
  const [userName, setUsername] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

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
        setUsername(value);
        break;
      default:
        break;
    }
  };
  return (
    <form className={RegistrationFormStl.ContactForm}>
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
          className={RegistrationFormStl.input}
        />
      </label>
      <button type="submit" className={RegistrationFormStl.buttonSubmit}>
        Register
      </button>
    </form>
  );
}
