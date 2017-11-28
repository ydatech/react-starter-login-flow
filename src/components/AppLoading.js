import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import { LinearProgress } from 'material-ui/Progress';
import imageChar from '../logo.svg'
//styles 
import styles from './styles/AppLoading';

class AppLoading extends React.Component {

    render() {

        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <h4 className={classes.melisaText}>ReactJs</h4>

                <img src={imageChar} className={`${classes.melisaChar}  App-logo-spin`} alt='React' />
                <p className={classes.loadingText}>Sedang Memuat...</p>
                <LinearProgress className={classes.loadingBar} />
            </div>
        );
    }
}

AppLoading.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppLoading);