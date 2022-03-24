import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signIn } from '../reducks/users/operations';
import Home from '../containers/Home';

import { push } from 'connected-react-router';

const Signin = () => {
    const dispatch = useDispatch();

    const closeButton = () => {
        dispatch(push('/'));
    };

    const [email, setEmail] = useState(''),
        [password, setPassword] = useState('');

    const inputEmail = event => {
        setEmail(event.target.value);
    };

    const inputPassword = event => {
        setPassword(event.target.value);
    };

    const signInButton = () => {
        dispatch(signIn(email, password));
        setEmail('');
        setPassword('');
    };
    return (
        <>
            <div className="blur">
                <Home />
            </div>
            <div class="wrap">
                <div class="login-form">
                    <div class="form-header">
                        <h3 class="signinbox">GAME GOBLINS</h3>
                    </div>
                    <h2 class="closebtn" onClick={closeButton}>
                        X
                    </h2>
                    {/* <!--Email Input--> */}
                    <div class="form-group">
                        <input type="text" class="form-input" onChange={inputEmail} placeholder="E-mail" />
                    </div>
                    {/* <!--Password Input--> */}
                    <div class="form-group">
                        <input type="password" class="form-input" onChange={inputPassword} placeholder="Password" />
                    </div>
                    {/* <!--Login Button--> */}
                    <div class="form-group">
                        <button class="form-button" onClick={signInButton}>
                            Login
                        </button>
                    </div>
                    <div class="form-footer">
                        Not a member yet?
                        <a href="/signup">Sign Up</a>
                    </div>
                </div>
            </div>
            {/* <!--/.wrap--> */}
        </>
    );
};

export default Signin;
