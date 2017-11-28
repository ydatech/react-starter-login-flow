import React from 'react';
import { Route } from 'react-router-dom';

export const AppRoute = ({ component: Component, ...rest }) => {
    const { path, exat, strict, ...restProps } = rest;
    const restRoute = { path, exat, strict };
    return (
        <Route {...restRoute} render={props => (

            <Component {...props } {...restProps} />

        )} />
    )
}

export default AppRoute;