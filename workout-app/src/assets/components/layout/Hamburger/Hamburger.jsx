import React, { useState } from 'react';

import styles from './Hamburger.module.scss';
import { CgMenuRight } from 'react-icons/cg';
import { IoClose } from 'react-icons/io5';
import Menu from './Menu';
import { useOnClickOutside } from '../../../../hooks/useOnClickOutside';
const Hamburger = () => {
  const { isShow, setIsShow, ref } = useOnClickOutside(false);

  return (
    <div className={styles.wrapper} ref={ref}>
      <button onClick={() => setIsShow(!isShow)} className={styles.hamburger}>
        {isShow ? <IoClose color='white' /> : <CgMenuRight color='white' />}
      </button>
      <Menu isShow={isShow} />
    </div>
  );
};

export default Hamburger;
