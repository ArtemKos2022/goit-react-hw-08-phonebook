import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { HiHome } from 'react-icons/hi';
import { Icon } from '@chakra-ui/react';
import css from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className={css.navBlock}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? css.linkActive : css.link)}
      >
        <Icon
          as={HiHome}
          w={'24px'}
          h={'24px'}
          className={({ isActive }) => (isActive ? css.iconActive : css.icon)}
        />
        <p className={css.logo}>Home</p>
      </NavLink>
      {isLoggedIn && (
        <NavLink
          className={({ isActive }) => (isActive ? css.linkActive : css.link)}
          to="/contacts"
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
