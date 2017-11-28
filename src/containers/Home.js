import React, { Component } from 'react';
import PropTypes from 'prop-types';
// material-ui
import { withStyles } from 'material-ui/styles';


// style
import styles from './styles/Home';



export class Home extends Component {

    render() {

        return (
            <h1> This is Home </h1>
        );
    }
}


Home.propTypes = {
    classes: PropTypes.object.isRequired,
};





export default withStyles(styles)(Home);

