import { useEffect, useState } from "react";
import fetchPost from "../utilities/fetchPost";

const usePost = (id, userId) => {
    const [post, setPost] = useState({});
    useEffect(() => {
        const getPost = async () => {
            if (id) {
                const results = await fetchPost(id, userId);
                if (!results.success) {
                    alert("Erro ao pegar posts");
                    return;
                }
                setPost(results.data[0]);
            }
        };
        getPost();
    }, []);
    return { post, setPost };
};

export default usePost;