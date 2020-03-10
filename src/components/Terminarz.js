import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import calMarch from "./../media/march.png";
import calApril from "./../media/april.png";
import calMay from "./../media/may.png";
import calJune from "./../media/june.png";
import calJuly from "./../media/july.png";
import calAugust from "./../media/august.png";
import calSeptember from "./../media/september.png";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: "#f5f5f5",
  },
}))



const Terminarz = () => {
  const classes = useStyles()
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container className={classes.root}>
      <Paper elevation={1}> <div className={classes.rootPaper}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="on"
            indicatorColor="primary"
            textColor="primary"
            aria-label="scrollable force tabs example"
          >
            <Tab label="Marzec '20" {...a11yProps(0)} />
            <Tab label="Kwiecień '20" {...a11yProps(1)} />
            <Tab label="Maj '20" {...a11yProps(2)} />
            <Tab label="Czerwiec '20" {...a11yProps(3)} disabled />
            <Tab label="Lipiec '20" {...a11yProps(4)} disabled />
            <Tab label="Sierpień '20" {...a11yProps(5)} disabled />
            <Tab label="Wrzesień '20" {...a11yProps(6)} disabled />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
        <img src={calMarch} className={"calendar"} alt="March calendar"></img>
      </TabPanel>
        <TabPanel value={value} index={1}>
        <img src={calApril} className={"calendar"} alt="April calendar"></img>
      </TabPanel>
        <TabPanel value={value} index={2}>
        <img src={calMay} className={"calendar"} alt="May calendar"></img>
      </TabPanel>
        <TabPanel value={value} index={3}>
        <img src={calJune} className={"calendar"} alt="June calendar"></img>
      </TabPanel>
        <TabPanel value={value} index={4}>
        <img src={calJuly} className={"calendar"} alt="July calendar"></img>
      </TabPanel>
        <TabPanel value={value} index={5}>
        <img src={calAugust} className={"calendar"} alt="August calendar"></img>
      </TabPanel>
        <TabPanel value={value} index={6}>
        <img src={calSeptember} className={"calendar"} alt="September calendar"></img>
      </TabPanel>
      </div></Paper>
    </Container >
  )
}

export default Terminarz;