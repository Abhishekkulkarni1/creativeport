import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
 

  
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                My skill sets can be viewed here
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="meter1" />
                  <h5> HTML</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="meter2" />
                  <h5> CSS</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="meter3" />
                  <h5> JavaScript</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="meter3" />
                  <h5> React</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="meter3" />
                  <h5> Node.js</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="meter3" />
                  <h5> Express.js</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="meter1" />
                  <h5> MongoDb</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="meter1" />
                  <h5> C</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="meter1" />
                  <h5> C++</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-left"
        src={colorSharp}
        alt="colorSharp"
      />
    </section>
    
  );
};
