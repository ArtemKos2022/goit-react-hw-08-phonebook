import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectContacts,
  selectNameFilter,
  selectIsLoading,
  selectError,
} from 'redux/contacts/selectors';
import { fetchContacts, deleteContact } from 'redux/contacts/operations';
import { DeleteIcon } from '@chakra-ui/icons';
import { Box } from '@chakra-ui/react';
import css from './Contacts.module.css';

export const getVisibleContacts = (contacts, filteredName) => {
  if (!filteredName) {
    return contacts;
  }
  const normalizedFilter = filteredName?.toLowerCase();
  const filteredContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(normalizedFilter);
  });

  return filteredContacts;
};

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts) ?? [];
  const filteredName = useSelector(selectNameFilter);
  const visibleContacts = getVisibleContacts(contacts, filteredName);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDelete = item => dispatch(deleteContact(item.id));

  return (
    <div className={css.contactsBlock}>
      <Box h="7">{isLoading && !error && <b>Request in progress...</b>}</Box>

      <ul className={css.listOfContacts}>
        {contacts.length > 0 &&
          visibleContacts.map(item => (
            <li className={css.contactItem} key={item.id}>
              {item.name}: {item.number}
              <button
                className={css.button}
                type="button"
                onClick={() => handleDelete(item)}
              >
                Delete <DeleteIcon />
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}
