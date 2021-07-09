import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ProjectCard from './components/ProjectCard';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';
import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { projectData } from './components/ProjectData';
import { spacing } from '@material-ui/system'
import './App.css'
import DamienImage from './img/damien.jpg';

const theme = (colourPalette) => (
    createTheme({
      palette: {
        type: colourPalette,
        primary: {
            light: '#f6685e',
            main: '#f44336',
            dark: '#aa2e25',
            contrastText: '#fff',
          },
          secondary: {
            light: '#33bfff',
            main: '#f44336',
            dark: '#007bb2',
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
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  spacingContainer: {
    padding: "22px",
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
                <Grid container component="main" className={classes.root} spacing={5}>
                    <CssBaseline />
                    <Grid item xs={false} sm={4} className={classes.image} />
                    <Grid item xs={12} sm={8} component={Paper} elevation={6} square>
                        <div className={classes.paper}>
                            <Grid container spacing={5}>
                                <Grid item xs={false} sm={3} />
                                <Grid item xs={12} sm={6}>
                                    <Typography component="h1" variant="h3">
                                        Damien de Lartigue
                                    </Typography>

                                    <FormGroup>
                                        <FormControlLabel   control={<Switch checked={isDarkTheme} onChange={changeTheme} />}
                                                            label="Change Theme"
                                        />
                                    </FormGroup>

                                    <Typography varient="p">
                                        A creative, friendly and adaptable full stack web developer with a diverse background in live events, design and project management. Highly commended for my ability to rapidly pick up new skills and methods to a high standard. In addition to my technical skills, I bring strong interpersonal skills, experience managing teams and projects, and extensive knowledge in devising and implementing new ideas. An adventurous coder with a career history of bringing ideas to life through technology.
                                    </Typography>
                                </Grid>
                                <Grid item xs={false} sm={3} />
                        
                                {projectData.map((card) => (
                                    <ProjectCard card={card}/>
                                ))}

                            </Grid>
                        </div>
                    </Grid>
                        
                </Grid>
            </div>
        </ThemeProvider>
    );
}