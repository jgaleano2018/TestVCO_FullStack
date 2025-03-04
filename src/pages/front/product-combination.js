// pages/product.js
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ProductCombinationPage() {
  const [products, setProducts] = useState([ 
{ "id": 1, "name": "Producto 1", "price": 60 }, 
{ "id": 2, "name": "Producto 2", "price": 100 }, 
{ "id": 3, "name": "Producto 3", "price": 120 }, 
{ "id": 4, "name": "Producto 4",  "price": 70 } ]);
const [budget, setBudget] = useState('150');
const [dataBestComb, setDataBestComb] = useState([]);

  useEffect(() => {

      let value1 = 0;
      let value2 = 0;
      let id1=0;
      let id2=0;
      let maxvalue = 0;
     // Utilizando forEach
 
      maxvalue = products[index].price
      products.forEach((prod, index) => {
        if(index === 0) {
            value1 = products[index].price;
        }
      });

      for(let i=0; i<products.length; i++) {
        
        for(let j=0; j<products.length; j++) {

            if (products[i].price + products[j].price > maxvalue && products[i].price + products[j].price < budget) {

                value1 = products[i].price;
                value2 = products[j].price;
                id1 = products[i].id;
                id2 = products[j].id;

                maxvalue = products[i].price + products[j].price;
            }

        }
      }
  
      for(let i=0; i<products.length; i++) { 

        if (products[i].id == id1) {
            setDataBestComb(products[i]);
        }

        if (products[i].id == id2) {
            setDataBestComb(products[i]);
        }

      }

      setProducts(dataBestComb);
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
      
    </div>
  );
}

