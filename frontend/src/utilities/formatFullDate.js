export const formatDate = (date) => {
    return date.toString().padStart(2, "0");
}

const formatFullDate = (date) => {
    date = date instanceof Date ? date : new Date(date);

    const year = date.getFullYear();
    const month = formatDate(date.getMonth() + 1);
    const day = formatDate(date.getDate());
    const fullDate = `${day}/${month}/${year}`;

    return fullDate;
}

export default formatFullDate;