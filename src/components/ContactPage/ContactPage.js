import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from '@formspree/react';
import "./ContactPage.css"

function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [state, handleSubmit] = useForm("mjvlzebb");

    if (state.succeeded) {
        return <p style={{textAlign: "center"}}>Message sent!</p>;
    }
    return (
        <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label >Name</Form.Label>
                        <Form.Control
                            placeholder="Enter name"
                            value={name}
                            onChange={({target:{value}}) => setName(value)}
                            required
                            name="name" // for formspree
                            aria-label="name"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={({target:{value}}) => setEmail(value)}
                            required
                            name="email" // for formspree
                        />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control
                            placeholder="Enter subject"
                            value={subject}
                            onChange={({target:{value}}) => setSubject(value)}
                            required
                            name="subject" // for formspree
                            aria-label="subject"
                        />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Message</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={4}
                            placeholder="Enter message"
                            value={message}
                            onChange={({target:{value}}) => setMessage(value)}
                            required
                            name="message" // for formspree
                            aria-label="message"
                        />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

            <Button
                type="submit"
                style={{
                    backgroundColor: "#A3B18A",  // Custom green
                    color: "white",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: "8px",
                    fontWeight: "bold",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                    transition: "transform 0.3s ease-in-out"
                }}
                onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
                onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
                Submit
            </Button>


        </Form>
    )
}

export default function ContactPage() {
    return (
        <>
            <div id="contact" className="contact">
                <h1>Contact</h1>
                <div className="contact-container">
                    <div className="form-container">
                        <ContactForm/>
                    </div>
                    <div className="button-container">
                        <a
                            href="https://www.linkedin.com/in/hathawaychen/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="custom-button linkedin-btn"
                        >
                            LinkedIn
                        </a>

                        <a
                            href="https://github.com/chhsch"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="custom-button github-btn"
                        >
                            GitHub
                        </a>
                    </div>

                    <footer style={{textAlign: "center", marginTop: "50px"}}>
                        <small>&copy; 2023 Hathaway Chen. All rights reserved.</small>
                    </footer>
                </div>
            </div>
        </>
    );
}