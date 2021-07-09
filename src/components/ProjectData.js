import DrivingVision from '../img/driving-vision.jpg'
import Covid from '../img/covid-tracker.png'

export const projectData = [{
    id: 1,
    heading: 'Driving Vision',
    description: "Consulting and marketing tool built from the ground up using Ruby on Rails as a Backend, Frontend and API. The front end is built using jQuery and Foundation Zurb.",
    more: [ "point 1", 
            "point 2", 
            "point 3"],
    links: [{ live: "https://www.driving.vision" }],
    img: DrivingVision
  }, {
    id: 2,
    heading: "Covid 19 Tracker",
    description: "Track cases of covid-19. Visualise statistics by country or globally",
    more: [ "React frontend with using Material-UI for styling", 
            "Axios to handle async requests using open API data",
            "More good stuff"
        ],
    links: [{live: "https://covid-19-tracker.delartigue.co.uk/"}, { github: "https://www.github.com/anytimesoon/covid-19-tracker"}],
    img: Covid
  }];