import Button from 'react-bootstrap/Button';
import "./AC.css"

export default function AC() {
    return (
        <>
            <div class="ac">
                <h1>Wearable-based Pain Assessment in Patients with Adhesive Capsulitis Using Machine Learning</h1>
                <div class="ac-container">
                    <div>
                        <p>This pilot study introduces a novel pain assessment tool designed for patients with adhesive
                            capsulitis (AC). Recognizing the limitations of self-report methods in pain assessment,
                            which often suffer from recall biases and measurement errors, this study leverages wearable
                            inertial measurement units (IMUs) combined with machine learning (ML) techniques. In the
                            study, 23 patients with AC performed five specific shoulder tasks, during which pain scores
                            were collected using the shoulder pain and disability index. The patients wore two IMUs on
                            their wrist and arm to record movement signals. The study focused on analyzing correlations
                            between the pain scores and various IMU movement features, such as smoothness, power, and
                            speed. Notably, features related to movement smoothness showed higher correlation with
                            patient-reported pain scores. Additionally, the study developed ML-based pain prediction
                            models. The model utilizing Gaussian process regression demonstrated strong Spearman
                            correlations (0.795, p&lt;0.01) and achieved a mean absolute error of 5.680 and a root mean
                            square error of 6.663.</p>
                        {/*<p><Button style={{width: "100%"}} variant="primary" href="https://github.com/chhsch" target="_blank">Github</Button></p>*/}
                    </div>

                    <iframe
                        src="https://drive.google.com/file/d/19ViotQrYbPeXHeMKpHRsX4h-LZ0uB9EH/preview"
                        style={{width: '100%', height: '500px', border: 'none'}}
                        allow="autoplay"
                    ></iframe>

                </div>
            </div>
        </>
    );
}