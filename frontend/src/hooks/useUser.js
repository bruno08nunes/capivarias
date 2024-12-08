import { useEffect, useState } from "react";
import fetchUserData from "../utilities/fetchUserData";

const useUser = (userId) => {
    const [user, setUser] = useState({});
    const [userIdState, setUserIdState] = useState(userId);
    if (userId !== userIdState) {
        setUserIdState(userId);
    }

    useEffect(() => {
        let ignore;
        const getUserData = async () => {
            const results = await fetchUserData(userIdState);
            if (!results.success) {
                alert("Erro ao encontrar usuário");
            }

            if (results.data.length === 0) {
                alert("Usuário não encontrado");
            }

            setUser({
                ...results.data[0]
            });
        };

        if (!ignore) {
            getUserData();
        }

        return () => {
            ignore = true;
        }
    }), [userIdState];

    return [user, setUser];
};

export default useUser;
