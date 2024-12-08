const fetchUserAmazings = async (userId, userLoggedId) => {
    const baseURL = "http://localhost:3000";
    const path = "/user/amazings/" + userId;
    const query = "?user=" + userLoggedId;
    const res = await fetch(baseURL + path + query);
    const results = await res.json();
    return results;
};

export default fetchUserAmazings;
