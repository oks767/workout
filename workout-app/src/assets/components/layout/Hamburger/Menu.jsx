import cn from 'clsx';
import styles from './Hamburger.module.scss';
import { menu } from './menu.data';
const Menu = ({ isShow }) => {
  const logoutHandler = () => {};
  return (
    <div className={styles.wrapper}>
      <nav className={cn(styles.menu, { [styles.show]: isShow })}>
        <ul>
          {menu.map((item, index) => (
            <li key={`_menu_${index}`}>{item.title}</li>
          ))}
          <li>
            <button onClick={logoutHandler}></button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
