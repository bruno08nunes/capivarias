const fetchPosts = async (selfId, userId) => {
    const baseURL = "http://localhost:3000";
    let path = "/posts/all?user=" + selfId;
    if (userId) {
        path = "/users/posts/" + userId + "?user=" + selfId;
    }
    const res = await fetch(baseURL + path);
    const results = await res.json();
    return results;
};

export default fetchPosts;
