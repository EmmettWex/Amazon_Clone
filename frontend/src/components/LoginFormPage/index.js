import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import './LoginForm.css';
import exclamation from '../../assets/images/exclamation.png'
import alert from '../../assets/images/alert.png'

const LoginFormPage = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);
    const [submitEmail, setSubmitEmail] = useState(false);
    const [submitPassword, setSubmitPassword] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        
        email ? setSubmitEmail(true) : setSubmitEmail(false) ;
        password ? setSubmitPassword(true) : setSubmitPassword(false) ;

        setErrors([]);

        return dispatch(sessionActions.login({ email, password }))
            .catch(async (response) => {
                let data;
                try {
                    data = await response.clone().json();
                } catch {
                    data = await response.text();
                }

                if (data?.errors) {
                    setErrors(data.errors);
                } else if (data) {
                    setErrors([data]);
                } else {
                    setErrors([response.statusText])
                }
            }
        );
    }

    const demoLogIn = e => {
        e.preventDefault();
        return dispatch(sessionActions.login(
            {
                email: 'emmett.wechsler11@gmail.com',
                password: 'hello123'
            }
        )
        );
    }

    if (sessionUser) return <Redirect to="/" />;

    let emailError = null;
    let passwordError = null;
    let loginErrorBox = false;

    if (errors[0]) {
        if (email === '') {
            emailError = 'Enter your email'
        } else {
            emailError = null;
        }

        if (password === '') {
            passwordError = 'Enter your password'
        } else {
            passwordError = null;
        }

        if ( submitEmail || submitPassword ) {
            loginErrorBox = true;
        } else {
            loginErrorBox = false;
        }
    }

    const emailErrorChecker = () => {
        if (emailError) {
            return (
                <p className="errors">
                    <img className="exclamation" src={exclamation}></img>
                    {emailError}
                </p>
            )
        }
    }

    const passwordErrorChecker = () => {
        if (passwordError) {
            return (
                <p className="errors">
                    <img className="exclamation" src={exclamation}></img>
                    {passwordError}
                </p>
            )
        }
    }

    const loginErrorBoxChecker = () => {
        if (loginErrorBox) {
            return (
                <div className="login-error-box">
                    <div className="login-error-box-interior">
                        <img className="login-alert" src={alert}></img>
                        <div className="login-error-messages">
                            <p className="login-error-message-one">
                                There was a problem
                            </p>
                            <p className="login-error-message-two">
                                Your email or password is incorrect
                            </p>
                        </div>
                    </div>
                </div>
            )
        }
    }

    return (
        <div className="login-section-a">
            <div id="login-logo-div">
                <Link to="/">
                    <img id="login-logo" src="https://amazonosrs-seeds.s3.amazonaws.com/OSRZon_black.png"></img>
                </Link>
            </div>
            {loginErrorBoxChecker()}
            <div className="login-wrapper">
                <div className="login-box-section-a">
                    <form className="login-form">
                        <h1>Sign In</h1>
                        <div className="login-input-field">
                            <label className="login-label">Email</label>
                            <input
                                className="login-input"
                                type="text"
                                value={email}
                                onChange={(e) => {
                                    e.preventDefault();
                                    setEmail(e.target.value)}
                                }
                                required
                            />
                            {emailErrorChecker()}
                        </div>
                        <div className="login-input-field">
                            <label className="login-label">Password</label>
                            <input
                                className="login-input"
                                type="password"
                                value={password}
                                onChange={(e) => {
                                    e.preventDefault();
                                    setPassword(e.target.value)}
                                }
                                required
                            />
                            {passwordErrorChecker()}
                        </div>
                        <div>
                            <button className="login-button" onClick={handleSubmit}>Sign In</button>
                        </div>
                        <div>
                            <button className="login-button" onClick={demoLogIn}>Demo Sign In</button>
                        </div>
                    </form>
                    <div className="login-below-button">
                        By clicking the following link you will be redirected to my Github:
                        <a className="link" href="https://github.com/EmmettWex" target="_blank"> Github</a>
                    </div>
                </div>
                {/* put the below form section here */}
                <div className="login-belowForm-divider">
                    <div className="login-divider-line"></div>
                    <h2>New to Amazon OSRS?</h2>
                </div>
                <div>
                    <Link to="/signup">
                        <button className="login-createAccount">
                            Create your Amazon OSRS account
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default LoginFormPage;