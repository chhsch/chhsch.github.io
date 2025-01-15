import { Container, Nav, Navbar } from "react-bootstrap";
import "./NavBar.css"
import { motion, useScroll, useSpring, useAnimation } from "framer-motion";
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function NavBar() {
  const { scrollY } = useScroll();
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const controls = useAnimation();

  // Detect scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY && currentScrollY > 50) {
        setIsVisible(false); // Hide when scrolling down
      } else {
        setIsVisible(true); // Show when scrolling up
      }

      setPrevScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollY]);

  // Control navbar animation
  useEffect(() => {
    controls.start({
      y: isVisible ? 0 : -100, // Move up when hidden
      opacity: isVisible ? 1 : 0,
      transition: { duration: 1.0, ease: 'easeInOut' },
    });
  }, [isVisible, controls]);

  // class="navbar w-nav navbar navbar-expand navbar-light"
  return (
      <motion.div
          animate={controls}
          initial={{y: -100, opacity: 0}}  // Slide down on load
      >
        <div className="padding-global-2 ">
          <Navbar className="navbar w-nav">

            <div className="container">
              <div className="navbar-component">

                {/* Logo and Brand */}
                <Navbar.Brand href="#" className="d-flex align-items-center">
                  {/*<img src={logo} alt="Logo" className="logo-navbar" />*/}
                  {/*<span className="brand-text">spacekit</span>*/}
                </Navbar.Brand>

                {/* Navigation Links */}
                <div className="right-navbar-content">
                  <Nav className="ms-auto nav-menu">
                    <Nav.Link href="#">Home</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#work">Work</Nav.Link>
                    <Nav.Link href="#project">Project</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                  </Nav>
                </div>

              </div>
            </div>


          </Navbar>
        </div>

      </motion.div>
  )
      ;
}


// export default function NavBar() {
//   return (
//     <>
//       <Navbar bg="light" variant="light" collapseOnSelect expand="lg" sticky="top">
//         <Container>
//           <Navbar.Brand href="/">Hathaway Chen</Navbar.Brand>
//           <Navbar.Toggle aria-controls="navbarScroll" />
//           <Navbar.Collapse id="nav-bar-collapse">
//             <Nav className="me-auto">
//               <Nav.Link href="/">Home</Nav.Link>
//               <Nav.Link href="#about">About</Nav.Link>
//               <Nav.Link href="#experience">Experience</Nav.Link>
//               <Nav.Link href="#portfolio">Portfolio</Nav.Link>
//               <Nav.Link href="#contact">Contact</Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </>
//   );
// }

