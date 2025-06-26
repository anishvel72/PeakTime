import { useNavigate } from 'react-router-dom';
import "./sleepform.css"
import infoIcon from "./assets/information.png"
import SleepInput from "./SleepInput.jsx"

function SleepForm () {

    const navigate = useNavigate();

    const skipForm = () => {
        navigate('/caffform');
    };

    const submitForm = () => {
        navigate('/caffform');
    };

    return (
        <div className="sleep-background">
            <div className="sleep-container">
                <h3>Sleep</h3>

                <div className="sleep-title-container">
                    <label htmlFor="sleep-input" className="sleep-title"><b>How much have you slept?</b></label>
                    <img src={infoIcon} alt="info icon" className="sleep-info-icon" title="Enter the amount of time you have slept in military time."/>
                </div>

                <SleepInput/>

                <div className="sleep-button-container">
                    <button onClick={skipForm} className="sleep-skip">skip</button>
                    <button onClick={submitForm} className="sleep-next">next</button>
                </div>
            </div>
        </div>
    )
}

export default SleepForm