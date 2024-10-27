import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useUser from "../../hooks/useUser";

const Login = () => {
    const { setUser } = useUser();
    const [email, setEmail] = useState("bruno@email.com");
    const [password, setPassword] = useState("admin123");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch("http://localhost:3000/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({email, password}),
        });
        const results = await res.json();
        if (results.success) {
            const user = results.data[0]
            setUser(user);
            localStorage.setItem("user", user.id)
            navigate("/");
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="email"
                    autoComplete="email"
                />
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="password"
                    autoComplete="current-password"
                />
                <button type="submit">Enviar</button>
            </form>
            <Link to="/register">Não tenho conta</Link>
        </div>
    );
};

export default Login;
