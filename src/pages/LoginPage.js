import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginInitiate } from "../store/reducers/fireBaseReducer";
import { useNavigate, Link } from "react-router-dom";

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            return;
        }
        dispatch(loginInitiate(email, password));
        navigate('/home/');
    }

    return (
        <div>
            <h2>Login</h2>
            <hr />
            <form onSubmit={handleSubmit}>
                email
                <input value={email} onChange={(e) => setEmail(e.target.value)} /><br />
                Пароль
                <input value={password} onChange={(e) => setPassword(e.target.value)} /><br />
                <button type="{submit}">Войти</button>
            </form>
            <hr />
            <Link to="/register/">Регистрация</Link>
        </div>
    )
}

export default LoginPage