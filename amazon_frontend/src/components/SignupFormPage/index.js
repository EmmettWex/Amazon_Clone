import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as sessionActions from '../../store/session';
import './SignupForm.css';
import logo from '../../assets/images/amazon_logo.png';

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
        return setErrors();
    }

    if (sessionUser) return <Redirect to="/" />;

    return (
        <div className="section-a">
            <div id="logo">
                <img id="sign-up-logo" src={logo}></img>
            </div>
            <div id="wrapping-form" className="sign-up-box-section-a">
                <form onSubmit={handleSubmit}>
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
                    </div>
                    <div id="email-input" className="input-field">
                        <label>Email
                            <input
                                type="text"
                                value={email}
                                onChange={(e) => {
                                    e.preventDefault();
                                    setEmail(e.target.value);
                                }}
                                required
                            />
                        </label>
                    </div>
                    <div id="password-input" className="input-field">
                        <label>Password
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
                        </label>
                    </div>
                    <div id="password-confirm-input" className="input-field">
                        <label>Re-enter password
                            <input
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => {
                                    e.preventDefault();
                                    setConfirmPassword(e.target.value);
                                }}
                                required
                            />
                        </label>
                    </div>
                    <div id="button">
                        <button type="submit">Continue</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignupFormPage;