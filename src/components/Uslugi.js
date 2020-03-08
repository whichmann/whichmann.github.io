import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Paper";
import Paper from "@material-ui/core/Grid";
import avatar1 from "./../media/1.jpg";
import avatar2 from "./../media/2.jpg";
import avatar5 from "./../media/2.jpg";
import avatar3 from "./../media/3.jpg";
import avatar6 from "./../media/3.jpg";
import avatar4 from "./../media/1.jpg";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: "900",
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: "inline"
  },
  rootlayout: {
    flexGrow: 1 !important,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Uslugi() {
  const classes = useStyles();

  return (
    <div className={classes.rootlayout}>
      <br />
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            {" "}
            <List className={classes.root}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Adam Poniatowski" src={avatar1} />
                </ListItemAvatar>
                <ListItemText
                  primary="Adam Poniatowski"
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        założyciel, koordynator odpowiedzialny za matematykę
                        oraz przygotowanie mentalne
                        <br />
                        <i>doświadczenie - 10 lat</i>
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Ewa Bone" src={avatar2} />
                </ListItemAvatar>
                <ListItemText
                  primary="Ewa Bone"
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        odpowiedzialna za przygotowanie mentalne
                        <br />
                        <i>doświadczenie - 13 lat</i>
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Paulina Kaletha" src={avatar3} />
                </ListItemAvatar>
                <ListItemText
                  primary="Paulina Kaletha"
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        specjalistka d/s pro mocji i reklamy odpowiedzialna za
                        język niemiecki
                        <br />
                        <i>doświadczenie - 3 lata</i>
                      </Typography>
                      {" — Do you have Paris recommendations? Have you ever…"}
                    </React.Fragment>
                  }
                />
              </ListItem>
            </List>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            {" "}
            <List className={classes.root}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Adam Poniatowski" src={avatar1} />
                </ListItemAvatar>
                <ListItemText
                  primary="Adam Poniatowski"
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        założyciel, koordynator odpowiedzialny za matematykę
                        oraz przygotowanie mentalne
                        <br />
                        <i>doświadczenie - 10 lat</i>
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Ewa Bone" src={avatar2} />
                </ListItemAvatar>
                <ListItemText
                  primary="Ewa Bone"
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        odpowiedzialna za przygotowanie mentalne
                        <br />
                        <i>doświadczenie - 13 lat</i>
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Paulina Kaletha" src={avatar3} />
                </ListItemAvatar>
                <ListItemText
                  primary="Paulina Kaletha"
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        specjalistka d/s pro mocji i reklamy odpowiedzialna za
                        język niemiecki
                        <br />
                        <i>doświadczenie - 3 lata</i>
                      </Typography>
                      {" — Do you have Paris recommendations? Have you ever…"}
                    </React.Fragment>
                  }
                />
              </ListItem>
            </List>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
