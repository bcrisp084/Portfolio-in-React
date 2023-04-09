import Container from "../components/Container";
import RowExample from "../components/Row";
import Col from "../components/Col";
import Card from "../components/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Image from "../components/Image";
import Navbar from "../components/Navbar";
import myPhoto from "../assets/my-photo.jpg";
import Life from "../assets/life.jpg";

const Home = () => {
  const titles = [
    "Full Stack Developer",
    "Teaching Assitant",
    "Automotive Technician",
    "Devout Father",
  ];
  return (
    <>
      <Navbar />
      <Container id={"main-content"} className={"main-container"}>
        <RowExample>
          <Col md={{ span: 6 }}>
            <div className="intro">
              <h1 className={"main-title"}>Hello, I'm Brian</h1>
              {titles.map((title) => (
                <ListGroup.Item className={"main-subtitle"} key={title}>
                  <h2>{title}</h2>
                </ListGroup.Item>
              ))}
            </div>
          </Col>
          <Col md={{ span: 6 }}>
            <div></div>
          </Col>
        </RowExample>
        <Image className={"life-img"} src={Life} />
      </Container>
      <Container className={"main-container"}>
        <RowExample id={"about"}>
          <Col>
            <Card />
          </Col>
          <Col>
            <Card />
          </Col>
        </RowExample>
        <Image className={"my-photo"} src={myPhoto} />
      </Container>
    </>
  );
};

export default Home;
