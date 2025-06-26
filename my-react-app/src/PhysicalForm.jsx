import { useNavigate } from 'react-router-dom';
import "./physicalform.css"
import infoIcon from "./assets/information.png"
import SleepInput from "./SleepInput"

function Slider ({func}) {
    return (
        <input type="range" onClick={func} className="physical-slider" id="slider" placeholder="Enter like XX:XX"></input>
    )
}

function PhysicalForm () {

    const navigate = useNavigate();

    const skipForm = () => {
        navigate('/stressform');
    };

    const submitForm = () => {
        navigate('/stressform');
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
        <div className='physical-background'>
            <div className="physical-container">
                <h3>Physical Activity</h3>

                <div className="physical-title-container">
                    <label htmlFor="input" className="physical-title"><b>How much exercise have you gotten?</b></label>
                    <img src={infoIcon} alt="info icon" className="physical-info-icon" title="Enter the intensity and time you have been active (military time) in the last 24 hours."/>
                </div>
            
                <div className="physical-slider-container">
                    <Slider func={handleClick}/>
                    <div className="physical-slider-labels">
                        <p>None</p>
                        <p>Light</p>
                        <p>Moderate</p>
                        <p>Heavy</p>
                        <p>Intense</p>
                    </div>
                </div>

                <SleepInput/>

                <div className="physical-button-container">
                    <button onClick={skipForm} className="physical-skip">skip</button>
                    <button onClick={submitForm} className="physical-next">next</button>
                </div>
            </div>
        </div>
    )

}

export default PhysicalForm