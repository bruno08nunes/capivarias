import style from "./IconLabeledLink.module.css";

const IconLabeledLink = ({ icon }) => {
    return (
        <a href="#" className={style.link}>
            <span style={{fontSize: icon?.size ?? 40}} className="material-symbols-outlined">{icon?.name}</span>
            <span>{icon.label}</span>
        </a>
    );
};

export default IconLabeledLink;