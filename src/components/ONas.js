import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import avatar1 from "./../media/1.jpg";
import avatar2 from "./../media/2.jpg";
import avatar3 from "./../media/3.jpg";


const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: "5000px",
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: "inline"
  },
  rootlayout: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const ONas = () => {
  const classes = useStyles();

  return (
    <Container className={"wide-container"}>
      <Row>
        <Col sm={4}>
          {" "}
          <List className={classes.root + " paper-override"}>
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
        </Col>
        <Col sm={4}>
          {" "}
          <List className={classes.root + " paper-override"}>
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
        </Col>
        <Col sm={4}>
          {" "}
          <List className={classes.root + " paper-override"}>
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
        </Col>
      </Row>
    </Container>
  );
};

export default ONas;
