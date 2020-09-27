import React, { Component } from 'react';
import {makeStyles} from '@material-ui/styles';
import {Typography, Grid, Box} from '@material-ui/core';
import Typed from 'react-typed'

//CSS
const styles = makeStyles (theme => ({
    title: {
        color: "tomato"
    },
    subtitle: {
        color: "tan",
        margin: "3rem"
    },
    container: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100vw",
        textAlign: "center",
        zIndex: 1

    }
}));

const Homepage = () => {
    const classes = styles();
        return (
            <Box className = {classes.container}>
                <Typography className = {classes.title} variant = "h4">
                    Matthew Yen
                </Typography>
                <br />
                <Typography className = {classes.subtitle} variant = "h5">
                    <Typed strings = {["I am a Software Test Engineer at VIPRE Security", "I am a Third Year Computer Engineering Student at UBC", "I am an Aspiring Software Developer"]} 
                    typeSpeed = {30} 
                    backSpeed = {50} 
                    loop >
                    </Typed>
                </Typography>
            </Box>
        )
}

export default Homepage