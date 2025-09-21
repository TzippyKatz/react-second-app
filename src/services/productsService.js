import { GetLocalStorage, setLocalStorage } from "./storageServices";

export async function getProducts() {
    const cachedData = GetLocalStorage("products");
    if (cachedData) {
        console.log("Returning cached data");
        return cachedData;
    }

    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) {
        throw new Error("Failed to fetch products");
    }
    const data = await response.json();
    setLocalStorage("products", data);
    return data;
}