import { useNavigate } from 'react-router-dom';
import "./welcome.css"
import Features from "./Features.jsx"

function Welcome () {
    const navigate = useNavigate();

    const goToLogin = () => {
        navigate('/login');
    };


    return(
        <>
            <div className="welcome-container">
                <div className="logo"/>
                <div></div>
                <button onClick={goToLogin} className="login">log in</button>
                <button onClick={goToLogin} className="signup">sign up</button>
                <div></div>
                <div></div>
                <div/>
                <div/>
                <div/>
                <h1 className="title">A Recommendation System Specific to You</h1>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/kZvWt29OG0s?si=-bUd1OlAMyV2srMU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                
            </div>

            <Features/>
        </>
    )
}

export default Welcome