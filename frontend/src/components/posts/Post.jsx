import style from "./Post.module.css";
import IconLink from "../layout/IconLink";

const Post = () => {
    return (
        <article className={style.post}>
            <div className={style.header}>
                <img src="logo.png" alt="" className={style.profile} />
                <div className={style.userData}>
                    <span>Capivárias</span>
                    <span>@capivarias</span>
                </div>
                <div className={style.postData}>
                    <time dateTime="">10h</time>
                    <IconLink iconName="more_horiz" iconSize={35} className={"smallCircle"} />
                </div>
            </div>
            <p className={style.message}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Facilis voluptatibus ipsum hic neque, quibusdam odio officia
                quia omnis cupiditate alias libero velit. Reprehenderit, quae
                voluptatibus officiis tenetur possimus eveniet non!
            </p>
            <div className={style.buttons}>
                <IconLink iconName="comment" iconSize={40}  className={"circle"} />
                <IconLink iconName="favorite" iconSize={40} className={"circle"} />
            </div>
        </article>
    );
};

export default Post;
