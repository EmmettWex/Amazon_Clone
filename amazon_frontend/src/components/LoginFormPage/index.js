import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import './LoginForm.css';

const LoginFormPage = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    const handleSubmit = e => {
        e.preventDefault();

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
            });
    }

    if (sessionUser) return <Redirect to="/" />;

    return (
        <form onSubmit={handleSubmit}>
            <ul>
                {
                    errors.map((error) => {
                        return <li key={error}>{error}</li>
                    })
                }
            </ul>
            <label>Email
                <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />
            </label>
            <label>Password
                <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                />
            </label>
            <button type="submit">Log In</button>
        </form>
    )
}

export default LoginFormPage;