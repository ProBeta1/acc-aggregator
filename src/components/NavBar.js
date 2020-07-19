import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Hidden mdUp>
          <IconButton display={{ xs: 'none', sm: 'block', md: 'none' }} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon  />
          </IconButton>
          </Hidden>
          <Typography variant="h7" className={classes.title}>
            XYZ Bank
          </Typography>
          <Hidden smDown>
              <div className='buttonsAppbar'>
                <Button color="inherit">Customers</Button>
                <Button color="inherit">Products</Button>
                <Button color="inherit">Consent Types</Button>
              </div>
          </Hidden>
          

        </Toolbar>
      </AppBar>
    </div>
  );
}