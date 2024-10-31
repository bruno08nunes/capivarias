import style from "./Form.module.css";

const Form = ({children, handleSubmit}) => {
    return (
        <form className={style.form} onSubmit={handleSubmit}>
            {children}
        </form>
    );
};

export default Form;
