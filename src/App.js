import React, { Component } from 'react';

// react-router
import { BrowserRouter as Router, Switch } from 'react-router-dom';

// Private Route
import PrivateRoute from './utils/PrivateRoute';
// Base Route 
import AppRoute from './utils/AppRoute';

// redux
import { bindActionCreators } from 'redux';

// react redux connect
import { connect } from 'react-redux';

// actions
import { actions as authActions } from './reducers/auth';
import { actions as appActions } from './reducers/app';


// material-ui themes
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import theme from './theme';

// app containers
import Home from './containers/Home';
import Login from './containers/Login';
import NotFound from './containers/NotFound';

// app components
import AppSnackbar from './components/AppSnackbar';

//style
import './App.css';


const melisaTheme = createMuiTheme(theme);

export class App extends Component {
  state = {
    isConfirmOpen: false,
    confirmMessage: '',
    confirmCallback: null
  }
  handleConfirmClose = () => {
    this.setState({ isConfirmOpen: false });
  }
  getUserConfirmation = (message, callback) => {
    this.setState({ isConfirmOpen: true, confirmMessage: message, confirmCallback: callback });
    // const confirm = callback(window.confirm(message));
    // return confirm;
  }
  handleButtonYes = () => {
    this.state.confirmCallback(true);
    this.setState({ isConfirmOpen: false });
  }
  render() {
    const { app, appActions } = this.props;


    return (
      <MuiThemeProvider theme={melisaTheme}>
        <div className='appContainer'>
          <Router getUserConfirmation={this.getUserConfirmation}>
            <Switch>
              <PrivateRoute exact path="/" component={Home} {...this.props} />
              <PrivateRoute path="/home" component={Home} {...this.props} />
              <AppRoute path="/login" component={Login} {...this.props} />
              <AppRoute component={NotFound} {...this.props} />
            </Switch>
          </Router>
          <AppSnackbar
            message={app.snackbarMessage}
            handleRequestClose={() => appActions.hideSnackbar()}
          />

        </div>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = ({ auth, app }) => ({
  auth,
  app
});
const mapDispatcToProps = (dispatch) => ({
  authActions: bindActionCreators(authActions, dispatch),
  appActions: bindActionCreators(appActions, dispatch)
});
export default connect(mapStateToProps, mapDispatcToProps)(App);