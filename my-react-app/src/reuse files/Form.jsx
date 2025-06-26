//import "./form.css"
//import infoIcon from "./assets/information.png"

function Form () {
    return (
        <div className="container">
            <h3>Question</h3>

            <div className="title-container">
                <label for="input" className="title"><b>How much have you slept?</b></label>
                <img src={infoIcon} alt="info icon" className="info-icon" title="Enter the amount of time you have slept in military time."/>
            </div>

            <input type="text" className="input" name="input" placeholder="Enter like XX:XX"></input>

            <div className="button-container">
                <button className="skip">skip</button>
                <button className="next">next</button>
            </div>
        </div>
    )
}

export default Form