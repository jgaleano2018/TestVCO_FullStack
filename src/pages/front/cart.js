// pages/users.js
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'


const CartPage = function(params) {
  const [id, setId] = useState('1');
  const [price, setPrice] = useState('700');
  const [quantity, setQuantity] = useState('10');
  const [subtotal, setSubtotal] = useState('70000');
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      const res = await fetch('/api/cart');
      const data = await res.json();
      setCart(data);
    };

    fetchCart();
  }, []);


  const handleSubmit = async (event) => {
    event.preventDefault();
    const id_product = id;
    const newCart = { id_product, price, quantity, subtotal };

    //console.log(newCart);
    const res = await fetch('/api/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newCart),
    });

    if (res.ok) {
      cart.push(newCart);
      alert('Cart created successfully!');

      setCart(cart);
    }
  };

  return (
    <><div>
      <h1>Form Shopping Cart</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Id"
          value={id}
          onChange={(e) => setId(e.target.value)} />
        <input
          type="text"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)} />
        <input
          type="quantity"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)} />
        <input
          type="subtotal"
          placeholder="Subtotal"
          value={subtotal}
          onChange={(e) => setSubtotal(e.target.value)} />
        <button type="submit">Save Product to Shopping Cart</button>
      </form>
    </div><div>

        <table className="w-full border-collapse border border-slate-400">
          <caption className="caption-top py-5 font-bold text-green-500 text-2xl">
            List Products in Shopping Cart
          </caption>

          <thead>
            <tr className="text-center">
              <th className="border border-slate-300">ID</th>
              <th className="border border-slate-300">Price</th>
              <th className="border border-slate-300">Quantity</th>
              <th className="border border-slate-300">Subtotal</th>
              
            </tr>
          </thead>
          <tbody>
            {cart.map((item, i) => {
              return [
                <tr key={i}>
                  <td>{item.id_product}</td>
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>
                  <td>{item.subtotal}</td>
                </tr>
              ];
            })}
          </tbody>
        </table>

      </div></>
  );
}

export default CartPage;