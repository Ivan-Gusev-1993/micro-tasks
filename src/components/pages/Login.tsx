import {useNavigate} from "react-router-dom";

export const Login = () => {
          const navigate = useNavigate()
    return (
        <div style={{textAlign: 'center'}}>
            <h5>Login to your account</h5>
            <input placeholder={"login:"} autoFocus/>
            <br/>
            <input placeholder={"password:"}/>
            <br/>
            <button onClick={() => navigate('/adidas')}>Enter</button>
            <button onClick={() => navigate('/')}>Cancel</button>
        </div>
    );
};

