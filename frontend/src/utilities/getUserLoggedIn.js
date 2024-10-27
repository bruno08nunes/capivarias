const getUserLoggedIn = () => {
    return localStorage.getItem("user");
}
export default getUserLoggedIn;