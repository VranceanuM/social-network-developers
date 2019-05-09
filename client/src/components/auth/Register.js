import React, { useState } from "react";
import { Link } from "react-router-dom";
// redux
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
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
const Register = props => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });
  const { classes } = props;
  const { name, email, password, password2 } = formData;

  const onChange = e =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      props.setAlert("Password don't match", "danger");
    } else {
      console.log("success");
    }
  };
  return (
    <React.Fragment>
      <Grid container direction='column' justify='center' alignItems='center'>
        <h1>Sign Up</h1>
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
                value={name}
                onChange={e => onChange(e)}
                name='name'
                className={classes.menu}
                id='filled-full-width'
                label='Name'
                style={{ margin: 8 }}
                placeholder='Enter your name'
                fullWidth
                margin='normal'
                variant='filled'
                InputLabelProps={{
                  shrink: true
                }}
              />
              <TextField
                value={email}
                onChange={e => onChange(e)}
                name='email'
                className={classes.menu}
                id='filled-full-width'
                label='Email'
                type='email'
                style={{ margin: 8 }}
                placeholder='Please enter a valid email address'
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
                id='filled-full-width'
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

              <TextField
                value={password2}
                onChange={e => onChange(e)}
                name='password2'
                className={classes.menu}
                type='password'
                id='filled-full-width'
                label='Confirm Password'
                style={{ margin: 8 }}
                placeholder='Please confirm password'
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
              Sign up
            </Button>
            <h6>
              Already register{" "}
              <Link to='/login'>
                <span style={{ color: "green" }}>Sign In </span>
              </Link>
            </h6>
          </Grid>
        </form>
      </Grid>
    </React.Fragment>
  );
};

Register.propTypes = {
  classes: PropTypes.object.isRequired,
  setAlert: PropTypes.func.isRequired
};

export default connect(
  null,
  { setAlert }
)(withStyles(styles)(Register));
// mapStateToProps,
// mapDispatchToProps
