import React from 'react';

import classes from './ToggleButton.css';

const toggleButton = (props) => (
  <div className={classes.ToggleButton} onClick={props.clicked}>
    <div className={classes.line}></div>
    <div className={classes.line}></div>
    <div className={classes.line}></div>
  </div>
);

export default toggleButton