const fetchAmazing = async (data, method, type) => {
    const pathURL = type === "comment" ? "/post/comments/amazing" : "/post/amazing"
    const res = await fetch("http://localhost:3000" + pathURL, {
        method,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    const results = await res.json();
    return results;
}

export default fetchAmazing;