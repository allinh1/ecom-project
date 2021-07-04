import './App.module.scss';

import Home from './containers/Home'
import Navbar from './components/Navbar';
import Card from './components/Card';
import Header from './components/Header'
import Footer from './components/Footer'

import { useState, useEffect } from "react";
import { 
  getProducts, 
  deleteProducts, 
  updateProducts, 
  createProducts,
} from "./services/product"

function App() {
  const [products, setProducts] = useState([]);

  const getData = async () => {
      const data = await getProducts();
      setProducts(data);
      console.log(data);

  };

  useEffect(() => {
      getData();
  }, []);

  const handleDelete = async (id) => {
    await deleteProducts(id);
    getData();
};

const handleChange = async (updatedRecord) => {
    const { id, ...record } = updatedRecord;
    await updateProducts(id, record);
    getData();
};

const handleCreate = async (newRecord) => {
    await createProducts(newRecord);
    getData();
};
  
  return (
      <> 
        <Header />

        <Navbar />

        <Home />

        <main>
          <h3> main content goes here </h3>
          <Card
            key={products.id}
            onDelete={handleDelete}
            onChange={handleChange}
            products={products}
          />
        </main>

        <Footer />
      </>
  );
}

export default App;









// Ecommerce React Project:
// Should have a home page for product showcase
// Should have a cart page for items that are currently in the cart
// Should have product pages for more information about products
// This project will be on your portfolio and must look good, put effort into styling, think about additional components such as carousels and galleries that your could add to your home page.
// You should be able to add, update the quantity of a product on the home, product and cart pages
// You should be able to remove products from the cart.

// Tips:
// Use two collections, one for products and one for cart objects
// Product Object:
// {
//     name: ...,
//     price: ...,
//     variants: [ ... ]
// }
// Cart Object:
// {
//     products: [
//         {
//             productId: ...,
//             quantity: ...,
//             variant: ...
//         },
//     ]
// }