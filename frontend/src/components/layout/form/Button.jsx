import style from "./Button.module.css";
import { Slot, Slottable } from "@radix-ui/react-slot";

const Button = ({ children, className, asChild, ...props }) => {
    const Component = asChild ? Slot : "button";

    return (
        <Component className={style.button + " " + className} {...props}>
            <Slottable>{children}</Slottable>
        </Component>
    );
};

export default Button;
