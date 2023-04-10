import { useDispatch } from 'react-redux';
import React from 'react';
import { register } from 'redux/auth/operations';
import { Input, InputRightElement, InputGroup, Button } from '@chakra-ui/react';
import { ViewOffIcon, ViewIcon } from '@chakra-ui/icons';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={css.label}>
          Username
          <Input
            className={css.input}
            type="text"
            name="name"
            placeholder="Denys Stasiuk"
            required
            borderColor="gray.500"
            bg={'white'}
          />
        </label>
        <label className={css.label}>
          Email
          <Input
            className={css.input}
            type="email"
            name="email"
            placeholder="example@mail.com"
            required
            borderColor="gray.500"
            bg={'white'}
          />
        </label>
        <label className={css.label}>
          Password
          <InputGroup size="md">
            <Input
              className={css.input}
              type={show ? 'text' : 'password'}
              name="password"
              placeholder="Enter your password"
              required
              borderColor="gray.500"
              bg={'white'}
            />
            <InputRightElement width="65px" mt={'5px'}>
              <Button
                h="30px"
                size="md"
                bg={'transperant'}
                _hover={{ bg: 'transperant' }}
                _active={{ bg: 'transperant' }}
                onClick={handleClick}
              >
                {show ? (
                  <ViewOffIcon color="gray.500" />
                ) : (
                  <ViewIcon color="gray.500" />
                )}
              </Button>
            </InputRightElement>
          </InputGroup>
        </label>
        <div
          style={{
            display: 'flex',
          }}
        >
          <button className={css.button} type="submit">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};
