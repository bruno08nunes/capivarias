import style from "./Sidebar.module.css";
import IconLink from "./IconLink";
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <aside className={style.sidebar}>
            <a href="#" className={style.link}>
                <img src="logo.png" alt="Capivárias" className={style.logo} />
            </a>
            <IconLink iconLabel="Home" iconName="home" asChild>
                <Link to="/" />
            </IconLink>
            <IconLink iconLabel="Pesquisar" iconName="search" asChild>
                <Link to="/search" />
            </IconLink>
            <IconLink iconLabel="Configurações" iconName="settings" asChild>
                <Link to="/settings" />
            </IconLink>
            <IconLink iconLabel="Notificações" iconName="Notifications" asChild>
                <Link to="/notifications" />
            </IconLink>
            <IconLink iconLabel="Perfil" iconName="account_circle" asChild>
                <Link to="/account" />
            </IconLink>
            <div className={style.sidebarEnd}>
                <IconLink iconLabel="Sair" iconName="logout" />
            </div>
        </aside>
    );
};

export default Sidebar;
