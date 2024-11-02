const fetchUserData = async (userId) => {
    const res = await fetch(
        "http://localhost:3000/users/data/" + userId
    );
    const results = await res.json();
    return results;
}

export default fetchUserData;