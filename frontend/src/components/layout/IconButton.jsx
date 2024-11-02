import Icon from "./Icon";
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
            <Icon iconName={iconName} iconSize={iconSize} />
            {iconLabel && <span>{iconLabel}</span>}
            <Slottable>{children}</Slottable>
        </Component>
    );
};

export default IconButton;
