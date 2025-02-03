import React from "react";

import login from '../../Assets/Images/login.png'
import './Loginsignin.css'


function LogInAndsignIn() {

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

                <div className='loginsignin'>
                    <div className='login--text'>
                        <h5>Welcome Back!</h5>

                    </div>
                    <form >
                        <div className='login--inputs'>

                            <input
                                type='email'
                                className='input'
                                placeholder='Email'
                                name='email'
                               /* value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}*/
                            />
                            
                            
                            <input
                                type='password'
                                className='input'
                                placeholder='Password'
                                name='password'
                               /* value={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}*/
                            />
                            

                            <div className='forgot--password'> Forgot Password?</div>
                            <button
                                type='submit'
                                className='submit'
                            >
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default LogInAndsignIn
