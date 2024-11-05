const fetchAmazing = async (data, method) => {
    const res = await fetch("http://localhost:3000/post/amazing", {
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