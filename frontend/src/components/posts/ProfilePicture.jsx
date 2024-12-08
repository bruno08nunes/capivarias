import style from "./ProfilePicture.module.css";

const ProfilePicture = ({ src, alt, className, ...props }) => {
    return <img src={src ?? "/logo.png"} alt={alt} className={style.profilePicture + " " + className} {...props} />;
};

export default ProfilePicture;
