import { useState } from "react";
import IconButton from "../IconButton";
import Input from "./Input";
import style from "./PasswordInput.module.css";

const PasswordInput = (props) => {
    const [isPasswordType, setIsPasswordType] = useState(true);
    const handleClick = () => {
        setIsPasswordType((state) => !state);
    };

    return (
        <div className={style.div}>
            <Input type={isPasswordType ? "password" : "text"} {...props} />
            <IconButton
                iconName={"visibility"}
                iconSize={32}
                type={"button"}
                className={
                    "smallCircle" + " " + (!isPasswordType ? "active" : "")
                }
                onClick={handleClick}
            />
        </div>
    );
};

export default PasswordInput;
