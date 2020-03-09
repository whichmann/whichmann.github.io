import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
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
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonForce() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
          initialselectedindex={2}
        >
          <Tab label="Styczeń"  {...a11yProps(0)} disabled/>
          <Tab label="Luty"  {...a11yProps(1)} disabled/>
          <Tab label="Marzec"  {...a11yProps(2)} />
          <Tab label="Kwiecień"  {...a11yProps(3)} />
          <Tab label="Maj"  {...a11yProps(4)} />
          <Tab label="Czerwiec"  {...a11yProps(5)} disabled/>
          <Tab label="Lipiec"  {...a11yProps(6)} disabled/>
          <Tab label="Sierpień"  {...a11yProps(7)} disabled/>
          <Tab label="Wrzesień"  {...a11yProps(8)} disabled/>

        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      Styeczń kalendarz Styeczń kalendarz Styeczń kalendarz Styeczń kalendarz 
      </TabPanel>
      <TabPanel value={value} index={1}>
      Luty kalendarz Luty kalendarz Luty kalendarz Luty kalendarz 
      </TabPanel>
      <TabPanel value={value} index={2}>
      Marzec kalendarz Marzec kalendarz Marzec kalendarz Marzec kalendarz 
      </TabPanel>
      <TabPanel value={value} index={3}>
      Kwiecień kalendarz Kwiecień kalendarz Kwiecień kalendarz Kwiecień kalendarz 
      </TabPanel>
      <TabPanel value={value} index={4}>
      Maj kalendarz Maj kalendarz Maj kalendarz Maj kalendarz Maj kalendarz
      </TabPanel>
      <TabPanel value={value} index={5}>
      Czerwiec kalendarz Maj kalendarz Maj kalendarz Maj kalendarz Maj kalendarz
      </TabPanel>
      <TabPanel value={value} index={6}>
      Lipiec kalendarz Maj kalendarz Maj kalendarz Maj kalendarz Maj kalendarz
      </TabPanel>
      <TabPanel value={value} index={7}>
      Sierpień kalendarz Maj kalendarz Maj kalendarz Maj kalendarz Maj kalendarz
      </TabPanel>
      <TabPanel value={value} index={8}>
      Wrzesień kalendarz Maj kalendarz Maj kalendarz Maj kalendarz Maj kalendarz
      </TabPanel>
    </div>
  );
}