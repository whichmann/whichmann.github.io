import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import FacebookIcon from "@material-ui/icons/Facebook";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

const Kontakt = () => {
  const classes = useStyles();

  return (
    <div className="container pages">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          ZAPRASZAMY DO KONTAKTU
        </Grid>
        <Grid item xs={12} sm={7}>
          <Paper className={classes.paper}>
            <br />
            <PhoneIcon></PhoneIcon>+48 530 466 680<PhoneIcon></PhoneIcon>
            <br />
            <br />
            <Divider />
            <br />
            <FacebookIcon></FacebookIcon>
            <a href="https://WWW.FACEBOOK.COM/ROZMATURZENI" target="_blank">
              www.facebook.com/rozmaturzeni
            </a>
            <FacebookIcon></FacebookIcon>
            <br />
            <br />
            <Divider />
            <br />
            <EmailOutlinedIcon></EmailOutlinedIcon>
            <a href="mailto:rozmaturzeni@gmail.com">rozmaturzeni@gmail.com</a>
            <EmailOutlinedIcon></EmailOutlinedIcon>
            <br />
            <br />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Paper className={classes.paper}>
            <br />
            <b>DANE FIRMY</b>
            <br /><br />
            <Divider />
            <br />
            Adam Poniatowski, <br />
            Czatkowy 16, <br />
            83-110 Tczew
            <br />
            NIP: 593 262 31 62,<br />REGON: 384 992 797
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Kontakt;
