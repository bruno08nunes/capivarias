// Componentes

import { Link, useNavigate } from "react-router-dom";
import Header from "../layout/Header";
import Input from "../layout/form/Input";
import Form from "../layout/form/Form";
import PasswordInput from "../layout/form/PasswordInput";
import Button from "../layout/form/Button";

// Hooks
import style from "./Register.module.css";
import useFormProps from "../../hooks/useFormProps";
import useUserContext from "../../hooks/useUserContext";

const Register = () => {
    const usernameProps = useFormProps("username");
    const capycodeProps = useFormProps("capycode");
    const emailProps = useFormProps("email");
    const passwordProps = useFormProps("password");
    const dateProps = useFormProps("date");

    const { setUser } = useUserContext();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            username: usernameProps.value,
            capyCode: capycodeProps.value,
            email: emailProps.value,
            password: passwordProps.value,
            birthday: dateProps.value,
        };

        const res = await fetch("http://localhost:3000/users/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const results = await res.json();

        if (!results.success) {
            alert(results.message);
            console.error(results);
            return;
        }
        const user = {
            id: results.data.insertId,
            ...data,
        };
        setUser(user);
        localStorage.setItem("user", user);
        navigate("/home");
    };

    const onClick = () => {
        navigate("/");
    };

    return (
        <>
            <Header />
            <main className={style.main}>
                <h1 onClick={onClick}>Fazer Cadastro</h1>
                <Form handleSubmit={handleSubmit}>
                    <Input
                        type={"text"}
                        label={"Nome de usuário:"}
                        placeholder={"Nome de usuário"}
                        autoComplete={"username"}
                        {...usernameProps}
                    />
                    <Input
                        type={"text"}
                        label={"Capycode:"}
                        placeholder={"@capycode"}
                        {...capycodeProps}
                    />
                    <Input
                        type={"email"}
                        label={"Email:"}
                        placeholder={"email@exemplo.com"}
                        autoComplete={"email"}
                        {...emailProps}
                    />
                    <PasswordInput
                        label={"Senha:"}
                        autoComplete={"new-password"}
                        placeholder={"Senha"}
                        {...passwordProps}
                    />
                    <Input
                        type={"date"}
                        label={"Data de Nascimento:"}
                        autoComplete={"birthday"}
                        {...dateProps}
                    />
                    <Button>Cadastrar-se</Button>
                </Form>
                <Link to="/login" className={style.link}>
                    Já possuo uma conta
                </Link>
            </main>
        </>
    );
};

export default Register;
