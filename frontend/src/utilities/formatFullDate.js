export const formatDate = (date) => {
    return date.toString().padStart(2, "0");
};

export const countTime = (date) => {
    date = date instanceof Date ? date : new Date(date);

    const now = new Date();
    const seconds = Math.floor((now - date) / 1000);

    const intervals = [
        { label: "ano", seconds: 31536000 },
        { label: "mês", seconds: 2592000 },
        { label: "dia", seconds: 86400 },
        { label: "h", seconds: 3600 },
        { label: "min", seconds: 60 },
        { label: "s", seconds: 1 },
    ];

    for (const interval of intervals) {
        const count = Math.floor(seconds / interval.seconds);
        if (count >= 1) {
            const plural = count > 1 ? "s" : "";
            if (["h", "min", "s"].includes(interval.label)) {
                return `${count}${interval.label}`;
            }
            if (interval.label === "mês") {
                return `Há ${count} meses`;
            }
            return `${count} ${interval.label}${plural}`;
        }
    }

    return "agora";
};

const formatFullDate = (date) => {
    date = date instanceof Date ? date : new Date(date);

    const year = date.getFullYear();
    const month = formatDate(date.getMonth() + 1);
    const day = formatDate(date.getDate());
    const fullDate = `${day}/${month}/${year}`;

    return fullDate;
};

export default formatFullDate;
