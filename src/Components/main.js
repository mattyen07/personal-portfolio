import React from 'react';
import NavigationBar from './NavigationBar';
import Homepage from './Homepage';
import Particles from 'react-particles-js';
import {makeStyles} from '@material-ui/styles';

//CSS
const styles = makeStyles(theme => ({
    particleContainer: {
        position: "absolute",
        opacity: "0.65"
    }
}))

const Main = () => {
        const classes = styles()
        return (
            <>
                <NavigationBar />
                <Homepage />
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
                            value: 60
                        }
                    }
                }} />
            </>
        )
}

export default Main