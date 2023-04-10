import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import { fetchContacts } from 'redux/contacts/operations';
import Phonebook from 'components/Phonebook/Phonebook';
import Filter from 'components/Filter/Filter';
import Contacts from 'components/Contacts/Contacts';

export default function ContactsList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <Phonebook />
      <Filter />
      <Contacts />
    </div>
  );
}
