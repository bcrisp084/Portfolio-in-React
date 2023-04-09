import Container from "../components/Container";
import RowExample from "../components/Row";
import Col from "../components/Col";
import Card from "../components/Card";
import Image from "../components/Image";
import Navbar from "../components/Navbar";
import myPhoto from "../assets/my-photo.jpg";
import Life from "../assets/life.jpg";

const Home = () => {
  return (
    <>
      <Navbar />
      <Container id={"main-content"} className={"main-container"}>
        <RowExample>
          <Col md={{ span: 6, offset: 5 }}>
            <Image className={"myPhoto"} src={myPhoto} />
          </Col>
        </RowExample>
        <Image className={"life-img"} src={Life} />
        <RowExample>
          <Col md={{ span: 6, offset: 3 }}></Col>
        </RowExample>

        <RowExample>
          <Col md={{ span: 4, offset: 0 }}>
            <h1 className="titles">Full Stack Engineer</h1>
          </Col>
        </RowExample>
        <RowExample>
          <Col md={{ span: 6, offset: 1 }}>
            <h1 className="titles">Automotive Technician</h1>
          </Col>
        </RowExample>
        <RowExample>
          <Col md={{ span: 6, offset: 3 }}>
            <h1 className="titles">Teaching Assistant</h1>
          </Col>
        </RowExample>
        <RowExample>
          <Col md={{ span: 6, offset: 6 }}>
            <h1 className="titles">Devoted Father</h1>
          </Col>
        </RowExample>
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
      </Container>
    </>
  );
};

export default Home;
