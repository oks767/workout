import Header from './Header/Header';

const Layout = ({ children }) => {
  return (
    <div>
      <Header backLink='/' />
      {children}
    </div>
  );
};

export default Layout;
