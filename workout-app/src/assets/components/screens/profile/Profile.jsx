import React from 'react';
import Layout from '../../layout/Layout';
import styles from './Profile.module.scss';
import { useProfile } from './useProfile';
import stylesLayout from '../../layout/Layout.module.scss';
import cn from 'clsx';
import Header from '../../layout/Header/Header';
import Statistics from './statistics/Statistics';

const Profile = () => {
  const { data } = useProfile();
  return (
    <>
      <div
        className={cn(stylesLayout.wrapper, stylesLayout.otherPage)}
        style={{
          backgroundImage: `url('../../../../../public/images/profile-bg.jpg')`,
          height: 356,
        }}
      >
        <Header />
        <div className={styles.center}>
          <img
            src='/images/header/user.svg'
            alt='Profile'
            height='56'
            draggable={false}
          />
          <h1 className={stylesLayout.heading}>{data?.email}</h1>
        </div>
        <Statistics />
      </div>

      <div className={styles.before_after}>
        {data?.images?.map((image, index) => (
          <div key={image}>
            <div className={styles.heading}>
              {index === 1 ? 'After' : 'Before'}
            </div>
            <img src={image} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Profile;
