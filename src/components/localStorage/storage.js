const getStorage = () => {
    return localStorage.getItem("store") ? JSON.parse(localStorage.getItem("store")) : [];

};

export { getStorage };