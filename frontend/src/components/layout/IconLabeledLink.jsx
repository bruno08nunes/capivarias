import style from "./IconLabeledLink.module.css";

const IconLabeledLink = ({ icon: {size: iconSize, name: iconName, label: iconLabel} }) => {
    return (
        <a href="#" className={style.link}>
            <span style={{fontSize: iconSize ?? 40}} className="material-symbols-outlined">{iconName}</span>
            {iconLabel && <span>{iconLabel}</span>}
        </a>
    );
};

export default IconLabeledLink;