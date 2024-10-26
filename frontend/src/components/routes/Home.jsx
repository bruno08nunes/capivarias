import style from "./Home.module.css";
import Post from "../posts/Post";
import NewPostForm from "../posts/NewPostForm";
import * as Dialog from "@radix-ui/react-dialog";
import CommentModal from "../posts/CommentModal";

const Home = () => {
    return (
        <Dialog.Root>
            <main className={style.main}>
                <NewPostForm />
                <Post id={5} />
            </main>
            <CommentModal />
        </Dialog.Root>
    );
};

export default Home;
