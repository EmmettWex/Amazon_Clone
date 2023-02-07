import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import * as sessionActions from '../../store/session';
import './SignupForm.css';
import logo from '../../assets/images/amazon_logo.png';
import exclamation from '../../assets/images/exclamation.png'

const SignupFormPage = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState([]);

    // will likely need a password setter function as well in order to get the "at least 6 characters"

    const handleSubmit = e => {
        e.preventDefault();
        // come back to the errors, this will likely look very different
        if (password === confirmPassword) {
            setErrors([]);
            return dispatch(sessionActions.signup({ name, email, password }))
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
                        setErrors([response.statusText]);
                    }
                });
        }
        return setErrors(['Passwords must match']);
    }

    if (sessionUser) return <Redirect to="/" />;

    // Checking for errors here and creating error checker functions
    let nameError;
    let emailError;
    let emailFormatError;
    let passwordError;
    let passwordConfirmError;

    if (errors[0]) {
        nameError = errors[0].includes("Name can't be blank") ? 'Enter your name' : null;
        emailFormatError = errors[0].includes("Email Wrong format") ?
            'Wrong or invalid email adress. Please correct and try again' : null;
        emailError = errors[0].includes("Email is too short (minimum is 1 character)") ? 'Enter your email' : null;
        passwordError = errors[0].includes("Password can't be blank") ||
            errors[0].includes("Password is too short (minimum is 6 characters)") ?
            'Minimum 6 characters required' : null ;
        passwordConfirmError = errors.includes('Passwords must match') ? 'Passwords must match' : null ;
    }

    const nameErrorChecker = () => {
        if (nameError) {
            return (
                <p className="errors">
                    <img className="exclamation" src={exclamation}></img>
                    {nameError}
                </p>
            )
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
        } else if (emailFormatError) {
            return (
                <p className="errors">
                    <img className="exclamation" src={exclamation}></img>
                    {emailFormatError}
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

    const passwordConfirmErrorChecker = () => {
        if (passwordConfirmError) {
            return (
                <p className="errors">
                    <img className="exclamation" src={exclamation}></img>
                    {passwordConfirmError}
                </p>
            )
        }
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

    return (
        <div className="signup-section-a">
            <div id="signup-logo-div">
                <img id="sign-up-logo" src={logo}></img>
            </div>
            <div className="sign-up-box-section-a">
                <form className="signup-form">
                    <h1>Create account</h1>
                    <div className="signup-input-field">
                        <label className="signup-label">Your name</label>
                            <input
                                className="signup-input"
                                type="text"
                                placeholder="First and last name"
                                value={name}
                                onChange={(e) => {
                                    e.preventDefault();
                                    setName(e.target.value);
                                }}
                                required
                            />
                            {nameErrorChecker()}
                    </div>
                    <div className="signup-input-field">
                        <label className="signup-label">Email</label>
                        <input
                            className="signup-input"
                            type="text"
                            value={email}
                            onChange={(e) => {
                                e.preventDefault();
                                setEmail(e.target.value);
                            }}
                            required
                        />
                        {emailErrorChecker()}
                    </div>
                    <div className="signup-input-field">
                        <label className="signup-label">Password</label>
                        <input
                            className="signup-input"
                            type="password"
                            placeholder="At least 6 characters"
                            value={password}
                            onChange={(e) => {
                                e.preventDefault();
                                setPassword(e.target.value);
                            }}
                            required
                        />
                        {passwordErrorChecker()}
                    </div>
                    <div className="signup-input-field">
                        <label className="signup-label">Re-enter password</label>
                        <input
                            className="signup-input"
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => {
                                e.preventDefault();
                                setConfirmPassword(e.target.value);
                            }}
                            required
                        />
                        {passwordConfirmErrorChecker()}
                    </div>
                    <div>
                        <button className="signup-button" onClick={handleSubmit}>Continue</button>
                    </div>
                    <div>
                        <button className="signup-button" onClick={demoLogIn}>Demo Sign In</button>
                    </div>
                </form>
                <div className="signup-below-button">
                    By clicking the following link you will be redirected to my Github: 
                    <a className="link" href="https://github.com/EmmettWex" target="_blank"> Github</a>
                </div>
                <div id="signup-spacer"></div>
                <div className="sign-in-link">
                    Already have an account?
                    <Link to="/login" className="link"> Sign in</Link>
                </div>
            </div>
        </div>
    )
}

export default SignupFormPage;