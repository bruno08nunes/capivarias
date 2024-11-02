import { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import fetchUserData from "../utilities/fetchUserData";

const useUserContext = () => {
    const { user, setUser } = useContext(UserContext);

    useEffect(() => {
        let ignore = false;
        const getUserData = async () => {
            if (user.username === undefined) {
                const results = await fetchUserData(user.id);
                if (ignore) {
                    return;
                }
                if (!results.success) {
                    alert("Erro ao pegar dados de usuário");
                    return;
                }
                if (results.data.length > 0) {
                    const newUser = {
                        id: user.id,
                        ...results.data[0],
                    };
                    setUser(newUser);
                }
            }
        };
        if (user.id !== null) {
            getUserData();
        }
        return () => {
            ignore = true;
        };
    }, [user]);

    return { user, setUser };
};

export default useUserContext;
