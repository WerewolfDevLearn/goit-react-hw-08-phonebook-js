import { useState } from 'react';
import UserLogInFormStl from './UserLogInForm.module.css';

export default function UserLogInForm() {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const onInputValue = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'userName':
        setUserEmail(value);
        break;
      case 'userPassword':
        setUserPassword(value);
        break;
      default:
        break;
    }
  };

  return (
    <form className={UserLogInFormStl.ContactForm}>
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
