// Componentes

import { Link, useNavigate } from "react-router-dom";
import Input from "../layout/form/Input";
import Button from "../layout/form/Button";
import PasswordInput from "../layout/form/PasswordInput";
import Form from "../layout/form/Form";
import Header from "../layout/Header";

// Hooks
import useUserContext from "../../hooks/useUserContext";
import style from "./Login.module.css";
import useFormProps from "../../hooks/useFormProps";

const Login = () => {
    const { setUser } = useUserContext();
    const emailProps = useFormProps("email");
    const passwordProps = useFormProps("password");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = emailProps.value;
        const password = passwordProps.value;

        const res = await fetch("http://localhost:3000/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });
        const results = await res.json();
        if (!results.success) {
            alert(results.message);
            console.error(results);
            return;
        }
        const user = results.data[0];
        setUser(user);
        localStorage.setItem("user", user.id);
        navigate("/");
    };

    return (
        <>
            <Header />
            <main className={style.main}>
                <h1>Fazer Login</h1>
                <Form handleSubmit={handleSubmit}>
                    <Input
                        label={"Email:"}
                        type="email"
                        placeholder="exemplo@email.com"
                        autoComplete="email"
                        {...emailProps}
                    />
                    <PasswordInput
                        label={"Senha:"}
                        placeholder="Senha"
                        autoComplete="current-password"
                        {...passwordProps}
                    />
                    <Button type="submit">Enviar</Button>
                </Form>
                <Link to="/register" className={style.link}>
                    Não tenho conta
                </Link>
            </main>
        </>
    );
};

export default Login;
