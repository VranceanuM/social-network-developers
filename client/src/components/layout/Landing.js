import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit
  }
});

class Landing extends Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Grid container direction='row' justify='center' alignItems='center'>
          <Grid item>I am a landing</Grid>
        </Grid>
      </React.Fragment>
    );
  }
}
Landing.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Landing);
