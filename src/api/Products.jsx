import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { data } from 'react-router-dom';

function Products() {
  // State to store the fetched data
  const [products, setProducts] = useState([]);
 

  useEffect(() => {
    // Define the asynchronous function to fetch data
    const fetchProducts = async () => {
      try {
        // Axios automatically parses the response to JSON. 
        // The actual data is in the `response.data` property.
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
        // console.log(response)
       
      } catch (err) {

        setProducts([]);
      } 
    };

    fetchProducts();
  }, []); // The empty dependency array ensures this runs only once when the component mounts

  return (
    <div>
        <h1 className='text-center'>Products List</h1>
        <div className='container'>
        <div className='row'>
         {products.map(product => (
          // Use user.id as the key for performance and uniqueness
        
            <div key={product.id} className='col-md-4 text-center'>
                <div className="card">
                    <img src={product.image} className="img-respon" alt="image" />
                    <div className="card-body">
    <h5 className="card-title">{product.title}</h5>
    <p className="card-text">{product.category}</p>
    <h4>${product.price}</h4>
  </div>
                    </div>
                </div>
           
        ))}
    </div>
     </div>
     </div>
  );
}

export default Products;
