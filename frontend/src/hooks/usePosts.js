import { useEffect, useState } from "react";
import fetchPosts from "../utilities/fetchPosts";

const usePosts = (selfId, userId) => {
    const [posts, setPosts] = useState([]);
    const [user, setUser] = useState(userId);
    if (user !== userId) {
        setUser(userId)
    }
    useEffect(() => {
        const getPost = async () => {
            const results = await fetchPosts(selfId, user);
            if (!results.success) {
                alert("Erro ao pegar posts");
                return;
            }
            setPosts(results.data);
        };
        getPost();
    }, [user]);
    return { posts, setPosts };
};

export default usePosts;
