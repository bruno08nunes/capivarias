const fetchUserComments = async (userId, userLoggedId) => {
    const baseURL = "http://localhost:3000";
    const path = "/comments/user/" + userId;
    const query = "?user=" + userLoggedId;
    const res = await fetch(baseURL + path + query);
    const results = await res.json();
    return results;
};

export default fetchUserComments;
