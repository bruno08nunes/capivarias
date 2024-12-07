import { useEffect, useState } from "react";
import fetchComments from "../utilities/fetchComments";

const useComments = (id, userId) => {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        const getComments = async () => {
            const results = await fetchComments(id, userId);
            if (!results.success) {
                alert("Erro ao pegar posts");
                return;
            }
            setComments(results.data);
        };
        getComments();
    }, []);
    return { comments, setComments };
};

export default useComments;
