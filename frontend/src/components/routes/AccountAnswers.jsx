// Components
import * as Dialog from "@radix-ui/react-dialog";
import Post from "../posts/Post";
import CommentModal from "../posts/CommentModal";
import { useParams } from "react-router-dom";

// Hooks
import style from "./Account.module.css";
import UserHeader from "../layout/UserHeader";
import useUserComments from "../../hooks/useUserComments.js";
import getUserLoggedIn from "../../utilities/getUserLoggedIn.js";

const AccountAnswers = () => {
    const { id: userId } = useParams();
    const userLoggedId = getUserLoggedIn();
    const { comments } = useUserComments(userId, userLoggedId);

    return (
        <Dialog.Root>
            <main className={style.main}>
                <UserHeader userId={userId} />
                {comments.map(comment => (
                    <Post post={comment} key={comment.id} type="comment" />
                ))}
            </main>
            <CommentModal post={{}} />
        </Dialog.Root>
    );
};

export default AccountAnswers;
