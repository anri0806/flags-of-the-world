import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import FlagCircleIcon from "@mui/icons-material/FlagCircle";
import { grey } from "@mui/material/colors";

const useStyles = makeStyles(() => ({
  navLink: {
    display: "flex",
    position: "absolute",
    right: 70,
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontStyle: "normal",
    padding: "6px 20px 7px",
    fontWeight: "bold",
    "&:hover": {
      borderBottom: "1px solid white",
    },
  },
}));

function NavBar() {
  const classes = useStyles();

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: grey[800] }}>
        <Toolbar>
          <FlagCircleIcon fontSize="large" sx={{ paddingRight: "10px" }} />
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "white",
              fontWeight: "bold",
              fontSize: 23,
              fontFamily: "roboto",
            }}
          >
            {" "}
            FLAGS OF THE WORLD
          </Link>
          <div className={classes.navLink}>
            <Link to="/" className={classes.link}>
              HOME
            </Link>
            <Link to="/quiz" className={classes.link}>
              QUIZ
            </Link>
            <Link to="/flaglist" className={classes.link}>
              FLAGLIST
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default NavBar;
