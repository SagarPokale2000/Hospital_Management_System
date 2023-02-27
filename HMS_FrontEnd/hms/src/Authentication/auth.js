// Check isLoggedIn
export const isLoggedIn = () => {
    let data = localStorage.getItem("data");
    if (data == null) {
        return false;
    }
    else {
        return true;
    }
}

// doLogout => data=>remove to localstorage
export const doLogout = (next) => {
    localStorage.removeItem("data")
    next();
    // next become callback function
}

// Get Current User
export const getCurrentUserDetail = () => {
    if (isLoggedIn()) {
     //*************************************************** */
        return JSON.parse(localStorage.getItem("data")).user;
        // String to JSON conversion
    }
    else {
        return undefined;
    }
}