import style from "./Home.module.css";
import Post from "../posts/Post";

const Home = () => {
    return (
        <main className={style.main}>
            <Post />
        </main>
    );
};

export default Home;
