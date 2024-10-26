import style from "./Recording.module.css";

const Recording = ({timeRec}) => {
    return (
        <div className={style.recording}>
            <span className={style.rec}></span>
            <span>Gravando!</span>
            <span>{timeRec}</span>
        </div>
    );
};

export default Recording;
