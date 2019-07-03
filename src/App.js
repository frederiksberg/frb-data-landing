import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import ServiceCard from './serviceCard'
import HomeView from './homeView'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  overrides: {
    MuiAppBar:{
      colorPrimary:{
        background:'darkslategray !important'
      }
    },
    MuiTooltip: {
      tooltip: {
        fontSize: 16,
      }
    }
  }
});

const styles = theme => ({
  root: {
    backgroundImage:'url(media/back.png)',
    height:'100%',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed'
  },
});

class App extends Component {

  render() {

    let { classes } = this.props

    return (
      <div className={classes.root}>
        <MuiThemeProvider theme={theme}>
          <AppBar color="primary" position="static">
            <Toolbar>

              <Typography variant="h6" color="inherit" className={classes.grow}>
                FRED - Frederiksberg Data
          </Typography>

            </Toolbar>
          </AppBar>


         <HomeView />
        </MuiThemeProvider>

      </div>
    );
  }

}

export default withStyles(styles)(App);
