import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Photo from "./../media/uslugi.png";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary
    // fontSize: 15
  }
}));

const Uslugi = () => {
  const classes = useStyles();
  return (
    <div className={[classes.root, "wide-container"].join(" ")}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={5}>
          <Paper className={classes.paper}>
            mgr inż. ADAM PONIATOWSKI
            <br />
            kierownik budowy, <br />
            projektant
            <br />
            inspektor nadzoru inwestorskiego
            <br />
            uprawnienia bez ograniczeń w branży konstrukcyjno-budowlanej
          </Paper>
        </Grid>
        <Grid item xs={12} sm={7}>
          <img
            src={Photo}
            alt={"construction"}
            className={"uslugi-photo"}
          ></img>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <ul>
              <li>
                nadzór nad pracami budowlanymi, realizacja protokołów
                częściowych i końcowych
              </li>
              <li>
                autoryzacja oraz sprawdzanie projektów budowlanych oraz
                wykonawczych branży konstrukcyjno-budowlanej
              </li>
              <li>projektowanie studium wizyjności oraz radiokomunikacji</li>
              <li>pomoc w realizacji harmonogramów czasowych</li>
              <li>pomoc w doborze materiałów i wycenach</li>
              <li>zarządzanie procesami oraz inwestycjami budowlanymi</li>
              <li>uprawnienia sep d+e kat. 1 (cieplne) oraz 3 (elektryczne)</li>
            </ul>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Uslugi;
