import style from "./CommentModal.module.css";
import * as Dialog from "@radix-ui/react-dialog";
import NewPost from "../posts/NewPost";
import ProfilePicture from "../posts/ProfilePicture";
import { countTime } from "../../utilities/formatFullDate";

const CommentModal = ({post}) => {
    return (
        <Dialog.Portal>
            <Dialog.Overlay className={style.overlay} />
            <Dialog.Content className={style.modal}>
                <Dialog.Title style={{ display: "none" }}>
                    Responda a publicação de Usuário
                </Dialog.Title>
                <Dialog.Description style={{display: "none"}}>Responder a publicação de usuário</Dialog.Description>
                <div className={style.postData}>
                    <ProfilePicture src={post.profile_picture} alt={"user"} />
                    <div className={style.userData}>
                        <span>{post.username}</span>
                        <span>@{post.capy_code}</span>
                    </div>
                    <time dateTime="">{countTime(post.created_at)}</time>
                </div>
                <div className={style.post}>
                    {post.content}
                </div>
                <form className={style.form}>
                    <NewPost placeholder="Poste sua resposta" />
                </form>
            </Dialog.Content>
        </Dialog.Portal>
    );
};

export default CommentModal;
