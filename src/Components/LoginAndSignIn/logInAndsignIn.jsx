import { useState } from "react";
import login from '../../Assets/Images/login.png'
import './Loginsignin.css'
import { useNavigate } from "react-router-dom";


function LogInAndsignIn() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault();
        navigate('/dashboard')
    }

    /*let auth = useAuth();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({

            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string()
                .min(5, 'Must be 5 characters or above')
                .required('Required'),
        }),
        onSubmit: values => {
            auth.signin(values.email, values.password);
        },
    });*/



    return (
        <>
            <div className='loginandsignin'>
                <div className='login--header'>
                    <h1>Q Easy</h1>
                    <p>Efficiency in Line, Precision in Time: </p>
                    <img src={login} alt="loginimage" />
                </div>

                <div className="login-container">
                    <div className="logo">Welcome Back</div>
                    <form onSubmit={handlesubmit}>
                        <div className="inputs">
                            <input
                                type="text"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                
                            />
                            <button className="btn" type="submit" >Login</button>
                            <div className="links">
                                <p>Forgot Password?</p> |
                                <p>Create Account</p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default LogInAndsignIn
