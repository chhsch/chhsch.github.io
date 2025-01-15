import Button from 'react-bootstrap/Button';
import "./BucketList.css"

export default function BucketList() {
    return (
        <>
            <div class="BucketList">
                <h1>ChatStream</h1>
                <div class="mobile-container">
                    <div>
                    <p>It's about a real-time chat application. I apply <b>Flutter</b> and <b>Dart</b> for the frontend development, <b>FirebaseAuth</b> for secure user authentication, <b>Stream</b> for handling real-time data updates, and <b>Firebase</b> for the database.
                    </p>
                    <p><Button style={{width: "100%"}} variant="primary" href="https://github.com/chhsch/BucketList-APP" target="_blank">Github</Button></p>
                    </div>
                    <iframe width="560" height="315" src="https://github.com/chhsch/BucketList-APP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
        </>
    );
}