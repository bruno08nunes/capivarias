import style from "./ProfilePicture.module.css";

const ProfilePicture = ({ src, alt, className }) => {
    return <img src={src ?? "/logo.png"} alt={alt} className={style.profilePicture + " " + className} />;
};

export default ProfilePicture;
