import React from 'react';
import styles from './Header.module.scss';
import { useAuth } from '../../../../hooks/useAuth';
import { BsArrowLeft } from 'react-icons/bs';
import Hamburger from '../Hamburger/Hamburger';

const Header = ({ backLink }) => {
  const { isAuth } = useAuth();
  return (
    <div>
      {' '}
      <header className={styles.header}>
        <button onClick={() => {}}>
          <BsArrowLeft />
        </button>
        <div>
          <Hamburger />
        </div>
      </header>
    </div>
  );
};

export default Header;
