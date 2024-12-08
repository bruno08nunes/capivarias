// Components
import * as Dialog from "@radix-ui/react-dialog";
import Post from "../posts/Post";
import CommentModal from "../posts/CommentModal";
import { useParams } from "react-router-dom";

// Hooks
import style from "./Account.module.css";
import UserHeader from "../layout/UserHeader";
import useUserAmazing from "../../hooks/useUserAmazings";
import { useState } from "react";
import getUserLoggedIn from "../../utilities/getUserLoggedIn";

const AccountAmazings = () => {
    const { id: userId } = useParams();
    const userLoggedId = getUserLoggedIn();
    const { posts } = useUserAmazing(userId, userLoggedId);
    const [currentPost, setCurrentPost] = useState({});

    return (
        <Dialog.Root>
            <main className={style.main}>
                <UserHeader userId={userId} />
                {posts.map(post => (
                    <Post post={post} key={post.id} type={post.type} setCurrentPost={setCurrentPost} />
                ))}
            </main>
            <CommentModal post={currentPost} />
        </Dialog.Root>
    );
};

export default AccountAmazings;
