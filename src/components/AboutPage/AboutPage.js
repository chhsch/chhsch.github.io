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
                        objectFit: "cover",
                        borderRadius: "50%", 
                    }}
                    alt="Hathaway Chen"
                />
                <p>Hello! I’m Hathaway, a Software Engineer LP at Acuity, graduated with a Master’s in Computer Science from Virginia Tech. I’m passionate about building scalable systems, optimizing cloud infrastructure, and turning data into actionable insights. Happy to connect.</p>
            </div>

      
          </div>
        </div>
      </>
    );
  }