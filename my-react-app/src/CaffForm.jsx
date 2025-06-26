import { useNavigate } from 'react-router-dom';
import "./caffform.css"
import infoIcon from "./assets/information.png"

function CaffForm () {

    const navigate = useNavigate();

    const skipForm = () => {
        navigate('/physicalform');
    };

    const submitForm = () => {
        navigate('/physicalform');
    };

    return (
        <div className='caff-background'>
            <div className="caff-container">
                <h3>Caffeine</h3>

                <div className="caff-title-container">
                    <label for="input" className="caff-title"><b>How much caffeine have you had?</b></label>
                    <img src={infoIcon} alt="info icon" className="caff-info-icon" title="Enter the amount of caffeine(mg) you have had in the past 6 hours."/>
                </div>

                <input type="text" className="caff-input" name="caff-input" placeholder="Enter in mg"></input>

                <div className="caff-button-container">
                    <button onClick={skipForm} className="caff-skip">skip</button>
                    <button onClick={submitForm} className="caff-next">next</button>
                </div>
            </div>
        </div>
    )
}

export default CaffForm