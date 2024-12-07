// Components
import * as Dialog from "@radix-ui/react-dialog";
import style from "./PostPage.module.css";
import CommentModal from "../posts/CommentModal";
import { useParams } from "react-router-dom";
import usePost from "../../hooks/usePost";
import Post from "../posts/Post";
import getUserLoggedIn from "../../utilities/getUserLoggedIn";
import Loading from "../layout/Loading";
import useComments from "../../hooks/useComments";
import { useState } from "react";

const PostPage = () => {
    const { id: postId } = useParams();
    const userId = getUserLoggedIn();
    const { post } = usePost(postId, userId);
    const { comments } = useComments(postId, userId);
    const [currentPost, setCurrentPost] = useState({});

    return (
        <Dialog.Root>
            <main className={style.main}>
                {post.id ? <Post post={post} onClick={() => {}} setCurrentPost={setCurrentPost} /> : <Loading />}
                <section className={style.comments}>
                    <h2 className={style.title}>Comentários</h2>
                    {comments.map(comment => (
                        <Post post={comment} key={comment.id} type="comment" />
                    ))}
                </section>
            </main>
            <CommentModal post={currentPost} />
        </Dialog.Root>
    );
};

export default PostPage;
