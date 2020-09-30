import React from 'react';
import {Link} from 'react-router-dom';
import {AppBar, Toolbar, Button, Typography, Box} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

//CSS
const styles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));
  

const NavigationBar = () => {
    const classes = styles();
        return(
            <Box component="nav" className={classes.root}>
                <AppBar position = "static" style = {{background: '#222'}}>
                    <Toolbar>
                        <Typography variant="h5" className ={classes.title}>
                            Matthew Yen
                        </Typography>
                        <Button style = {{color: 'white'}} component={Link} to="/">
                            Home
                        </Button>
                        <Button style = {{color: 'white'}} component={Link} to="/aboutme">
                            About Me
                        </Button>
                        <Button style = {{color: 'white'}} component={Link} to="/experience">
                            Experience
                        </Button>
                        <Button style = {{color: 'white'}} component={Link} to="/projects">
                            Projects
                        </Button>
                        <Button style = {{color: 'white'}} component={Link} to="/contact"> 
                            Contact
                        </Button>
                    </Toolbar>
                </AppBar>
            </Box>
        );
}


export default NavigationBar