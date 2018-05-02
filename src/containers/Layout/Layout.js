import Header from '../../components/Header/Header';
import React, { Component } from 'react';
import Routes from '../Routes/Routes';
import Styles from './Layout.css';

class Layout extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Routes />
      </div>
    );
  }
}

export default Layout;
