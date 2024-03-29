import React, { useState } from 'react';
import {    AppBar,      
            CssBaseline,
            FormControlLabel,
            FormGroup,
            Grid,
            Paper,
            Switch,
            Toolbar,
            Typography } from '@material-ui/core';    
import ProjectCard from './components/ProjectCard';
import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { projectData } from './components/ProjectData';
import './App.css'
import DamienImage from './img/damien.jpg';

const theme = (colourPalette) => (
    createTheme({
      palette: {
        type: colourPalette,
        primary: {
            light: '#00BCD9',
            main: '#00798b',
            dark: '#004D59',
            contrastText: '#fff',
          },
          secondary: {
            light: '#E6CC0B',
            main: "#D99C16",
            dark: '#A67711',
            contrastText: '#000',
          },
      },
      typography: {
        fontFamily: [
          'Heebo-Regular'
        ],
      },
      spacing: 9,
    })
  )

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url(${DamienImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(4, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  pageContainer: {
    height: '100vh',
    overflow: 'auto'
  },
  themeSwitch: {
      position: 'absolute',
      right: '2em'
  }
}));

export default function SignInSide() {
    const [isDarkTheme, setIsDarkTheme] = useState(true);

    const changeTheme = () => {
        setIsDarkTheme(!isDarkTheme)
    }
    const classes = useStyles();

    return (
        <ThemeProvider theme={isDarkTheme ? theme("dark") : theme("light") }>
            <div className={classes.spacingContainer}>
                <Grid container component="main" className={classes.root}>
                    <CssBaseline />
                    <Grid item xs={false} sm={4} className={classes.image} />
                    <Grid item xs={12} sm={8} component={Paper} elevation={6} square>
                        <div className={classes.pageContainer}>
                            <AppBar position="static">
                                <Toolbar>
                                    <Typography variant="h6">
                                        Damien de Lartigue
                                    </Typography>
                                    <FormGroup className={classes.themeSwitch}>
                                        <FormControlLabel   control={<Switch checked={isDarkTheme} onChange={changeTheme} />} 
                                                            color="secondary" 
                                                            label="Theme" 
                                                            labelPlacement="start"/>
                                    </FormGroup>
                                </Toolbar>
                            </AppBar>
                            
                          <div className={classes.paper}>
                            
                            <Grid container spacing={5}>
                                <Grid item xs={false} sm={3} />
                                <Grid item xs={12} sm={6}>
                                    <Typography varient="p">
                                        A creative, friendly and adaptable full stack web developer with a diverse background in live events, design and project management. Highly commended for my ability to rapidly pick up new skills and methods to a high standard. In addition to my technical skills, I bring strong interpersonal skills, experience managing teams and projects, and extensive knowledge in devising and implementing new ideas. An adventurous coder with a career history of bringing ideas to life through technology.
                                    </Typography>
                                </Grid>
                                <Grid item xs={false} sm={3} />
                        
                                {projectData.map((card) => (
                                    <ProjectCard card={card} />
                                ))}

                            </Grid>
                          </div>
                        </div>
                    </Grid>
                        
                </Grid>
            </div>
        </ThemeProvider>
    );
}