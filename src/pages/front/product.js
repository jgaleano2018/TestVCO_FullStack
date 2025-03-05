// pages/product.js
import { BrowserRouter as Router, Route, Routes, useNavigate, useHistory  } from 'react-router-dom';
import { React, useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import { usePathname, useSearchParams } from "next/navigation";


export default function ProductPage() {
  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);

  const router = useRouter();
  const queries = useSearchParams();

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('/api/products');
      const data = await res.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  const handleSelectProduct = (event) => {
    const productId = event.target.value;

    /*if (!selectedProducts.includes(productId)) {
      setSelectedProducts([...selectedProducts, productId]);
    } else {
      setSelectedProducts(
        selectedProducts.filter((selectedProductId) => {
          return selectedProductId !== productId;
        })
      );*/

    for(let i=0; i<products.length; i++) {
      
      console.log("IDDDDDDD:: " + products[i].id);

      if (products[i].id == productId) {
        console.log("IDDDDDDD2222:: " + products[i].id);
        console.log(products[i]);
        selectedProducts.push(products[i]);
      }

    }

    console.log("selectedProductsselectedProductsselectedProductsselectedProducts---");
    console.log(selectedProducts);
    console.log(productId);
  };

  const addQueryParam = () => {
    //const params = products;

    const params = new URLSearchParams(Array.from(queries.entries()));
        params.set("id", selectedProducts[0].id);
        params.set("price", selectedProducts[0].price);
        router.push(`/front/cart?${params.toString()}`);
  };


  return (
    <div>
      <h1>Products</h1>
      
      <table className="w-full border-collapse border border-slate-400">
        <caption className="caption-top py-5 font-bold text-green-500 text-2xl">
          List Products
        </caption>

        <thead>
          <tr className="text-center">
            <th></th>
            <th className="border border-slate-300">ID</th>
            <th className="border border-slate-300">Name</th>
            <th className="border border-slate-300">Price</th>
          </tr>
        </thead>
        <tbody>
            {products.map((item, i) => {
            return [
                <tr key={i}>
                <td>
                  <input
                    type="checkbox"
                    value={item.id}
                    onChange={handleSelectProduct}
                  />
                </td>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                </tr>
            ];
        })}
        </tbody>
      </table>
      
      <button
        style={{
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          textAlign: 'center',
          textDecoration: 'none',
          display: 'inline-block',
          fontSize: '16px',
          margin: '10px 2px',
          cursor: 'pointer',
          borderRadius: '5px',
        }}
        onClick={addQueryParam}
      >Add Product to Shopping Cart</button>

    </div>
  );
}

