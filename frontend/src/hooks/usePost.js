import { useEffect, useState } from "react";
import fetchPost from "../utilities/fetchPost";

const usePost = (selfId, userId) => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const getPost = async () => {
            const results = await fetchPost(selfId, userId);
            if (!results.success) {
                alert("Erro ao pegar posts");
                return;
            }
            setPosts(results.data);
        };
        getPost();
    }, []);
    return { posts, setPosts };
};

export default usePost;