import DrivingVision from '../img/driving-vision.jpg'
import Covid from '../img/covid-tracker.png'
import EU from '../img/eu.png'
import Psqlbu from '../img/psqlbu.png'

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
    heading: "Eurovision party",
    description: "Get together with friends and chat live during eurovision, then vote for your favourite acts.",
    more: [ "Backend API written in Go. Frontend written in Svelte and tailwind. This is a self hostable application deployed using docker."
        ],
    links: [{ github: "https://www.github.com/anytimesoon/eurovision"}],
    img: EU
  }, {
    id: 3,
    heading: "Postgres Backup",
    description: "Track cases of covid-19. Visualise statistics by country or globally",
    more: [ "Written in go, this is a configurable command line util that can back up and restore postgres databases. Designed to work on a cron job."
    ],
    links: [{ github: "https://github.com/anytimesoon/psql-remote-backup-restore"}],
    img: Psqlbu
    }, {
        id: 3,
        heading: "Covid 19 Tracker",
        description: "Track cases of covid-19. Visualise statistics by country or globally",
        more: [ "React frontend with using Material-UI for styling",
            "Axios to handle async requests using open API data",
            "Data visualised using chart.js"
        ],
        links: [{live: "https://covid-19-tracker.delartigue.co.uk/"}, { github: "https://www.github.com/anytimesoon/covid-19-tracker"}],
        img: Covid
    }];
