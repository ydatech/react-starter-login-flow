import React from 'react';
import PropTypes from 'prop-types';
// material-ui
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { CircularProgress } from 'material-ui/Progress';

//validator
import isEmail from 'validator/lib/isEmail';
import isEmpty from 'lodash/isEmpty';

//styles
import styles from './styles/LoginForm'


class LoginForm extends React.Component {

  state = {
    form: {
      email: '',
      password: ''
    },
    errors: {},
    multiline: 'Controlled',
  };

  handleChange = name => event => {
    this.setState({
      form: {
        ...this.state.form,
        [name]: event.target.value,
      },
      errors: {}

    });
  };

  validate = () => {
    const { email, password } = this.state.form;
    let errors = { ...this.state.errors };
    if (email.length <= 0) {
      errors.email = 'Email tidak boleh kosong';
    } else if (!isEmail(email)) {
      errors.email = 'Email tidak valid';
    }

    if (password.length <= 0) {
      errors.password = 'Password tidak boleh kosong';
    }

    return errors;
  }

  onSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();

    if (isEmpty(errors)) {

      const { handleSubmit } = this.props;
      const { email, password } = this.state.form;
      handleSubmit(email, password);

    } else {
      return this.setState({ errors });
    }
  }


  render() {
    const { classes, isLoading } = this.props;
    const { form, errors } = this.state;

    if (isLoading) {
      return <div className={classes.container}><CircularProgress className={classes.progress} /></div>
    }
    return (
      <form className={classes.container} autoComplete="off" onSubmit={this.onSubmit}>
        <div className='loginBody'>
          <div className='loginIntro'>
            <h2>Selamat Datang</h2>
            <p>Silakan masuk untuk melanjutkan</p>
          </div>
          <div className='loginRow'>
            <TextField
              id="email"
              label="Email"
              className={classes.textField}
              value={form.email}
              onChange={this.handleChange('email')}
              margin="normal"
              error={errors.email ? true : false}
              helperText={errors.email}
              disabled={isLoading}
            />
          </div>
          <div className='loginRow'>
            <TextField
              id="password"
              label="Password"
              type="password"
              className={classes.textField}
              value={form.password}
              onChange={this.handleChange('password')}
              margin="normal"
              error={errors.password ? true : false}
              helperText={errors.password}
              disabled={isLoading}
            />
          </div>
          <div className='loginRow'>
            <Button raised color="primary" type="submit" className={classes.button} disabled={isLoading}>Login</Button>
          </div>
        </div>

      </form>
    );
  }
}

LoginForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginForm);