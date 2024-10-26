import style from "./Sidebar.module.css";
import IconButton from "./IconButton";
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <aside className={style.sidebar}>
            <Link to="/" className={style.link}>
                <img src="logo.png" alt="Capivárias" className={style.logo} />
            </Link>
            <IconButton iconLabel="Home" iconName="home" asChild>
                <Link to="/" />
            </IconButton>
            <IconButton iconLabel="Pesquisar" iconName="search" asChild>
                <Link to="/search" />
            </IconButton>
            <IconButton iconLabel="Configurações" iconName="settings" asChild>
                <Link to="/settings" />
            </IconButton>
            <IconButton
                iconLabel="Notificações"
                iconName="Notifications"
                asChild
            >
                <Link to="/notifications" />
            </IconButton>
            <IconButton iconLabel="Perfil" iconName="account_circle" asChild>
                <Link to="/account" />
            </IconButton>
            <div className={style.sidebarEnd}>
                <IconButton iconLabel="Sair" iconName="logout" />
            </div>
        </aside>
    );
};

export default Sidebar;
