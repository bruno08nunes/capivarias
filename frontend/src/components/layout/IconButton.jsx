import style from "./IconButton.module.css";
import { Slot, Slottable } from "@radix-ui/react-slot";

const IconButton = ({
    iconName,
    iconLabel,
    iconSize,
    asChild,
    children,
    className,
    ...props
}) => {
    const Component = asChild ? Slot : "button";

    return (
        <Component className={style.button + " " + className} {...props}>
            <span
                style={{ fontSize: iconSize ?? 40 }}
                className="material-symbols-outlined"
            >
                {iconName}
            </span>
            {iconLabel && <span>{iconLabel}</span>}
            <Slottable>{children}</Slottable>
        </Component>
    );
};

export default IconButton;
