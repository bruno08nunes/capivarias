import style from "./CommentModal.module.css";
import * as Dialog from "@radix-ui/react-dialog";
import NewPost from "../posts/NewPost";
import ProfilePicture from "../posts/ProfilePicture";
import { countTime } from "../../utilities/formatFullDate";
import useUserContext from "../../hooks/useUserContext";

const CommentModal = ({ post }) => {
    const { user } = useUserContext();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const comment = e.target.elements.post.value;
        const data = {
            post_id: post.id,
            user_id: user.id,
            content: comment,
        };

        const res = await fetch("http://localhost:3000/comments/post", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        const results = await res.json();
        if (!results.success) {
            alert("Erro ao postar");
            return;
        }
    };

    return (
        <Dialog.Portal>
            <Dialog.Overlay className={style.overlay} />
            <Dialog.Content className={style.modal}>
                <Dialog.Title style={{ display: "none" }}>
                    Responda a publicação de Usuário
                </Dialog.Title>
                <Dialog.Description style={{ display: "none" }}>
                    Responder a publicação de usuário
                </Dialog.Description>
                <div className={style.postData}>
                    <ProfilePicture src={post.profile_picture} alt={"user"} />
                    <div className={style.userData}>
                        <span>{post.username}</span>
                        <span>@{post.capy_code}</span>
                    </div>
                    <time dateTime="">{countTime(post.created_at)}</time>
                </div>
                <div className={style.post}>{post.content}</div>
                <form className={style.form} onSubmit={handleSubmit}>
                    <NewPost placeholder="Poste sua resposta" />
                </form>
            </Dialog.Content>
        </Dialog.Portal>
    );
};

export default CommentModal;
