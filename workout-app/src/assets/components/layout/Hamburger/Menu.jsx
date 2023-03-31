import cn from 'clsx';
import Cookies from 'js-cookie';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../../hooks/useAuth';
import styles from './Hamburger.module.scss';
import { menu } from './menu.data';
import { TOKEN } from '../../../../app.constants.js';
const Menu = ({ isShow, setIsShow }) => {
  const { setIsAuth } = useAuth();
  const navigate = useNavigate();
  const logoutHandler = () => {
    Cookies.remove(TOKEN);
    setIsAuth(false);
    // setIsShow(false);
    navigate('/auth');
  };
  return (
    <div className={styles.wrapper}>
      <nav className={cn(styles.menu, { [styles.show]: isShow })}>
        <ul>
          {menu.map((item, index) => (
            <li key={`_menu_${index}`}>
              <Link to={item.link}>{item.title}</Link>
            </li>
          ))}
          <li>
            <button onClick={logoutHandler}>logout</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
