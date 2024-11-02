// Components
import * as Dialog from "@radix-ui/react-dialog";
import Post from "../posts/Post";
import CommentModal from "../posts/CommentModal";
import { useParams } from "react-router-dom";

// Hooks
import style from "./Account.module.css";
import UserHeader from "../layout/UserHeader";
import useUserContext from "../../hooks/useUserContext";
import usePost from "../../hooks/usePost";

const Account = () => {
    const { id: userId } = useParams();
    const { user: userLogged } = useUserContext();
    const { posts } = usePost(userLogged.id, userId);

    return (
        <Dialog.Root>
            <main className={style.main}>
                <UserHeader userId={userId} />
                {
                    posts.map(post => (
                        <Post post={post} key={post.id} />
                    ))
                }
            </main>
            <CommentModal />
        </Dialog.Root>
    );
};

export default Account;
