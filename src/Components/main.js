import React from 'react';
import NavigationBar from './NavigationBar';
import Homepage from './Homepage';
import Particles from 'react-particles-js';
import {makeStyles} from '@material-ui/styles';

//CSS
const styles = makeStyles(theme => ({
    particleContainer: {
        position: "absolute",
        opacity: "0.55",
        width:"100%",
        height:"100%"
    }
}))

const Main = () => {
        const classes = styles()
        return (
            <>
                <Particles
                canvasClassName={classes.particleContainer}
                params={{
                    particles:{
                        color: {
                            value: "#222"
                        },
                        line_linked: {
                            color: {
                                value: "#222"
                            }
                        },
                        number:{
                            value: 65
                        },
                    }   
                }} />
                <NavigationBar />
                <Homepage />
            </>
        )
}

export default Main