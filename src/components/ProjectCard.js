import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions'; 
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia'; 
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => {
    return {
    lightDarkButtons: {
        color: theme.palette.type === "dark" ? theme.palette.primary.light : theme.palette.primary.main
    }}
});

const ProjectCard = ({card: {id, heading, description, more, links, img}, currentTheme}) => {
    const classes = useStyles();

    return (

            <Grid item key={id} xs={12} sm={6}>
                <Card>
                    <CardMedia
                        image={img}
                        title={heading}
                        style={{height: 200}}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                        {heading}
                        </Typography>
                        <Typography>
                        {description}
                        </Typography>
                        
                    </CardContent>

                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography>Find out more</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            <ul>
                                {more.map(item => (
                                    <li>{item}</li>
                                ))}
                            </ul>
                        </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <CardActions>
                        {links.map((link, i) => (
                            <Button key={i} size="small" 
                                    href={ link.live ? link.live : link.github }
                                    className={classes.lightDarkButtons}>
                                {link.live ? "View" : "Code"}
                            </Button>
                        ))}
                    </CardActions>
                </Card>
            </Grid>
    );
}
 
export default ProjectCard;

