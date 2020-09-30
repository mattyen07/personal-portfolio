import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {Typography, Box} from '@material-ui/core';
import Typed from 'react-typed'

//CSS
const styles = makeStyles (theme => ({
    title: {
        color: "#222"
    },
    subtitle: {
        color: "#222",
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
                <Typography className = {classes.title} variant = "h1">
                    Matthew Yen
                </Typography>
                <br />
                <Typography className = {classes.subtitle} variant = "h4">
                    <Typed strings = {["I am a Software Test Engineer at VIPRE Security", "I am a Third Year Computer Engineering Student at UBC", "I am an Aspiring Software Developer"]} 
                    typeSpeed = {40} 
                    backSpeed = {60} 
                    loop >
                    </Typed>
                </Typography>
            </Box>
        )
}

export default Homepage