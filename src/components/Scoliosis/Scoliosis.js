import Button from 'react-bootstrap/Button';
import "./Scoliosis.css"
import scoliosis1 from '../../assets/scoliosis-1.png'
import scoliosis2 from '../../assets/scoliosis-2.png'


export default function Scoliosis() {
    return (
        <>
            <div class="scoliosis">
                <h1>Scoliosis</h1>
                <div class="scoliosis-container">
                    <div>
                    <p>Scoliosis Detection AI aids physicians by pre-assessing scoliosis through patient photos, enabling early symptom detection and treatment to prevent worsening. Utilizes image pre-processing, cropping, background removal, and a 2-stage model building process, comparing 7 models including InceptionResNetV2 and MobileNet.</p>
                        <img src={scoliosis1} alt="Model Loss Graph" width="560" height="315" />
                        <img src={scoliosis2} alt="Mean Absolute Error Graph" width="560" height="315" />
                    </div>
                                 </div>
            </div>
        </>
    );
}