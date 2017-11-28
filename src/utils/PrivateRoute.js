import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, auth, app, appActions, authActions, ...rest }) => (
    <Route {...rest} render={props => (
        auth.isLoggedIn ? (
            <Component {...props } {...{ auth, app, appActions, authActions }} />
        ) : (
                <Redirect to={{
                    pathname: '/login',
                    state: { from: props.location }
                }} />
            )
    )} />
)

export default PrivateRoute;