import style from "./CommentModal.module.css";
import * as Dialog from "@radix-ui/react-dialog";
import NewPost from "../posts/NewPost";
import ProfilePicture from "../posts/ProfilePicture";

const CommentModal = () => {
    return (
        <Dialog.Portal>
            <Dialog.Overlay className={style.overlay} />
            <Dialog.Content className={style.modal} aria-describedby={undefined}>
                <Dialog.Title style={{ display: "none" }}>
                    Responda a publicação de Usuário
                </Dialog.Title>
                <div className={style.postData}>
                    <ProfilePicture src={"/logo.png"} alt={"user"} />
                    <div className={style.userData}>
                        <span>Capivárias</span>
                        <span>@capivarias</span>
                    </div>
                    <time dateTime="">10h</time>
                </div>
                <div className={style.post}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Facilis voluptatibus ipsum hic neque, quibusdam odio officia
                    quia omnis cupiditate alias libero velit. Reprehenderit,
                    quae voluptatibus officiis tenetur possimus eveniet non!
                </div>
                <form className={style.form}>
                    <NewPost placeholder="Poste sua resposta" />
                </form>
            </Dialog.Content>
        </Dialog.Portal>
    );
};

export default CommentModal;
