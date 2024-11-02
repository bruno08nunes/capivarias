import style from "./Header.module.css";

const Header = () => {
    return (
        <header className={style.header}>
            <img src="/logo.png" alt="Logo da Capivárias" />
        </header>
    );
};

export default Header;
