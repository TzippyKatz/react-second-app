import { useEffect, useState } from "react";
import { getProducts } from '../services/productsService';
import './style.css';

function StoreItems() {

    const [data, setData] = useState([]);

    useEffect(() => {
        getProducts().then(jsonData => {
            setData(jsonData);
        });
    }, []);

    useEffect(() => {
        console.log(`state data: ${JSON.stringify(data)}`);
    }, [data]);


    return (
        <div className="products">
            {data.map((product) => (
                <div key={product.id} className="product">
                    <p>{product.title}</p>
                    <img src={product.image} alt={product.title} width="150" />
                </div>
            ))}
        </div>
    );
}

export default StoreItems;