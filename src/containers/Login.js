import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import LoginForm from '../components/LoginForm';
import LoginBrand from '../components/LoginBrand';
import AppLoading from '../components/AppLoading';


// styles
import styles from './styles/Login';

export class Login extends Component {

    state = {
        spacing: '16',
    };

    componentDidMount() {

        //const { authActions } = this.props;
        // authActions.autoLogin();
    }
    componentWillUpdate() {

    }

    // Redirect when logged in
    componentWillReceiveProps({ auth, location, history }) {

        if (auth.isLoggedIn) {
            //history.push(location.state.from.pathname);
            console.log('im here')
            if (auth.user.toko_id) {
                history.push(location.state.from.pathname);
            } else {
                history.push('/toko');
            }

        }
    }
    handleSubmit = (email, password) => {
        const { authActions } = this.props;
        authActions.login(email, password);
    }

    render() {

        const { classes, auth, app } = this.props;
        const { spacing } = this.state;
        if (app.isLoading) {
            return <AppLoading />
        }
        return (

            <div className={classes.root}>
                <div className={classes.loginWrap}>
                    <div className={classes.loginBody} justify="center" spacing={Number(spacing)}>
                        <div className={classes.loginBodyLeft}>
                            <LoginBrand />
                        </div>
                        <div className={classes.loginBodyRight}>
                            <LoginForm
                                handleSubmit={this.handleSubmit}
                                isLoading={auth.isLoading}
                            />
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

Login.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Login);