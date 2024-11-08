import style from "./Home.module.css";
import Post from "../posts/Post";
import NewPostForm from "../posts/NewPostForm";
import * as Dialog from "@radix-ui/react-dialog";
import CommentModal from "../posts/CommentModal";
import useAuthRedirect from "../../hooks/useAuthRedirect";
import useUserContext from "../../hooks/useUserContext";
import usePost from "../../hooks/usePost";
import { useEffect, useState } from "react";

const Home = () => {
    const { user } = useUserContext();
    useAuthRedirect(user);

    const { posts } = usePost(user.id);
    const [currentPost, setCurrentPost] = useState({});

    return (
        <Dialog.Root>
            <main className={style.main}>
                <NewPostForm user={user.id} />
                {posts.map((post) => (
                    <Post post={post} key={post.id} setCurrentPost={setCurrentPost} />
                ))}
            </main>
            <CommentModal post={currentPost} />
        </Dialog.Root>
    );
};

export default Home;
