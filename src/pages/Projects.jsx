import digitalDiary from "../assets/digital-diary.jpg";
import gameWatch from "../assets/gamewatch.jpg";
import getFlix from "../assets/getflix.jpg";
import astrozoders from "../assets/astrozoders.png";
import employee from "../assets/employee.png";
import gottaGO from "../assets/gottaGO.png";
import Navbar from "../components/Navbar";
import RowExample from "../components/Row";
import Col from "../components/Col";
import Container from "../components/Container";
import { useState } from "react";

const Projects = () => {
  const [isExpanded, setExpanded] = useState(false);

  const toggle = () => {
    setExpanded(!isExpanded);
  };

  const projects = [
    {
      title: "Digital Diary",
      description:
        "Digital Diary is an online memory storage app that allows users to create and store memories in the form of text, images, and videos. Users have the ability to take precious moments from their journey through life and share them with others.",
      image: digitalDiary,
      github: "https://github.com/bcrisp084/Digital-Diary",
      url: "https://quiet-forest-25305.herokuapp.com/",
    },
    {
      title: "Gotta Go",
      description:
        "Gotta Go is a web application that allows users to search for public restrooms in their area. Users can search by city or zip code and are provided with a list of restrooms in the area. Users can also add restrooms to the database.",
      image: gottaGO,
      github: "https://github.com/bcrisp084/gottaGO",
      url: "https://murmuring-dawn-63159.herokuapp.com/",
    },
    {
      title: "Game Watch",
      description:
        "Game Watch was built from the Rawg API. It allows users to search for games and view information about them. At the moment the only information is the title and release year. ",
      image: gameWatch,
      github: "https://github.com/bcrisp084/Game-Watch",
      url: "https://mrbriancrisp.com/Game-Watch/",
    },
    {
      title: " Get Flix",
      description:
        " Get Flix is a movie search app that allows users to search for movies and view information about them. Users can search by title, actor, or genre.",
      image: getFlix,
      github: "https://github.com/bcrisp084/Movie-Night",
      url: "https://github.com/bcrisp084/Movie-Night",
    },
    {
      title: "Astrozoders",
      description:
        " Astrozoders is an astrology app that allows users to search for their zodiac sign and view information about it. Users can search by sign name or birth date.",
      image: astrozoders,
      github: "https://github.com/bcrisp084/Astrozoders",
      url: "https://asheth22.github.io/Astrozoders/",
    },
    {
      title: "Employee Tracker",
      description:
        "A command line application that allows users to view, add, and update employee information.",
      image: employee,
      github: "https://github.com/bcrisp084/The-guys-from-work",
      url: "https://github.com/bcrisp084/The-guys-from-work",
    },
  ];

  return (
    <>
      <Navbar />
      <h1 className="projects-title">Projects I've Built</h1>
      <Container className="projects">
        <RowExample>
          {projects.map((project) => (
            <div key={project.title} className="flex">
              <div className={isExpanded ? "expanded" : "block"}>
                <a href="#0" className="toggle" onClick={toggle}></a>
                <div className="smallblockcontent">Click me</div>
                <div className={isExpanded ? "display" : "content"}>
                  <h2>{project.title}</h2>
                  <img
                    src={project.image}
                    className="card-img-top"
                    alt={project.title}
                  />
                  <p className="description">{project.description}</p>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary live-links"
                  >
                    Github
                  </a>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary live-links"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
          {/* {projects.map((project) => (
            <Col key={project.title}>
              <div className="project-card"> */}
          {/* <h2>{project.title}</h2> */}
          {/* <img
                  src={project.image}
                  className="card-img-top"
                  alt={project.title}
                /> */}
          {/* <div className="project-card-body">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Github
                  </a>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Live Demo
                  </a>
                </div> */}
          {/* </div>
            </Col>
          ))} */}
        </RowExample>
      </Container>
    </>
  );
};

export default Projects;
