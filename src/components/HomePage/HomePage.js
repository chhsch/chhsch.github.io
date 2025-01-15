import Button from 'react-bootstrap/Button';
import "./HomePage.css"
import Resume from "../../assets/Chih_Hsing_Chen_Resume_Spring_v1.pdf"
import AboutPage from "../AboutPage/AboutPage";
import ExperiencePage from '../ExperiencePage/ExperiencePage';
import PortfolioPage from '../PortfolioPage/PortfolioPage';
import ContactPage from '../ContactPage/ContactPage';
import seaImage from '../../assets/sea.JPG';
import flower from '../../assets/flower.png';

import { useState, useEffect } from "react";
import { motion } from "framer-motion";


export default function HomePage() {
    const words = ["Software Developer", "Problem Solver", "Tech Enthusiast. Welcome to my website!"];
    const [currentWord, setCurrentWord] = useState("");
    const [index, setIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const word = words[index % words.length];
        const timeout = setTimeout(() => {
            setCurrentWord((prev) =>
                deleting ? word.substring(0, prev.length - 1) : word.substring(0, prev.length + 1)
            );

            if (!deleting && currentWord === word && index < words.length - 1) {
                setTimeout(() => setDeleting(true), 1000);
            } else if (deleting && currentWord === "") {
                setDeleting(false);
                setIndex((prev) => prev + 1);
            }
        }, deleting ? 100 : 150);

        return () => clearTimeout(timeout);
    }, [currentWord, deleting, index]);

    return (
        <section className="section-hero padding-section-medium">
            <div className="padding-global">
                <div className="container-medium w-container">
                    <div className="hero-grid">
                        <div className="hero-content">
                            {/* Animated Overline Text */}
                            {/*<motion.div*/}
                            {/*    className="overline-text"*/}
                            {/*    initial={{ opacity: 0, y: -20 }}*/}
                            {/*    animate={{ opacity: 1, y: 0 }}*/}
                            {/*    transition={{ duration: 1 }}*/}
                            {/*>*/}
                            {/*    Savory Wheels*/}
                            {/*</motion.div>*/}

                            {/* Animated Heading */}
                            <motion.h1
                                className="heading-style-h1 text-align-left"
                                initial={{opacity: 0, x: 0, y: 30}}
                                animate={{opacity: 1, x: 0, y: 5}}
                                transition={{duration: 1}}
                            >
                                Hathaway Chen
                            </motion.h1>

                            {/* Animated Typing Paragraph */}
                            <motion.p
                                className="text-size-regular max-width-medium max-width-tablet typing-text"
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                transition={{duration: 1.4}}
                            >
                                <span>Hello! I'm a {currentWord}</span>
                                <span className="cursor">|</span>
                            </motion.p>

                            {/* Animated Button */}
                            <motion.a
                                href={Resume}  // ✅ Link to the resume
                                className="button w-button"
                                target="_blank"  // ✅ Open in a new tab
                                rel="noopener noreferrer"  // ✅ Security best practice
                                whileHover={{scale: 1.1}}
                                whileTap={{scale: 0.9}}
                                initial={{opacity: 0, x: 0, y: 30}}
                                animate={{opacity: 1, x: 0, y: 5}}
                                transition={{duration: 0.5}}
                            >
                                Resume
                            </motion.a>
                        </div>

                        {/* Animated Image */}
                        <div className="hero-image-wrapper">
                            <motion.div
                                className="hero-image-wrapper"
                                initial={{opacity: 0, scale: 0.9}}
                                animate={{opacity: 1, scale: 1}}
                                transition={{ duration: 1.6 }}
                            >
                                <img src={flower} alt="Hero Image" className="hero_image" />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            <ExperiencePage/>
            <PortfolioPage/>
            <AboutPage/>
            <ContactPage/>
        </section>
    );
}







// export default function HomePage() {
//     const myStyle = {
//       backgroundImage: `url(${seaImage}`,
//       backgroundSize: "cover",
//       backgroundPosition: "center",
//       backgroundRepeat: "no-repeat",
//       height: "100vh",
//       width: "auto",
//       }
//
//     return (
//       <>
//         <div className="home" style={myStyle}>
//
//             <h1>Hathaway Chen</h1>
//             <h2>Aspiring Software Engineer</h2>
//             <Button className="resume-button" variant="outline-light" href={Resume} target="_blank">View Resume</Button>{' '}
//
//         </div>
//         <AboutPage/>
//         <ExperiencePage/>
//         <PortfolioPage/>
//         <ContactPage/>
//       </>
//     );
//   }