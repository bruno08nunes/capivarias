import style from "./NewPostForm.module.css";
import NewPost from "./NewPost";

const NewPostForm = () => {
    return (
        <form className={style.form}>
            <NewPost placeholder="O que você está pensando?" />
        </form>
    );
};

export default NewPostForm;
