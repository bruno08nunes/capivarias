import { useEffect, useState } from "react";
import fetchPosts from "../utilities/fetchPosts";

const usePosts = (selfId, userId) => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const getPost = async () => {
            const results = await fetchPosts(selfId, userId);
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

export default usePosts;
