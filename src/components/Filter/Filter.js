import React from 'react';
import { setNameFilter } from '../../redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectNameFilter } from 'redux/contacts/selectors';
import { InputGroup, InputLeftElement, Input } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import css from './FilterBlock.module.css';

export default function Filter() {
  const dispatch = useDispatch();
  const filteredName = useSelector(selectNameFilter);

  return (
    <div className={css.findContactWrapp}>
      <label className={css.label}>
        Find contacts by name
        <InputGroup mb={5} mt={2} borderColor="gray.500" width={350}>
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="gray.500" size="sm" />}
          />
          <Input
            className={css.input}
            type="text"
            name="filter"
            value={filteredName}
            onChange={event =>
              dispatch(setNameFilter(event.currentTarget.value))
            }
            borderColor="gray.500"
            bg={'white'}
          />
        </InputGroup>
      </label>
    </div>
  );
}
