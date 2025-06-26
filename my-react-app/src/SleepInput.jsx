
function SleepInput () {
    return (
        <div className="sleep-input-container">
            <div>
                <label htmlFor="sleep-input" className="sleep-input-label">Start Time:</label>
                <input className="sleep-input" name="sleep-input" placeholder="Enter in XX:XX"/>
            </div>
            <div>
                <label htmlFor="sleep-input" className="sleep-input-label">End Time:</label>
                <input className="sleep-input" name="sleep-input" placeholder="Enter in XX:XX"/>
            </div>
        </div>
    )
}

export default SleepInput