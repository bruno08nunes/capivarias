const fetchPosts = async (id, userId) => {
    const baseURL = "http://localhost:3000";
    const path = "/comments/all/" + id;
    const query = "?user=" + userId;
    const res = await fetch(baseURL + path + query);
    const results = await res.json();
    return results;
};

export default fetchPosts;
