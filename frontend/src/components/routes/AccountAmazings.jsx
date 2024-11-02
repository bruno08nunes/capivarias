// Components
import * as Dialog from "@radix-ui/react-dialog";
import Post from "../posts/Post";
import CommentModal from "../posts/CommentModal";
import { useParams } from "react-router-dom";

// Hooks
import style from "./Account.module.css";
import UserHeader from "../layout/UserHeader";

const AccountAmazings = () => {
    const { id: userId } = useParams();

    return (
        <Dialog.Root>
            <main className={style.main}>
                <UserHeader userId={userId} />
            </main>
            <CommentModal />
        </Dialog.Root>
    );
};

export default AccountAmazings;