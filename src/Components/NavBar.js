import React from "react";
import { Link } from "react-router-dom";

import { AppBar, Toolbar } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import FlagCircleIcon from "@mui/icons-material/FlagCircle";
import { grey } from "@mui/material/colors";


////////  Sets styles for multiple link elements  ////////
const useStyles = makeStyles(() => ({
  link: {
    textDecoration: "none",
    color: "white",
    fontStyle: "normal",
    padding: "6px 24px 7px",
    fontWeight: "bold",
    "&:hover": {
      borderBottom: "1px solid white",
    },
  },
}));



function NavBar() {
  ////////  Sets styles for multiple link elements  ////////
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
              fontSize: "23px",
              fontFamily: "roboto",
            }}
          >
            {" "}
            FLAGS OF THE WORLD
          </Link>
          <div style={{ display: "flex", position: "absolute", right: 65 }}>
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
