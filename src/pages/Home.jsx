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
          <Col md={{ span: 6 }}>
            <Card />
          </Col>
          <Col md={{ span: 6 }}>
            <Card src={myPhoto} />
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
      </Container>
    </>
  );
};

export default Home;
