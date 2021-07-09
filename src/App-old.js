import React, { useState } from 'react';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import {  Typography, 
          AppBar, 
          Card, 
          CardActions, 
          CardContent, 
          CardMedia, 
          CssBaseline, 
          Grid, 
          Toolbar, 
          Container,
          FormGroup,
          FormControlLabel,
          Button,
          Switch, 
          makeStyles} from '@material-ui/core';
import FolderSpecialIcon from '@material-ui/icons/FolderSpecial';
import styles from './fonts/fonts.css'

const theme = (colourPalette) => (
  createTheme({
    palette: {
      type: colourPalette,
    },
    typography: {
      fontFamily: [
        'Heebo-Regular'
      ],
    }
  })
)

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  }
}));

const cards = [{
  id: 1,
  heading: 'Driving Vision',
  description: "Consulting and marketing tool built from the ground up using Ruby on Rails as a Backend, Frontend and API. The front end is built using jQuery and Foundation Zurb.",
  links: [{ live: "https://www.driving.vision" }]
}, {
  id: 2,
  heading: "Covid 19 Tracker",
  description: "React frontend using open API data to track global covid 19 cases. Built using material-ui and axios for async requests.",
  links: [{live: "https://covid-19-tracker-seven-hazel.vercel.app/"}, { github: "https://www.github.com/anytimesoon/covid-19-tracker"}]
}];

const App = () => {
    const classes = makeStyles();

    const [isDarkTheme, setIsDarkTheme] = useState(true);

    const changeTheme = () => {
      setIsDarkTheme(!isDarkTheme)
    }

    return ( 
        <ThemeProvider theme={isDarkTheme ? theme("dark") : theme("light") }>
            <CssBaseline />
            <AppBar position="sticky">
                <Toolbar>

                      <FormGroup>
                        <FormControlLabel
                          control={
                            <Switch checked={isDarkTheme} onChange={changeTheme} />
                          }
                          label="Change Theme"
                        />
                      </FormGroup>

                </Toolbar>
            </AppBar>
            <main>
        {/* Hero unit */}
        <div>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Damien de Lartigue
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
            A creative, friendly and adaptable full stack web developer with a diverse background in live events, design and project management. Highly commended for my ability to rapidly pick up new skills and methods to a high standard. In addition to my technical skills, I bring strong interpersonal skills, experience managing teams and projects, and extensive knowledge in devising and implementing new ideas. An adventurous coder with a career history of bringing ideas to life through technology.
            </Typography>
            {/* <div className={classes.heroButtons}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Main call to action
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div> */}
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card.id} xs={12} sm={6}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.heading}
                    </Typography>
                    <Typography>
                      {card.description}
                    </Typography>
                  </CardContent>
                  <CardActions>

                   { 
                     card.links.map((link, i) => (
                       <Button key={i} size="small" color="primary" href={ link.live ? link.live : link.github }>
                         {link.live ? "View" : "Code"}
                       </Button>
                     ))
                   }
                    
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
        </ThemeProvider>
     );
}
 
export default App;

