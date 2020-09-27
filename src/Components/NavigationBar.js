import React, {Component} from 'react';
import {
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemTest,
    Divider,
    List,
    Typography,
    Box
  } from "@material-ui/core";
  
import {
    Menu,
    AssignmentInd,
    Home,
    Apps,
    ContactMail
  } from "@material-ui/icons";

import {MenuIcon} from "@material-ui/icons/Menu";
import {makeStyles} from "@material-ui/styles";

const NavigationBar = () => {
    
        return(
            <Box component="nav">
                <AppBar position = "static" style = {{background: '#222'}}>
                    <Toolbar>
                        <Typography variant="h5">
                            Matthew Yen
                        </Typography>
                    </Toolbar>

                </AppBar>
            </Box>
        );
}


export default NavigationBar