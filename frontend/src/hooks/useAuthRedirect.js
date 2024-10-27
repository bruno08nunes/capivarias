import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useAuthRedirect = (user) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (user.id === null || user.id === undefined) {
            navigate("/login", {replace: true});
        }
    }, [navigate, user])
}

export default useAuthRedirect;