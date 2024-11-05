import IconButton from "../layout/IconButton";

const AmazingButton = ({isFavorited, handleFavorite}) => {
    return (
        <IconButton
            iconName={"favorite"}
            iconSize={40}
            className={"circle" + " " + (isFavorited && "favorited")}
            aria-label="Curtir"
            onClick={handleFavorite}
        />
    );
};

export default AmazingButton;
