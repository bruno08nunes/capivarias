import style from "./Sidebar.module.css";
import IconLabeledLink from "../layout/IconLabeledLink";

const Sidebar = () => {
    return (
        <aside className={style.sidebar}>
            <a href="#" className={style.link}>
                <img src="logo.png" alt="Capivárias" className={style.logo} />
            </a>
            <IconLabeledLink icon={{ label: "Home", name: "home" }} />
            <IconLabeledLink icon={{ label: "Pesquisar", name: "search" }} />
            <IconLabeledLink
                icon={{ label: "Configurações", name: "settings" }}
            />
            <IconLabeledLink
                icon={{ label: "Notificações", name: "notifications" }}
            />
            <IconLabeledLink
                icon={{ label: "Perfil", name: "account_circle" }}
            />
            <div className={style.sidebarEnd}>
                <IconLabeledLink
                    icon={{ label: "Sair", name: "logout" }}
                />
            </div>
        </aside>
    );
};

export default Sidebar;
