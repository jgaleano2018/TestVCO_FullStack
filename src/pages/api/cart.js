// pages/api/cart.js
/*export default function handler(req, res) {
    // Define a list of products of cart
    const cart = [ 
        { "id_product": 1, "price": 100, quantity: 1, subtotal: 100 }, 
        { "id_product": 2, "price": 200, quantity: 5, subtotal: 1000 } 
    ]
  
    // Send the list of users as a JSON response
    res.status(200).json(users);
  }*/


// pages/api/users.js
//import clientPromise from '../../lib/myssql';

export default async function handler(req, res) {
  /*const client = await clientPromise;
  const db = client.db(); // Connect to the default database (replace with your DB name if needed)
  const usersCollection = db.collection('users'); // 'users' collection in MongoDB*/

  switch (req.method) {
    case 'GET':
      // Retrieve all carts
      try {
        const cart = [ 
          { "id_product": 1, "price": 100, quantity: 1, subtotal: 100 }, 
          { "id_product": 2, "price": 200, quantity: 5, subtotal: 1000 } 
        ]

        res.status(200).json(cart);
      } catch (error) {
        res.status(500).json({ message: 'Error fetching carts' });
      }
      break;

    case 'POST':
      // Add a new carts
      try {
        const { id_product, price, quantity, subtotal } = req.body;
        //const newCart = await await ExcuteQuery('insert into cart (id_product, price, quantity, subtotal) values ('+id_product+', '+price+', '+quantity+', '+subtotal+')');

        const cart = [ 
          { "id_product": 1, "price": 100, quantity: 1, subtotal: 100 }, 
          { "id_product": 2, "price": 200, quantity: 5, subtotal: 1000 } 
        ]

        console.log({id_product, price, quantity, subtotal});

        cart.push({id_product, price, quantity, subtotal});
    
        res.status(201).json(cart);
      } catch (error) {
        res.status(500).json({ message: 'Error creating cart' });
      }
      break;


    default:
      res.status(405).json({ message: 'Method Not Allowed' });
      break;
  }
}