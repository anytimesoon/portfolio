import DrivingVision from '../img/driving-vision.jpg'
import Covid from '../img/covid-tracker.png'

export const projectData = [{
    id: 1,
    heading: 'Driving Vision',
    description: "One-stop-shop for a consulting firm, allowing them to create diagnostic questionnaires which produces a report with a mix of boilerplate and bespoke content; manages the licenses to their in-house VR app; and post blogs/webinars.",
    more: [ "Customised Devise user authentication using JWT", 
            "Modelled custom database schema with restful routes using Active Record and Postgres", 
            "Frontend and backend Ruby on Rails app with API",
            "jQuery, Chart.js, Dropzone.js and Foundation Zurb used to enable interactive front end"],
    links: [{ live: "https://www.driving.vision" }],
    img: DrivingVision
  }, {
    id: 2,
    heading: "Covid 19 Tracker",
    description: "Track cases of covid-19. Visualise statistics by country or globally",
    more: [ "React frontend with using Material-UI for styling", 
            "Axios to handle async requests using open API data",
            "Data visualised using chart.js"
        ],
    links: [{live: "https://covid-19-tracker.delartigue.co.uk/"}, { github: "https://www.github.com/anytimesoon/covid-19-tracker"}],
    img: Covid
  }];