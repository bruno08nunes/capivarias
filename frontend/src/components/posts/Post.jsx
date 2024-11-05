// Components
import IconButton from "../layout/IconButton";
import ProfilePicture from "./ProfilePicture";
import * as Dialog from "@radix-ui/react-dialog";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import AmazingButton from "./AmazingButton";

// Hooks and Utilities
import style from "./Post.module.css";
import { useState } from "react";
import { countTime } from "../../utilities/formatFullDate";
import getUserLoggedIn from "../../utilities/getUserLoggedIn";
import fetchAmazing from "../../utilities/fetchAmazing";

const Post = ({ post }) => {
    const [isFavorited, setIsFavorited] = useState(post.is_amazing);
    const time = countTime(post.created_at);
    const isEdited = post.created_at !== post.updated_at;
    const user = getUserLoggedIn();

    const handleFavorite = async (e) => {
        let method = "POST";
        const data = {
            post: post.id,
            user: user
        };
        if (isFavorited) {
            method = "DELETE"
        }
        const results = await fetchAmazing(data, method);
        if (!results.success) {
            return;
        }
        setIsFavorited(state => !state);
    }

    return (
        <article className={style.post} id={post.id}>
            <div className={style.header}>
                <ProfilePicture src={post.profile_picture} />
                <div className={style.userData}>
                    <span>{post.username}</span>
                    <span>@{post.capy_code}</span>
                </div>
                <div className={style.postData}>
                    <time dateTime="">{time}</time>
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
            <p className={style.message}>{post.content}</p>
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
                <AmazingButton
                    isFavorited={isFavorited}
                    handleFavorite={handleFavorite}
                />
            </div>
        </article>
    );
};

export default Post;
