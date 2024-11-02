const Icon = ({ iconName, iconSize }) => {
    return (
        <span
            style={{ fontSize: iconSize ?? 40 }}
            className="material-symbols-outlined"
        >
            {iconName}
        </span>
    );
};

export default Icon;
