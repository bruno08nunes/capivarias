const fetchPost = async (id, userId) => {
    const baseURL = "http://localhost:3000";
    const path = "/posts/data/" + id;
    const query = "?user=" + userId;
    const res = await fetch(baseURL + path + query);
    const results = await res.json();
    return results;
};

export default fetchPost;