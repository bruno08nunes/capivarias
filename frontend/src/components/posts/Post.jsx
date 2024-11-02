import style from "./Post.module.css";
import IconButton from "../layout/IconButton";
import ProfilePicture from "./ProfilePicture";
import * as Dialog from "@radix-ui/react-dialog";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useState } from "react";

const Post = ({ id }) => {
    const [isFavorited, setIsFavorited] = useState(false);

    const handleFavorite = (e) => {
        setIsFavorited(state => !state);
    }

    return (
        <article className={style.post} id={id}>
            <div className={style.header}>
                <ProfilePicture src={"/logo.png"} />
                <div className={style.userData}>
                    <span>Capivárias</span>
                    <span>@capivarias</span>
                </div>
                <div className={style.postData}>
                    <time dateTime="">10h</time>
                    <DropdownMenu.Root>
                        <IconButton
                            iconName="more_horiz"
                            iconSize={35}
                            className={"smallCircle"}
                            asChild
                        >
                            <DropdownMenu.Trigger></DropdownMenu.Trigger>
                        </IconButton>
                        <DropdownMenu.Content className={style.dropdownContent}>
                            <DropdownMenu.Item className={style.dropdownItems}>
                                <IconButton iconName="block" iconSize={25} iconLabel="Bloquear Usuário" />
                            </DropdownMenu.Item>
                            <DropdownMenu.Item className={style.dropdownItems}>
                                <IconButton iconName="flag" iconSize={25} iconLabel="Denunciar" />
                            </DropdownMenu.Item>
                        </DropdownMenu.Content>
                    </DropdownMenu.Root>
                </div>
            </div>
            <p className={style.message}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Facilis voluptatibus ipsum hic neque, quibusdam odio officia
                quia omnis cupiditate alias libero velit. Reprehenderit, quae
                voluptatibus officiis tenetur possimus eveniet non!
            </p>
            <div className={style.buttons}>
                <IconButton
                    iconName="comment"
                    iconSize={40}
                    className={"circle"}
                    aria-label="Comentar"
                    asChild
                >
                    <Dialog.Trigger></Dialog.Trigger>
                </IconButton>
                <IconButton
                    iconName={"favorite"}
                    iconSize={40}
                    className={"circle" + " " + (isFavorited && "favorited")}
                    aria-label="Curtir"
                    onClick={handleFavorite}
                />
            </div>
        </article>
    );
};

export default Post;
