import { useNavigate } from 'react-router-dom';
import "./login.css"

function Login () {
    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/home');
    };

    const goToWelcome = () => {
        navigate('/');
    };

    return (
        <div className="login-container">
            <div className="login-input-container">
                <h1>Welcome to your scheduling buddy!</h1>
                <button onClick={goToHome} className="login-button">GOOGLE</button>
                <button onClick={goToWelcome} className="login-back">back</button>
            </div>
            <div className='login-background'></div>
        </div>
    )
}

export default Login