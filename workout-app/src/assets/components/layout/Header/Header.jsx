import React from 'react';
import styles from './Header.module.scss';
import { BsArrowLeft } from 'react-icons/bs';
import Hamburger from '../Hamburger/Hamburger';
import { useLocation, useNavigate } from 'react-router-dom';
import { HiOutlineUser } from 'react-icons/hi';
import { useAuth } from '../../../../hooks/useAuth';
const Header = ({ backLink = '/' }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { isAuth } = useAuth();
  return (
    <div>
      {' '}
      <header className={styles.header}>
        {pathname == '/' && isAuth ? (
          <button
            onClick={() => {
              navigate('/profile');
            }}
          >
            <HiOutlineUser fill='#fff' fontSize={27} />
          </button>
        ) : (
          <button
            onClick={() => {
              navigate(isAuth ? backLink : '/auth');
            }}
          >
            <BsArrowLeft />
          </button>
        )}

        <div>
          <Hamburger />
        </div>
      </header>
    </div>
  );
};

export default Header;
