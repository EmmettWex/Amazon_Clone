import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as sessionActions from '../../store/session';
import './SignupForm.css';

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
        return setErrors()
    }

    if (sessionUser) return <Redirect to="/" />;

    return (
        <form onSubmit={handleSubmit}>
            <ul>{errors.map(error => <li key={error}>{error}</li>)}</ul>
            <div>logo here</div>
            <h2>Create account</h2>
            <label>Your name
                <input
                    type="text"
                    value={nameSetter}
                    onChange={(e) => {
                        e.preventDefault();
                        setName(e.target.value);
                    }}
                    required
                />
            </label>
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
            <label>Password
                <input
                    type="password"
                    value={password}
                    onChange={(e) => {
                        e.preventDefault();
                        setPassword(e.target.value);
                    }}
                    required
                />
            </label>
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
            <button type="submit">Continue</button>
        </form>
    )
}

export default SignupFormPage;