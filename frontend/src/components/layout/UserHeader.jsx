// Components
import ProfilePicture from "../posts/ProfilePicture";
import Button from "./form/Button";
import { Link, NavLink } from "react-router-dom";
import Icon from "./Icon";

// Hooks
import style from "./UserHeader.module.css";
import formatFullDate from "../../utilities/formatFullDate";
import useUser from "../../hooks/useUser";
import useUserContext from "../../hooks/useUserContext";

// Functions
const checkIsActive = ({ isActive, isPending }) =>
    isActive ? style.active : isPending ? style.pending : "";

const UserHeader = ({userId}) => {
    const [user] = useUser(userId);
    const birth = formatFullDate(user.birthday);
    const { user: userLogged } = useUserContext();
    const isUserAccount = [userLogged.capy_code, userLogged.id].includes(userId);

    return (
        <section className={style.user}>
            <div className={style.images}>
                <img src="/capivarias.jpeg" alt="" className={style.banner} />
                <ProfilePicture
                    src="/logo.png"
                    alt="Teste"
                    className={`${style.profilePicture} large`}
                />
                <Button className={style.editButton} asChild>
                    <Link to={`/account/edit/${user.id}`}>{isUserAccount ? "Editar Perfil" : "Seguir"}</Link>
                </Button>
            </div>
            <div className={style.userInfo}>
                <div>
                    <div className={style.usernames}>
                        <span className={style.username}>{user.username}</span>
                        <span className={style.capyCode}>
                            @{user.capy_code}
                        </span>
                    </div>
                    <span className={style.birthday}>
                        <Icon iconName={"cake"} />
                        {birth}
                    </span>
                </div>
                <div>
                    <span className={style.followers}>
                        {user.following} Seguindo
                    </span>
                    <span className={style.followers}>
                        {user.followers} Seguidores
                    </span>
                </div>
                <nav className={style.nav}>
                    <NavLink
                        className={checkIsActive}
                        to={"/account/" + userId}
                    >
                        Postagens
                    </NavLink>
                    <NavLink
                        className={checkIsActive}
                        to={"/account/answers/" + userId}
                    >
                        Respostas
                    </NavLink>
                    <NavLink
                        className={checkIsActive}
                        to={"/account/amazings/" + userId}
                    >
                        Curtidas
                    </NavLink>
                </nav>
            </div>
        </section>
    );
};

export default UserHeader;
