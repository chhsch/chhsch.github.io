import Button from 'react-bootstrap/Button';
import "./IMU.css"

export default function IMU() {
    return (
        <>
            <div class="imu">
                <h1>Assessment of Shoulder Pain for Adhesive Capsulitis Using Inertial Measurement Units</h1>
                <div class="imu-container">
                    <div>
                        <p>Adhesive capsulitis (AC) is a common shoulder joint disease. Reliable shoulder assessment is
                            essential for AC evaluation and diagnosis. Most traditional assessment approaches focus on
                            shoulder function; however, few studies have developed an objective method to evaluate
                            shoulder pain in patients with AC. Our aim is to propose an inertial measurement unit
                            (IMU)-based evaluation approach for ACs. Twenty-three frozen shoulder (FS) patients and 20
                            healthy subjects participated in this study. The subjects performed five shoulder tasks
                            based on the shoulder pain and disability index (SPADI) while using wrist-worn and arm-worn
                            IMUs. These tasks consisted of washing hair (WH), washing the upper back (WUB), washing the
                            lower back (WLB), placing an object on a high shelf (POH), and removing an object from the
                            back pocket (ROP). In this study, we calculated seven IMU feature types extracted from the
                            IMU signals, including smoothness, power, and speed, and evaluated the effectiveness of
                            these features in quantifying the pain scores of SPADI. The results demonstrate that
                            moderate positive (negative) correlations mostly occur for ROP, particularly with the
                            smoothness feature type. These results demonstrate the potential feasibility of an IMU-based
                            pain assessment approach for AC.</p>
                        {/*<p><Button style={{width: "100%"}} variant="primary" href="https://github.com/lucywbeck/challenge-with-friends" target="_blank">Github</Button></p>*/}
                    </div>
                    <iframe
                        src="https://drive.google.com/file/d/1kiG-3mZ3VYX7ruOIK0ZpDyQoaSPMj6OZ/preview"
                        style={{width: '100%', height: '500px', border: 'none'}}
                        allow="autoplay"
                    ></iframe></div>

                </div>
            </>
            );
            }
