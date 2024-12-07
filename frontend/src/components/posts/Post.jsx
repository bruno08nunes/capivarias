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
import { useNavigate } from "react-router-dom";

const Post = ({ post, setCurrentPost, type = "post", ...props }) => {
    const [isFavorited, setIsFavorited] = useState(post.is_amazing);
    const time = countTime(post.created_at);
    const isEdited = post.created_at !== post.updated_at;
    const user = getUserLoggedIn();
    const navigate = useNavigate();

    const handleFavorite = async (e) => {
        e.stopPropagation();
        const method = isFavorited ? "DELETE" : "POST";
        const data = {
            post: post.id,
            user: user,
        };
        const results = await fetchAmazing(data, method, type);
        if (!results.success) {
            return;
        }
        setIsFavorited((state) => !state);
    };

    const handleNavigate = (e) => {
        e.stopPropagation();
        return navigate("/post/" + post.id);
    };

    return (
        <article
            className={style.post}
            id={post.id}
            onClick={handleNavigate}
            {...props}
        >
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
                                <IconButton
                                    iconName="block"
                                    iconSize={25}
                                    iconLabel="Bloquear Usuário"
                                />
                            </DropdownMenu.Item>
                            <DropdownMenu.Item className={style.dropdownItems}>
                                <IconButton
                                    iconName="flag"
                                    iconSize={25}
                                    iconLabel="Denunciar"
                                />
                            </DropdownMenu.Item>
                        </DropdownMenu.Content>
                    </DropdownMenu.Root>
                </div>
            </div>
            <p className={style.message}>{post.content}</p>
            <div className={style.buttons}>
                {type !== "comment" && (
                    <IconButton
                        iconName="comment"
                        iconSize={40}
                        className={"circle"}
                        aria-label="Comentar"
                        asChild
                    >
                        <Dialog.Trigger
                            onClick={(e) => {
                                e.stopPropagation();
                                setCurrentPost(post);
                            }}
                        ></Dialog.Trigger>
                    </IconButton>
                )}
                <AmazingButton
                    isFavorited={isFavorited}
                    handleFavorite={handleFavorite}
                />
            </div>
        </article>
    );
};

export default Post;
