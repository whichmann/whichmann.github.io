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
    flexGrow: 3
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

const ONas = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
          <ListItem>
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
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
          <ListItem>
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
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
          <ListItem>
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
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default ONas;
