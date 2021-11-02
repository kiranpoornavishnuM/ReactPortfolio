import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Kiran Poorna Vishnu </span>
            from <span className="purple"> Bengaluru, India.</span>
            <br />I am a junior pursuing BE in Computer Science from SDMCET Dharwad
            <br />
            <br />
            Things I'm passionate about!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Web and software development
            </li>
            <li className="about-activity">
              <ImPointRight /> Financial Markets
            </li>
            <li className="about-activity">
              <ImPointRight /> Algo Trading Systems
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
