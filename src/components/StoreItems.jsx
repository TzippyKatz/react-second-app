import { useEffect, useState } from "react";
import { getProducts } from '../services/productsService';

function StoreItems() {

    const [data, setData] = useState([]);

    useEffect(() => {
        const d = getProducts();
        setData(d);
    }, []);

    useEffect(() => {
        console.log(`state data: ${JSON.stringify(data)}`);
    }, [data]);


    return (
        null
    );
}

export default StoreItems;