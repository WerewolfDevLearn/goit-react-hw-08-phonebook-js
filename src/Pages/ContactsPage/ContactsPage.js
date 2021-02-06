import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getContacts,
  getLoader,
  getError,
  fetchContacts,
} from '../../redux/contacts';
import { ToastContainer } from 'react-toastify';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactsList from '../../components/ContactList/ContactList';
import Filter from '../../components/Filter/Filter';
import Loader from '../../components/Loader/Loader';
import Error from '../../components/Error/Error';

import ContactsPageSTL from './ContactsPage.module.css';

export default function ContactsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(getContacts);
  const loader = useSelector(getLoader);
  const error = useSelector(getError);

  return (
    <div className={ContactsPageSTL.container}>
      <h2 className={ContactsPageSTL.heading}>PhoneBook</h2>
      <ContactForm />
      <h2 className={ContactsPageSTL.heading}>Contacts</h2>
      <ToastContainer />
      {contacts.length > 1 && <Filter />}
      {loader && <Loader />}
      {error && <Error />}
      {contacts.length > 0 && !loader && <ContactsList />}
    </div>
  );
}
