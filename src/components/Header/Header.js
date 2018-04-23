import React from "react";
import { Link } from "react-router-dom";
import { Segment } from "semantic-ui-react";
import { Menu } from "semantic-ui-react";
import Styles from './Header.css';

const Header = () => {
  return (
    <Menu pointing secondary id={Styles.mainMenu}>
      <Menu.Item>
        <h1>Code<span className="light-green">tributor</span></h1>
      </Menu.Item>
      <Menu.Item position="right">
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/about">About</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/about">Who We Are</Link>
      </Menu.Item>
    </Menu>
  );
};

export default Header;
