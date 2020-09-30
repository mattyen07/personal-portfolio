import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Typography} from "@material-ui/core";
import NavigationBar from "./NavigationBar";
import headshot from "../Images/headshot.png"

//CSS
const styles = makeStyles(theme => ({
    mainContainer: {
      textAlign: "center",
      paddingTop: "2rem",
    },

    skillList: {
      border: "1px solid black",
      borderRadius: "15px",
      width: "65%",
      textAlign: "center"
    },

    rightContainer: {
      float: "left",
  
      width: "30vw",
      height: "75vh",
  
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    },

    leftContainer: {
      paddingLeft: "2rem",
      float: "left",
  
      width: "30vw",
      height: "75vh",
  
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },

    midContainer: {
      float: "left",
  
      width: "30vw",
      height: "75vh",
  
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }
}));

const About = () => { 
    const classes = styles();
    return (
        <>

          <NavigationBar />

          <div className={classes.mainContainer}>
            <Typography variant="h3" align="center">
              About Me
            </Typography>
            <div className={classes.leftContainer}>
              <img src = {headshot} width="166px" height ="174px" alt = "" align = "center"/>
              <Typography variant = "h6" align="left">
                Hi there!
                <br/>
                My name is <b>Matthew Yen</b> and I am a <b>third year Computer Engineering</b> student at the <b>University of British Columbia</b>.
                I love software and coding as it allows me to follow my passion and wake up excited to learn something new every day.
                When I am not coding or learning new technologies, you can find me out on the golf course, playing VALORANT, at the gym or hanging out with friends and family.
                <br/>
                Thanks for visiting!
              </Typography>
            </div>

            <div className={classes.midContainer}>
              <Typography variant="h4" align = "center" style={{textDecoration: "underline"}}>
                Languages
              </Typography>
              <Typography variant="h6" className={classes.skillList}>
                C/C++<br/>
                Java<br/>
                Python<br/>
                Golang<br/>
                HTML5/CSS3<br/>
                JavaScript<br/>
              </Typography>
              <br/>
              <Typography variant="h4" align = "center" style={{textDecoration: "underline"}}>
                Tools
              </Typography>
              <Typography variant="h6" className={classes.skillList}>
                Git/Github<br/>
                Linux (Ubuntu)<br/>
                MySQL<br/>
                VS Code<br/>
                IntelliJ IDEA<br/>
                Docker<br/>
              </Typography>
            </div>
            <div className={classes.rightContainer}>
              <Typography variant="h4" align = "center" style={{textDecoration: "underline"}}>
                Frameworks
              </Typography>
              <Typography variant="h6" className={classes.skillList}>
                JUnit<br/>
                Robot<br/>
                React<br/>
                Material UI<br/>
              </Typography>
              <br/>
              <Typography variant="h4" align = "center" style={{textDecoration: "underline"}}>
                Other Tools
              </Typography>
              <Typography variant="h6" className={classes.skillList}>
                REST API/JSON<br/>
                YAML<br/>
                Agile Scrum/Sprint Development<br/>
                Agile Kanban Board<br/>
                JIRA<br/>
              </Typography>
            </div>
          </div>
        </>
      );
}

export default About;