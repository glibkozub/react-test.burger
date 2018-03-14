import React from 'react';

import Logo from '../../Logo/Logo';
import classes from './Toolbar.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import ToggleButton from '../../UI/ToggleButton/ToggleButton';

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <ToggleButton clicked={props.sideDrawerToggle} />
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav className={classes.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar