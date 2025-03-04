// pages/product.js
import { useState, useEffect } from 'react';
//import { CartPage } from '/cart'
//import CartPage from "@/pages/front/cart";
import Link from 'next/link';

export default function ProductPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('/api/products');
      const data = await res.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Products</h1>
      
      <table className="w-full border-collapse border border-slate-400">
        <caption className="caption-top py-5 font-bold text-green-500 text-2xl">
          List Products
        </caption>

        <thead>
          <tr className="text-center">
            <th className="border border-slate-300">ID</th>
            <th className="border border-slate-300">Name</th>
            <th className="border border-slate-300">Price</th>
          </tr>
        </thead>
        <tbody>
            {products.map((item, i) => {
            return [
                <tr key={i}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                </tr>
            ];
        })}
        </tbody>
      </table>
      
      <Link href={`/front/cart?handleSubmit=1`}>Add Product to Shopping Cart</Link>

    </div>
  );
}

