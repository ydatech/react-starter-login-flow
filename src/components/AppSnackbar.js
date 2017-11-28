/* eslint-disable flowtype/require-valid-file-annotation */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Snackbar from 'material-ui/Snackbar';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui-icons/Close';

//styles
import styles from './styles/AppSnackbar';


class AppSnackbar extends React.Component {
    state = {
        open: false,
    };

    handleClick = () => {
        this.setState({ open: true });
    };

    handleRequestClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({ open: false });
    };

    render() {
        const { classes, message, handleRequestClose } = this.props;
        return (

            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                open={message ? true : false}
                autoHideDuration={6000}
                onRequestClose={handleRequestClose}
                SnackbarContentProps={{
                    'aria-describedby': 'message-id',
                }}
                message={<span id="message-id">{message}</span>}
                action={[
                    <IconButton
                        key="close"
                        aria-label="Close"
                        color="inherit"
                        className={classes.close}
                        onClick={handleRequestClose}
                    >
                        <CloseIcon />
                    </IconButton>,
                ]}
            />
        );
    }
}

AppSnackbar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppSnackbar);