import { useEffect, useState } from "react";
import fetchUserAmazings from "../utilities/fetchUserAmazings.js";

const useUserAmazing = (userId, userLoggedId) => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const getPosts = async () => {
            const results = await fetchUserAmazings(userId, userLoggedId);
            if (!results.success) {
                alert("Erro ao pegar comentários");
                return;
            }
            setPosts(results.data);
        };
        getPosts();
    }, []);
    return { posts, setPosts };
};

export default useUserAmazing;
