import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Grid from "@material-ui/core/Grid";
import StarIcon from "@material-ui/icons/StarBorder";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  toolbar: {
    flexWrap: "wrap"
  },
  toolbarTitle: {
    flexGrow: 1
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6)
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === "dark"
        ? theme.palette.grey[700]
        : theme.palette.grey[200]
  },
  cardPricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing(2)
  }
}));

const tiers = [
  {
    title: "Zapis do dnia rozpoczęcia kursu",
    price: "159",
    description: []
  },
  {
    title: "Zapis do 31 marca",
    price: "149",
    description: []
  }
];

const Cennik = () => {
  const classes = useStyles();

  return (
    <>
      <Container maxWidth="sm" className={classes.heroContent}>
        <Typography
          component="h2"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Cennik
        </Typography>
      </Container>
      <Container maxWidth="md">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map(tier => (
            <Grid item key={tier.title} xs={12} sm={12} md={6}>
              <Card>
                <CardHeader
                  title={tier.title}
                  titleTypographyProps={{ align: "center" }}
                  subheaderTypographyProps={{ align: "center" }}
                  action={
                    tier.title === "Zapis do 31 marca" ? <StarIcon /> : null
                  }
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography component="h2" variant="h3" color="textPrimary">
                      {tier.price}
                      <span className={"currency"}>zł</span>
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                      /kurs
                    </Typography>
                  </div>
                  <ul>
                    {tier.description.map(line => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Grid>
          ))}{" "}
        </Grid>
        <Typography
          variant="h6"
          align="center"
          color="textSecondary"
          component="p"
        >
          <br />
          Szczegóły do ustalenia poprzez kontakt mailowy lub formularz
          <br />W zależności od kursu od 25 do 35 zł / 45 minut nauki
        </Typography>
        <br />
        <h1>Warunki współpracy</h1>
        <div>
          <ul>
            <li>
              przejrzyste oraz proste zasady zapisane w umowie - gwarancja
              współpracy do ustalonego wspólnego terminu
            </li>
            <li>
              zajęcia odbywają się w terminach ustalonych przez uczniówm,
              jesteśmy dopasowani do zmieniających się planów
            </li>
            <li>
              jedna płatność w miesiącu - w przypadku zajęć grupowych oraz
              kursów w formie przelewu
            </li>
          </ul>
        </div>
      </Container>
    </>
  );
};
export default Cennik;
