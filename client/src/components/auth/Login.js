import React, { useState } from "react";
import { Link } from "react-router-dom";
// material-ui
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 400
  }
});
const Login = props => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const { classes } = props;
  const { email, password } = formData;

  const onChange = e =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  const onSubmit = async e => {
    e.preventDefault();
    console.log("success");
  };
  return (
    <React.Fragment>
      <Grid container direction='column' justify='center' alignItems='center'>
        <h1>Sign Into your account</h1>
        <form
          className={classes.container}
          noValidate
          autoComplete='off'
          onSubmit={e => onSubmit(e)}
        >
          <Grid
            container
            direction='column'
            justify='center'
            alignItems='center'
          >
            <Grid item xs={12}>
              <TextField
                value={email}
                onChange={e => onChange(e)}
                name='email'
                className={classes.menu}
                id='filled-full-width'
                label='Email'
                type='email'
                style={{ margin: 8 }}
                placeholder='Please enter your email address'
                fullWidth
                margin='normal'
                variant='filled'
                InputLabelProps={{
                  shrink: true
                }}
              />
            </Grid>
          </Grid>

          <Grid
            container
            direction='column'
            justify='center'
            alignItems='center'
          >
            <Grid item>
              <TextField
                value={password}
                onChange={e => onChange(e)}
                name='password'
                className={classes.menu}
                label='Password'
                style={{ margin: 8 }}
                type='password'
                placeholder='Please enter a password'
                fullWidth
                margin='normal'
                variant='filled'
                InputLabelProps={{
                  shrink: true
                }}
              />
            </Grid>
            <Button
              variant='contained'
              color='primary'
              className={classes.button}
              type='submit'
            >
              Sign in
            </Button>
            <h6>
              Not registered?{" "}
              <Link to='/login'>
                <span style={{ color: "green" }}>Register </span>
              </Link>
            </h6>
          </Grid>
        </form>
      </Grid>
    </React.Fragment>
  );
};

Login.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Login);
