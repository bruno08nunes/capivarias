import style from "./NewPost.module.css";
import Button from "../layout/form/Button";
import IconButton from "../layout/IconButton";
import ProfilePicture from "./ProfilePicture";
import { useState, useRef, useEffect } from "react";
import Recording from "./Recording";

const NewPost = ({ placeholder }) => {
    // States
    const [text, setText] = useState("");
    const [isRecording, setIsRecording] = useState(false);
    const [timeRec, setTimeRec] = useState(0);

    // Refs
    const intervalRef = useRef(null);
    const textareaRef = useRef(null);
    const fileInputRef = useRef(null);

    // Effects
    useEffect(() => {
        // Adjust textarea height while digitizing
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = "auto";
            textarea.style.height = `${textarea.scrollHeight}px`;
        }
    }, [text]);

    useEffect(() => {
        // Init and stop the recording
        if (isRecording) {
            intervalRef.current = setInterval(() => {
                setTimeRec((state) => state + 1);
            }, 1000);
        }
        return () => {
            setTimeRec(0);
            clearInterval(intervalRef.current);
        };
    }, [isRecording]);

    // Events
    const handleChange = (e) => {
        if (e.target.length < 220) {
            setText(e.target.value);
            return;
        }
        setText(e.target.value.slice(0, 220));
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
        }
    };

    const handleStartRecord = (e) => {
        setIsRecording((state) => !state);
    };

    const handleFileSelect = (e) => {
        fileInputRef.current?.click();
    };

    // Variables
    const remainingText = text.length > 0 && 220 - text.length;

    return (
        <>
            <div className={style.divInput}>
                <ProfilePicture
                    src="/logo.png"
                    alt="Foto de Perfil do usuário"
                />
                {isRecording ? (
                    <Recording timeRec={timeRec} />
                ) : (
                    <div className={style.divTextarea}>
                        <textarea
                            id="post"
                            name="post"
                            placeholder={placeholder}
                            rows={1}
                            onInput={handleChange}
                            onKeyDown={handleKeyDown}
                            value={text}
                            ref={textareaRef}
                        ></textarea>
                        <span>{remainingText}</span>
                    </div>
                )}
            </div>
            <div className={style.configs}>
                <div className={style.buttons}>
                    <IconButton
                        iconName={"mic"}
                        className={
                            "smallCircle" + (isRecording ? " active" : "")
                        }
                        type="button"
                        onClick={handleStartRecord}
                        aria-label={"Iniciar gravação de voz"}
                    />
                    <IconButton
                        iconName={"photo"}
                        className={"smallCircle"}
                        type="button"
                        onClick={handleFileSelect}
                        aria-label={"Escolher arquivo"}
                    />
                    <input
                        type="file"
                        id="files"
                        name="files"
                        multiple
                        hidden
                        accept="image/*, video/*, audio/*, .pdf"
                        ref={fileInputRef}
                        aria-hidden={true}
                    />
                </div>
                <Button>Postar</Button>
            </div>
        </>
    );
};

export default NewPost;
