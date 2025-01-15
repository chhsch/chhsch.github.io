import Image from "react-bootstrap/Image";
import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.css";
import "./AboutPage.css"
import Head from "../../assets/covid.JPG"
import Head2 from "../../assets/head.JPG"


export default function AboutPage() {
    return (
      <>
        <div id="about" className="about">
          <h1>About</h1>
          <div className="about-container">
            <div className="container2-1">
                <Image
                    className="headshot"
                    src={Head2}
                    style={{
                        width: "20rem",
                        height: "20rem",
                        objectFit: "cover", // 确保图像不变形
                        borderRadius: "50%", // 将图像裁剪成圆形
                    }}
                    alt="Hathaway Chen"
                />
                <p>Hello, I'm Hathaway! I'm currently pursuing a master’s degree in Computer Science at Virginia Tech and working as a Big Data Engineer intern at Eviden. My professional journey spans developing scalable data pipelines, applying machine learning with Python, and building both front-end (React.js, TypeScript, HTML/CSS) and back-end (Java) solutions. I’m passionate about leveraging technology to improve healthcare outcomes and am dedicated to making a meaningful impact in this field.</p>
            </div>

            {/*<div className="container2-2">*/}

            {/*  <Card bg="light">*/}
            {/*    <Card.Body>*/}
            {/*        <Card.Title style={{ textAlign: 'center' }}>Programming Languages</Card.Title>*/}
            {/*        <Card.Text*/}
            {/*            style={{ textAlign: 'center' }}>Python, Java, C++, HTML, CSS, JavaScript, TypeScript, Dart, SQL    </Card.Text>*/}

            {/*    </Card.Body>*/}
            {/*  </Card>*/}

            {/*  <Card bg="light">*/}
            {/*    <Card.Body>*/}
            {/*        <Card.Title style={{ textAlign: 'center' }}>Frameworks</Card.Title>*/}
            {/*        <Card.Text*/}
            {/*            style={{ textAlign: 'center' }}>React.js, Node.js, Express.js, Flutter, Flask                    </Card.Text>*/}
            {/*    </Card.Body>*/}
            {/*  </Card>*/}
            {/*<Card bg="light">*/}
            {/*    <Card.Body>*/}
            {/*        <Card.Title style={{ textAlign: 'center' }}>Databases</Card.Title>*/}
            {/*        <Card.Text*/}
            {/*            style={{ textAlign: 'center' }}>Firebase, SQLite, MySQL, PostgreSQL                    </Card.Text>*/}
            {/*    </Card.Body>*/}
            {/*</Card>*/}

            {/*  <Card bg="light">*/}
            {/*    <Card.Body>*/}
            {/*        <Card.Title style={{ textAlign: 'center' }}>Technologies</Card.Title>*/}
            {/*        <Card.Text*/}
            {/*            style={{ textAlign: 'center' }}>AWS, Git, GitHub, Docker, Machine Learning, TensorFlow, Keras                    </Card.Text>*/}
            {/*    </Card.Body>*/}
            {/*  </Card>*/}
            
            {/*</div>*/}
          </div>
        </div>
      </>
    );
  }