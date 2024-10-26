import style from "./Button.module.css";

const Button = ({ children, className, ...props }) => {
    return (
        <button className={style.button + " " + className} {...props}>
            {children}
        </button>
    );
};

export default Button;
