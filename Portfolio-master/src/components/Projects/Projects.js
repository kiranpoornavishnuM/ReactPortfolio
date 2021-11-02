import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Stock Price Data Analysis"
              description="ANALYSIS OF 3 IT SECTOR STOCK PRICES - ( 6 Year Data )
            Script 1 = INFY.NS ( INFOSYS)
            Script 2 = TCS.NS (TATA CONSULTANCY SERVICES)
            Script 3 = WIPRO.NS ( WIPRO )"
              link="https://github.com/kiranpoornavishnuM/Stock_Data_Analysis_IT_Sector/blob/main/Report.md"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Stock Price Prediction"
              description="Used Long-Short term memory time series model to predict future closing stock price. Plotted the output on a graph"
              link="https://github.com/kiranpoornavishnuM/Stock_Price_Prediction"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={suicide}
                isBlog={false}
                title="Bitcon Trading Bot"
                description="Build a automated trading bot which places trades when the asset price rises by x% in t seconds. Live data was fetched from the binance server.  Integrated Binance API library"
                link="https://github.com/kiranpoornavishnuM/Simple-Bitcoin-Trading-Bot"
            />
          </Col>

          {/*<Col md={4} className="project-card">*/}
          {/*  <ProjectCard*/}
          {/*    imgPath={editor}*/}
          {/*    isBlog={false}*/}
          {/*    title="Editor.io"*/}
          {/*    description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"*/}
          {/*    link="https://github.com/soumyajit4419/Editor.io"*/}
          {/*  />*/}
          {/*</Col>*/}

          {/*<Col md={4} className="project-card">*/}
          {/*  <ProjectCard*/}
          {/*    imgPath={bitsOfCode}*/}
          {/*    isBlog={false}*/}
          {/*    title="Bits-0f-C0de"*/}
          {/*    description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."*/}
          {/*    link="https://github.com/soumyajit4419/Bits-0f-C0de"*/}
          {/*  />*/}
          {/*</Col>*/}



          {/*<Col md={4} className="project-card">*/}
          {/*  <ProjectCard*/}
          {/*    imgPath={emotion}*/}
          {/*    isBlog={false}*/}
          {/*    title="Face Recognition and Emotion Detection"*/}
          {/*    description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.*/}
          {/*    Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."*/}
          {/*    link="https://github.com/soumyajit4419/Face_And_Emotion_Detection"*/}
          {/*  />*/}
          {/*</Col>*/}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
