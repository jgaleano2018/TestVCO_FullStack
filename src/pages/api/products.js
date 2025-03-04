// pages/api/product.js

export default async function handler(req, res) {
 
  switch (req.method) {
    case 'GET':
      // Retrieve all users
      try {
        //const users = await usersCollection.find({}).toArray();
        
        //const products = await ExcuteQuery('select * from product');

        const products = [ 
          { "id": 1, "name": "Producto 1", "price": 100 }, 
          { "id": 2, "name": "Producto 2", "price": 200 } 
        ]

        res.status(200).json(products);

      } catch (error) {
        res.status(500).json({ message: 'Error fetching products' });
      }
      break;

    default:
      res.status(405).json({ message: 'Method Not Allowed' });
      break;
  }
}    