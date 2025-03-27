import { useEffect, useState } from "react";
import axios from "axios";

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/products").then(res => setProducts(res.data));
    }, []);

    return (
        <div>
            <h2>Products</h2>
            {products.map(product => (
                <div key={product._id}>
                    <h3>{product.name}</h3>
                    <p>Price: ${product.price}</p>
                    <img src={product.image} alt={product.name} width="100" />
                </div>
            ))}
        </div>
    );
};

export default ProductList;
