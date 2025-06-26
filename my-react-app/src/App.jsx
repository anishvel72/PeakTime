import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Welcome from './Welcome.jsx'
import SleepForm from './SleepForm.jsx'
import Home from './Home.jsx'
import Login from './Login.jsx'
import PhysicalForm from './PhysicalForm.jsx'
import CaffForm from './CaffForm.jsx'
import StressForm from './StressForm.jsx'

function App () {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Welcome/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/sleepform" element={<SleepForm/>}/>
                <Route path="/physicalform" element={<PhysicalForm/>}/>
                <Route path="/caffform" element={<CaffForm/>}/>
                <Route path="/stressform" element={<StressForm/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </Router>
    )
}

export default App