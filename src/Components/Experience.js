import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Typography, Box} from "@material-ui/core";
import NavigationBar from "./NavigationBar";

//CSS
const styles = makeStyles(theme => ({
    mainContainer: {
      background: "#D3D3D3",
      padding: "1rem"
    },
  }));
  
  const Experience = () => {
    const classes = styles();
    return (
      <>
        <NavigationBar />
        <Box component="header" className={classes.mainContainer}>
          <Typography variant="h4" align="center">
            Experience
          </Typography>
          <Box component="div">
            <Typography variant="h5" algin="center">
            </Typography>
          </Box>
        </Box>
      </>
    );
  };

export default Experience;