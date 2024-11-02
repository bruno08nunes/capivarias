import { useEffect, useState } from "react";
import fetchUserData from "../utilities/fetchUserData";

const useUser = (userId) => {
    const [user, setUser] = useState({});

    useEffect(() => {
        let ignore = "username" in user;
        const getUserData = async () => {
            const results = await fetchUserData(userId);
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
    }), [];

    return [user, setUser];
};

export default useUser;
