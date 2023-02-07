import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
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

    const nameSetter = () => {
        if (name === '') {
            return 'First and last name';
        } else {
            return name;
        }
    }

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

    console.log(errors)
    if (sessionUser) return <Redirect to="/" />;

    // Checking for errors here and creating error checker functions
    let nameError;
    let emailError;
    let passwordError;
    let passwordConfirmError;

    if (errors[0]) {
        nameError = errors[0].includes("Name can't be blank") ? 'Enter your name' : null;
        emailError = errors[0].includes("Email can't be blank") ? 'Enter your email' : null;
        passwordError = errors[0].includes("Password can't be blank") ||
            errors[0].includes("Password is too short (minimum is 6 characters)") ?
            'Minimum 6 characters required' : null ;
        passwordConfirmError = errors.includes('Passwords must match') ? 'Passwords must match' : null ;
    }

    const nameErrorChecker = () => {
        console.log(nameError);
        if (nameError) {
            return (
                <p className="errors">
                    <img class="exclamation" src={exclamation}></img>
                    {nameError}
                </p>
            )
        }
    }

    const emailErrorChecker = () => {
        if (emailError) {
            return (
                <p className="errors">
                    <img class="exclamation" src={exclamation}></img>
                    {emailError}
                </p>
            )
        }
    }

    const passwordErrorChecker = () => {
        if (passwordError) {
            return (
                <p className="errors">
                    <img class="exclamation" src={exclamation}></img>
                    {passwordError}
                </p>
            )
        }
    }

    const passwordConfirmErrorChecker = () => {
        if (passwordConfirmError) {
            return (
                <p className="errors">
                    <img class="exclamation" src={exclamation}></img>
                    {passwordConfirmError}
                </p>
            )
        }
    }

    return (
        <div className="section-a">
            <div id="logo">
                <img id="sign-up-logo" src={logo}></img>
            </div>
            <div id="wrapping-form" className="sign-up-box-section-a">
                <form>
                    <h1>Create account</h1>
                    <div id="name-input" className="input-field">
                        <label>Your name</label>
                            <input
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
                    <div id="email-input" className="input-field">
                        <label>Email</label>
                        <input
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
                    <div id="password-input" className="input-field">
                        <label>Password</label>
                        <input
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
                    <div id="password-confirm-input" className="input-field">
                        <label>Re-enter password</label>
                        <input
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
                    <div id="button">
                        <button onClick={handleSubmit}>Continue</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignupFormPage;