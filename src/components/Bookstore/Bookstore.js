import Button from 'react-bootstrap/Button';
import "./Bookstore.css"

export default function Bookstore() {
    return (
        <>
            <div class="bookstore">
                <h1>Bookstore Web Development </h1>
                <div class="bookstore-container">
                    <div>
                    <p>This involved orchestrating responsive web pages using a combination of HTML, CSS, JavaScript, and React. Executing an SQL database schema to handle inventory.</p>
                    <p><Button style={{width: "100%"}} variant="primary" href="https://github.com/chhsch" target="_blank">Github</Button></p>
                    </div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/EAnMfevFR_U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
        </>
    );
}