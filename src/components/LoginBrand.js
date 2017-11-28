import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import imageChar from '../logo.svg'
//styles 
import styles from './styles/LoginBrand';

class LoginBrand extends React.Component {

  render() {

    const { classes } = this.props;

    return (
      <div className={classes.loginBrandBody}>
        <h1 className={classes.loginBrandBodyHeading}>React App</h1>

        <img src={imageChar} className={`${classes.melisaChar}  App-logo-spin`} alt='React' />
        <p className={classes.loginBrandBodyPara} >welcome to react.js</p>
      </div>
    );
  }
}

LoginBrand.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginBrand);