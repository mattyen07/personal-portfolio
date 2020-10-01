import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Box, Grid, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography} from "@material-ui/core";
import NavigationBar from "./NavigationBar";

//CSS
const styles = makeStyles(theme => ({
    mainContainer: {
      height: "100%",
    },

    topCardContainer: {
      maxWidth: 350,
      margin: "2rem auto",
      background:"#DCDCDC",
      boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    },

    bottomCardContainer: {
      maxWidth: 350,
      margin: "2rem auto",
      background:"#DCDCDC",
      boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    }
}));


const Project = () => { 
    const classes = styles();
    return (
        <>
          <Box component="header" className={classes.mainContainer}>
            <NavigationBar />
            <Typography variant="h3" align="center" style={{marginTop: "2rem"}}>
              Projects
            </Typography>
            {/*Top Tiles*/}
            <Grid container justify="center">
              {/* PID Controller */}
              <Grid item xs={12} sm={8} md={6} lg={4}>
                <Card className={classes.topCardContainer}>
                  <CardActionArea>
                    <CardMedia component="img" alt="Project 1" height="140"/>
                    <CardContent>
                      <Typography gutterBottom variant="h5">
                        Line Following Robot
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        An Autonomous Line Following Robot that was built using optical sensors and a <b>Raspberry PI</b>. 
                        The robot was controlled by a PID controller that I coded using <b>Python</b> and would adjust the speed
                        of the motors based on the sensor's input.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary" href="https://github.com/mattyen07/AutonomousLineFollowingRobot" target="_blank">
                      View Source Code
                    </Button>
                  </CardActions>
                 </Card>
              </Grid>

              {/* Personal Portfolio */}
              <Grid item xs={12} sm={8} md={6} lg={4}>
                <Card className={classes.topCardContainer}>
                  <CardActionArea>
                    <CardMedia component="img" alt="Project 2" height="140"/>
                    <CardContent>
                      <Typography gutterBottom variant="h5">
                        Personal Portfolio
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        A web application built with <b>JavaScript ES6, React.js, Material UI</b> and <b>HTML/CSS</b> to display my personal portfolio and skills, 
                        while also learning new front-end technologies. This is the website you are currently viewing!
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary" href="https://github.com/mattyen07/personal-portfolio" target="_blank">
                      View Source Code
                    </Button>
                  </CardActions>
                 </Card>
              </Grid>
            </Grid>

            {/*Bottom tiles*/}    
            <Grid container justify="center">
              {/* Java Wikimediator Server*/}
              <Grid item xs={12} sm={8} md={6} lg={4}>
                <Card className={classes.bottomCardContainer}>
                  <CardActionArea>
                    <CardMedia component="img" alt="Project 3" height="140"/>
                    <CardContent>
                      <Typography gutterBottom variant="h5">
                        Java Wikimediator Server
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        A backend <b>Java</b> server built using the Java Sockets Library. The backend was built using the <b>jWiki API</b> to query
                        Wikipedia and return live results to the client. A generic cache is also implemented in the server and allows users
                        to disconnect and return without losing previous browsing data.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary" href="https://github.com/mattyen07/WikimediatorServer" target="_blank"> 
                      View Source Code
                    </Button>
                  </CardActions>
                 </Card>
              </Grid>

              {/* ext2 FS */}
              <Grid item xs={12} sm={8} md={6} lg={4}>
                <Card className={classes.bottomCardContainer}>
                  <CardActionArea>
                    <CardMedia component="img" alt="Project 4" height="140"/>
                    <CardContent>
                      <Typography gutterBottom variant="h5">
                        ext2 File System
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        A FUSE-based Linux Filesystem built using <b>C</b> to implement the cat, ls, stat and readlink commands. 
                        The program reads given disk images and calculates the block size, volume size, number of inodes and number of block groups,
                        which it uses as information for the implementation of <b>Path Resolution</b>.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary" href="https://github.com/mattyen07/ext2-FS" target="_blank">
                      View Source Code
                    </Button>
                  </CardActions>
                 </Card>
              </Grid>
            </Grid>
          </Box>
        </>
      );
}

export default Project;