import {useNavigate} from "react-router-dom"
import "./home.css"

function Home () {
    const navigate = useNavigate();

    const goToInfo = () => {
    navigate('/sleepform');
  };


    return (
        <div className="home-container">
            <div className="home-button-container">
                <button className="home-buttons">Tasks</button>
                <button className="home-buttons">Calendar</button>
                <button className="home-buttons">Trends</button>
                <button onClick={goToInfo} className="home-buttons">Add Info</button>
            </div>
            <div className="home-big-container">
                <button className="home-big-button"></button>
            </div>
        </div>
    )
}

export default Home