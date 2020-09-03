import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import styles from "./Header.module.css";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    boxShadow: false
  },
  menuButton: {
    marginRight: theme.spacing(0),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" elevation={0}>
        <Toolbar className={styles.nav}>
          <Typography variant="h6" className={classes.title}>
            Corona Insights
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}