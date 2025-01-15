import "./Covid.css"
import covid1 from '../../assets/covid-1.png'
import covid2 from '../../assets/covid-2.png'


export default function Covid() {
    return (
        <div className="covid">
            <h1>Neural Networks Based COVID Prediction Model</h1>
            <div className="covid-container">
                <p>2020 ITRI Competition winner, the Neural Networks Based COVID Prediction Model, utilized Python and SQLite to extract flight data and COVID statistics from the Taiwan CDC. It employed OpenCV linear filters to refine COVID chest X-rays, enabling the neural network to forecast outbreaks with enhanced imaging data.</p>
                <img src={covid1} alt="Model Loss Graph" width="560" height="315" />
                <img src={covid2} alt="Mean Absolute Error Graph" width="560" height="315" />
            </div>
        </div>
    );
}

