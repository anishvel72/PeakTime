import { useNavigate } from 'react-router-dom';
import "./stressform.css"
import infoIcon from "./assets/information.png"

function Slider ({func}) {
    return (
        <input type="range" onClick={func} className="physical-slider" id="slider" placeholder="Enter like XX:XX"></input>
    )
}

function StressForm () {

    const navigate = useNavigate();

    const skipForm = () => {
        navigate('/home');
    };

    const submitForm = () => {
        navigate('/home');
    };

    function handleClick() {
        const rangeNums = [0,25,50,75,100];
        let currentValue = 0;

        for (let i = 0; i < rangeNums.length; i++) {
            if (Math.abs(slider.value - rangeNums[i]) < Math.abs(slider.value - currentValue)) {
                currentValue = rangeNums[i];
            }
        }

        slider.value = currentValue;
    }
    
    return (
        <div className='stress-background'>
            <div className="stress-container">
                <h3>Stress</h3>

                <div className="stress-title-container">
                    <label for="input" className="stress-title"><b>How stressed are you?</b></label>
                    <img src={infoIcon} alt="info icon" className="stress-info-icon" title="Enter how stressed you feel on a scale of 1-5."/>
                </div>

                <div className="stress-slider-container">
                    <Slider func={handleClick}/>
                    <div className="stress-slider-labels">
                        <p>chill</p>
                        <p>Light</p>
                        <p>Moderate</p>
                        <p>Heavy</p>
                        <p>im kms</p>
                    </div>
                </div>

                <div className="stress-button-container">
                    <button onClick={skipForm} className="stress-skip">skip</button>
                    <button onClick={submitForm} className="stress-next">next</button>
                </div>
            </div>
        </div>
    )
}

export default StressForm