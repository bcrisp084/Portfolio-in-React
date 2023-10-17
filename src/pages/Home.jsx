import Container from "../components/Container";
import RowExample from "../components/Row";
import Col from "../components/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Image from "../components/Image";
import Navbar from "../components/Navbar";
import myPhoto from "../assets/my-photo.jpg";
import Life from "../assets/Life.jpg";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  const titles = [
    "Full Stack Developer",
    "Teaching Assistant",
    "Automotive Technician",
    "Devout Father",
    "Central Grader",
  ];
  return (
    <>
      <Navbar />
      <Container id={"main-content"} className={"main-container"}>
        <RowExample>
          <Col md={{ span: 6 }}>
            <div className="intro">
              <h1 className={"main-title"}>Hello, I'm Brian</h1>
              <h3 className="main-subtitle">
                <TypeAnimation
                  sequence={[
                    "I am a Full Stack Developer",
                    2000,
                    "I am a Teaching Assistant",
                    2000,
                    "I am an Automotive Technician",
                    2000,
                    "I am a Devout Father",
                    2000,
                    "I am a Central Grader",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{ fontSize: "2em", display: "inline-block" }}
                  repeat={Infinity}
                />
              </h3>
              {/* {titles.map((title) => (
                <ListGroup.Item className={"main-subtitle"} key={title}>
                  <h2>{title}</h2>
                </ListGroup.Item>
              ))} */}
            </div>
          </Col>
          <Col md={{ span: 6 }}></Col>
        </RowExample>
        <Image className={"life-img"} src={Life} />
      </Container>
      <Container className={"main-container"}>
        <RowExample id={"about"}>
          <Col>
            <h1 className="about-section">About Me</h1>
            <p className="about-text">
              I am a full stack web developer with a background in automotive
              repair. I have a passion for learning and problem solving. I
              recently earned a certificate in full stack web development from
              Johns Hopkins University. I am proficient in HTML, CSS,
              JavaScript, Node.js, Express.js, MySQL, MongoDB, and React.js. I
              am currently seeking a position as a full stack web developer. I
              am a proud father of three. I enjoy spending time with my family,
              and builiding projects on the web.
            </p>
          </Col>
          <Col>
            <h2 className="table-heading">Proficient Skills</h2>
            <table className="skills-table">
              <thead>
                <tr>
                  <th scope="col">Front End</th>
                  <th scope="col">Back End</th>
                  <th scope="col">Database</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>HTML</td>
                  <td>Node.js</td>
                  <td>MySQL</td>
                </tr>
                <tr>
                  <td>CSS</td>
                  <td>Express.js</td>
                  <td>MongoDB</td>
                </tr>
                <tr>
                  <td>JavaScript</td>
                  <td>Handlebars.js</td>
                  <td>IndexedDB</td>
                </tr>
                <tr>
                  <td>React.js</td>
                  <td>REST</td>
                  <td>GraphQL</td>
                </tr>
                <tr>
                  <td>Bootstrap</td>
                  <td>APIs</td>
                  <td>Sequelize</td>
                </tr>
                <tr>
                  <td>jQuery</td>
                  <td>JSON</td>
                  <td>Mongoose</td>
                </tr>
              </tbody>
            </table>
          </Col>
        </RowExample>
        <Image className={"my-photo"} src={myPhoto} />
      </Container>
    </>
  );
};

export default Home;
