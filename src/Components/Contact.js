import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Typography, Box} from "@material-ui/core";
import NavigationBar from "./NavigationBar";

//CSS
const styles = makeStyles(theme => ({
    mainContainer: {
      padding: "2rem"
    },
}));


const Contact = () => { 
    const classes = styles();
    return (
        <>
          <NavigationBar />
          <Box component="header" className={classes.mainContainer}>
            <Typography variant="h4" align="center">
                Contact
            </Typography>
          </Box>
        </>
      );
}

export default Contact;