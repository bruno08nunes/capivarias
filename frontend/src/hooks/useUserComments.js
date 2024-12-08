import { useEffect, useState } from "react";
import fetchUserComments from "../utilities/fetchUserComments.js";

const useComments = (userId, userLoggedId) => {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        const getComments = async () => {
            const results = await fetchUserComments(userId, userLoggedId);
            if (!results.success) {
                alert("Erro ao pegar comentários");
                return;
            }
            setComments(results.data);
        };
        getComments();
    }, []);
    return { comments, setComments };
};

export default useComments;
