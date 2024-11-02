import style from "./NewPostForm.module.css";
import NewPost from "./NewPost";

const NewPostForm = ({user: userId}) => {
    const handleSubmit = async (e) => {
        e.preventDefault();

        const post = e.target.elements.post.value;
        const files = e.target.elements.files.files;
        const data = {
            user_id: userId,
            content: post,
            is_private: false
        };

        const res = await fetch("http://localhost:3000/posts/post", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        const results = await res.json();
        if (!results.success) {
            alert("Erro ao postar");
            return;
        }
    };

    return (
        <form className={style.form} onSubmit={handleSubmit}>
            <NewPost placeholder="O que você está pensando?" />
        </form>
    );
};

export default NewPostForm;
