export function setLocalStorage(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    }
    catch (error) {
        console.error("Error saving to localStorage", error);
    }
}

export function GetLocalStorage(key) {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.stringify(data) : null;
    }
    catch (error) {
        console.error("Error reading from localStorage", error);
        return null;
    }
}