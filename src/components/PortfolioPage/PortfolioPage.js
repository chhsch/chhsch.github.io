import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./PortfolioPage.css"
import image0 from '../../assets/IMU.png'
import image1 from '../../assets/scoliosis.png'
import image15 from '../../assets/covid.JPG'
import image2 from '../../assets/FS.png'
import image3 from '../../assets/Bookstore.png'
import image4 from '../../assets/mobile.png'
import image5 from '../../assets/bucketlist.png'
import image6 from '../../assets/gqme.png'
import image7 from '../../assets/ToDolist.png'
import image8 from '../../assets/fancygallery.png'
import {motion} from "framer-motion";
// import AnimatedButton from "../../components/PortfolioPage/AnimatedButton";
import AnimatedButton from "./AnimatedButton.tsx";






export default function PortfolioPage() {
    const navigate = useNavigate();

    // Unified navigation function for internal and external links
    const handleNavigation = (path, isExternal = false) => {
        if (isExternal) {
            window.open(path, "_blank");
        } else {
            navigate(path);
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const cardBodyVariants = {
        initial: { backgroundColor: "#FFFFFF" },
        hover: {
            backgroundColor: "#DAD7CD",
            transition: { duration: 0.3, ease: "easeInOut" }
        }
    };


    const buttonVariants = {
        // initial: {
        //     scale: 1  // Default size
        // },
        // hover: {
        //     scale: 1.1,  // Slight enlargement on hover
        //     transition: {
        //         duration: 0.3,  // Smooth scaling
        //         // ease: "easeOut"  // Smooth easing
        //     }
        // }
    };


    // ✅ Added navigation paths for each project
    const projects = [
        {
            title: "Bucket List",
            img: image5,
            text: "The BucketList App is your ultimate companion for capturing and achieving your life's aspirations.",
            path: "https://github.com/chhsch/BucketList-APP", // External Link
            isExternal: true
        },
        {
            title: "ChatStream",
            img: image4,
            text: "A cross-platform mobile chat app enabling real-time messaging across different operating systems.",
            path: "/mobile"
        },
        {
            title: "Bookstore",
            img: image3,
            text: "An online bookstore utilizing React's component-based architecture for a scalable user experience.",
            path: "https://github.com/chhsch/bookstore_website",
            isExternal: true
        },
        {
            title: "Fancy Gallery",
            img: image8,
            text: "A dynamic Android app that fetches and displays curated images from Flickr with interactive features.",
            path: "https://github.com/chhsch/FancyGallery",
            isExternal: true
        },
        {
            title: "To Do List",
            img: image7,
            text: "An iOS task management app leveraging Swift and Core Data for a responsive user experience.",
            path: "https://github.com/chhsch/ToDoList_v2",
            isExternal: true
        },
        {
            title: "River Crossing Game",
            img: image6,
            text: "A modular game engine simulating classic river-crossing puzzles with interactive GUI.",
            path: "https://github.com/chhsch/River-Crossing-Game",
            isExternal: true
        },
        {
            title: "Wearable Pain Assessment",
            img: image2,
            text: "An automatic pain assessment tool.",
            path: "/ac"
        },
        {
            title: "COVID Prediction Model",
            img: image15,
            text: "Neural network algorithms analyzing epidemic data to aid medical institutions and governments.",
            path: "/covid"
        },
        {
            title: "IMU-Based Shoulder Pain Assessment",
            img: image0,
            text: "IMU feature extraction for quantifying shoulder pain in clinical assessments.",
            path: "/imu"
        }
    ];

    return (
        <>
            <div id="project" className="portfolio">
                <h1>Select Projects</h1>
                <div className="portfolio-container">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <Card className="responsive-card">


                                <Card.Img variant="top" src={project.img} alt={project.title} />


                                <motion.div
                                    variants={cardBodyVariants}
                                    initial="initial"
                                    whileHover="hover"
                                    style={{ height: '100%' }}
                                >
                                    <Card.Body>
                                        <Card.Title>{project.title}</Card.Title>
                                        <Card.Text>{project.text}</Card.Text>

                                        {/* ✅ Dynamic Button Navigation */}
                                        <motion.div variants={buttonVariants}
                                                    // initial="initial"
                                                    // whileHover="hover"
                                                    >
                                            <AnimatedButton
                                                onClick={() => handleNavigation(project.path, project.isExternal)}
                                            >
                                                Learn more
                                            </AnimatedButton>

                                            {/*<Button*/}
                                            {/*    onClick={() => handleNavigation(project.path, project.isExternal)}*/}
                                            {/*    style={{*/}
                                            {/*        backgroundColor: '#A3B18A',*/}
                                            {/*        borderColor: '#A3B18A',*/}
                                            {/*        position: 'absolute',*/}
                                            {/*        bottom: '10px',*/}
                                            {/*        left: '10px',*/}
                                            {/*        // padding: '10px 20px',*/}
                                            {/*        transition: 'transform 0.3s ease-in-out',*/}
                                            {/*        transformOrigin: 'center'*/}
                                            {/*    }}*/}
                                            {/*>*/}
                                            {/*    Learn more*/}
                                            {/*</Button>*/}
                                        </motion.div>
                                    </Card.Body>
                                </motion.div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </>
    );
}
