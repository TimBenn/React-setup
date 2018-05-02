import Header from '../../components/Header/Header';
import Routes from '../../containers/Routes/Routes';
import React from 'react';
import Styles from './Layout.css';

const Layout = () => {
  return (
    <div>
      <Header />
      <Routes />
    </div>
  );
}

export default Layout;
