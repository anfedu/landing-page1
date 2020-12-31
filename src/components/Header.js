import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, IconButton, Toolbar, Collapse } from "@material-ui/core";
import SortIcon from "@material-ui/icons/Sort";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link as Scroll } from "react-scroll";

const useStyles = makeStyles((themes) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    fontFamily: "Nunito",
  },
  appbar: {
    background: "none",
  },
  icon: {
    color: "#fff",
    fontSize: "2rem",
  },
  appbarTitle: {
    flexGrow: "1",
  },
  appbarWrapper: {
    width: "80%",
    margin: "0 auto",
  },
  colorText: {
    color: "#5aff3d",
  },
  title: {
    color: "#fff",
    fontSize: "4.5rem",
  },
  titleWrapper: {
    textAlign: "center",
  },
  goDown: {
    color: "#5aff3d",
    fontSize: "4rem",
  },
}));

export default function Header() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);
  React.useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className={classes.root} id="header">
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>
            My<span className={classes.colorText}>Island.</span>{" "}
          </h1>
          <IconButton>
            <SortIcon className={classes.icon} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
        <div className={classes.titleWrapper}>
          <h1 className={classes.title}>
            Welcome to <br />
            My <span className={classes.colorText}>Island.</span>
          </h1>
          <Scroll to="place-to-visit" smooth={true}>
            <IconButton>
              <ExpandMoreIcon className={classes.goDown} />
            </IconButton>
          </Scroll>
        </div>
      </Collapse>
    </div>
  );
}