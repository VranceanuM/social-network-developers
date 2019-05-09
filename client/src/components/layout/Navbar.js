import React, { Fragment } from "react";
import { Link } from "react-router-dom";
//Material ui
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};
const Navbar = props => {
  const { classes } = props;

  return (
    <Fragment>
      <div className={classes.root}>
        <AppBar position='static'>
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color='inherit'
              aria-label='Menu'
            >
              <MenuIcon />
            </IconButton>
            <Typography variant='h6' color='inherit' className={classes.grow}>
              <Link to='/'>Devmeeting</Link>
            </Typography>

            <Link to='/login'>
              <Button color='inherit'>Login</Button>
            </Link>
            <Link to='/register'>
              <Button color='inherit'>Sign Up</Button>
            </Link>
            <Link to='/developers'>
              <Button color='inherit'>Developers</Button>
            </Link>
          </Toolbar>
        </AppBar>
      </div>
    </Fragment>
  );
};

Navbar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Navbar);
