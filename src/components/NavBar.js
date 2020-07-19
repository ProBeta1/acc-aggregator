import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "black",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        style={{ backgroundColor: "transparent", boxShadow: "none" }}
        position="static"
      >
        <Toolbar>
          <Hidden mdUp>
            <IconButton
              display={{ xs: "none", sm: "block", md: "none" }}
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Typography variant="h7" className={classes.title}>
            XYZ Bank
          </Typography>
          <Hidden smDown>
            <div className="buttonsAppbar">
              <Button color="black">
                <a
                  className="navOptions"
                  style={{ textDecoration: "none", color: "inherit" }}
                  href="/landing"
                >
                  Home
                </a>
              </Button>
              <Button color="black">
                <a
                  className="navOptions"
                  style={{ textDecoration: "none", color: "inherit" }}
                  href="/customer"
                >
                  Customers
                </a>
              </Button>
              <Button color="black">
                <a
                  className="navOptions"
                  style={{ textDecoration: "none", color: "inherit" }}
                  href="/products"
                >
                  Products
                </a>
              </Button>
              <Button color="black">
                <a
                  className="navOptions"
                  style={{ textDecoration: "none", color: "inherit" }}
                  href="/consent"
                >
                  Consent Types
                </a>
              </Button>
              <Button color="black">
                <a
                  className="navOptions"
                  style={{ textDecoration: "none", color: "inherit" }}
                  href="/faq"
                >
                  FAQ
                </a>
              </Button>
            </div>
          </Hidden>
        </Toolbar>
      </AppBar>
    </div>
  );
}
