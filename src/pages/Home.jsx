import Container from "../components/Container";
import RowExample from "../components/Row";
import Col from "../components/Col";
import Card from "../components/Card";
import Image from "../components/Image";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Container id={"main-content"} className={"main-container"}>
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
          <Col>
            <Image src={"./src/assets/my-photo.jpg"} alt={"photo-of-brian"} />
          </Col>
        </RowExample>
      </Container>
    </>
  );
};

export default Home;
