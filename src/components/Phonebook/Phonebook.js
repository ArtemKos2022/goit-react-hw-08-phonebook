import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import { PhoneIcon } from '@chakra-ui/icons';
import { Icon } from '@chakra-ui/react';
import { BsFillPersonFill } from 'react-icons/bs';
import { InputGroup, InputLeftElement, Input } from '@chakra-ui/react';
import { toast } from 'react-toastify';
import css from './Phonebook.module.css';

export default function Phonebook() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.elements.name.value;
    const phone = form.elements.number.value;
    const existingArray = contacts.filter(contact => {
      return contact.name.toLowerCase() === name.toLowerCase();
    });

    if (existingArray.length === 0) {
      dispatch(addContact({ name, phone }));
    } else {
      toast.warn(`${name} is already in contacts.`);
    }

    form.reset();
  };

  return (
    <div className={css.phonebookWrapp}>
      <form className={css.phonebookForm} onSubmit={handleSubmit}>
        <label className={css.label}>
          Name:
          <InputGroup mb={5} mt={2} borderColor="gray.500">
            <InputLeftElement
              pointerEvents="none"
              children={
                <Icon as={BsFillPersonFill} color="gray.500" size="sm" />
              }
            />
            <Input
              type="tel"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              w={350}
              borderColor="gray.500"
              bg={'white'}
            />
          </InputGroup>
        </label>

        <label className={css.label}>
          Number:
          <InputGroup mb={7} mt={2} borderColor="gray.500">
            <InputLeftElement
              pointerEvents="none"
              children={<PhoneIcon color="gray.500" size="sm" />}
            />
            <Input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              borderColor="gray.500"
              bg={'white'}
            />
          </InputGroup>
        </label>
        <div>
          <input
            className={css.buttonInput}
            type="submit"
            value="Add contact"
          />
        </div>
      </form>
    </div>
  );
}
