import { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";

const useUser = () => {
    const { user, setUser } = useContext(UserContext);

    useEffect(() => {
        const getUserData = async () => {
            if (user.name === undefined) {
                const res = await fetch("http://localhost:3000/users/data/" + user.id);
                const results = await res.json();
                if (!results.success) {
                    alert("Erro");
                    return;
                }
                if (results.data > 0) {
                    setUser({
                        id: user.id,
                        ...results.data
                    });
                }
            }
        };
        if (user.id !== null) {
            getUserData();
        }
    }, [user]);

    return { user, setUser };
};

export default useUser;
