import { useState } from "react";

export function FSanPham() {
    let [products, setProducts] = useState([
        { id: 1, name: "Táo", price: 100000 },
        { id: 2, name: "Nho", price: 200000 },
        { id: 3, name: "Cam", price: 300000 },
        {id:4,name:"Xoài",price: 400000 },
    ]);

    let [newProductName, setNewProductName] = useState("");
    let [newProductPrice, setNewProductPrice] = useState("");

    let addProduct = () => {
        if (newProductName.trim() !== "" && newProductPrice.trim() !== "") {
            let newProduct = {
                id: products.length + 1,
                name: newProductName,
                price: newProductPrice
            };
            setProducts([...products, newProduct]);
            setNewProductName("");
            setNewProductPrice("");
        }
    };

    return (
        <>
            <h1>Danh sách sản phẩm</h1>
            <ul>
                {products.map((product) => (
                    <h4>
                        {product.id}. {product.name} - {product.price} VND
                    </h4>

                ))}
            </ul>
            <input
                type="text"
                value={newProductName}
                onChange={(e) => setNewProductName(e.target.value)}
                placeholder="Name"
            />
            <input
                type="number"
                value={newProductPrice}
                onChange={(e) => setNewProductPrice(e.target.value)}
                placeholder="Price"
            />
            <button onClick={addProduct}>Add</button>
        </>
    );
}
