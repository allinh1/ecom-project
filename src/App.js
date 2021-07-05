import { Route, Switch } from 'react-router-dom';

import './App.module.scss';


import Home from './containers/Home';
import Cart from './containers/Cart';



import { React, useState, useEffect } from "react";
import { 
  getProducts, 
  deleteProducts, 
  updateProducts, 
  // createProducts,
} from "./services/product"


const App = () => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    const getData = async () => {
      const data = await getProducts();
      setProducts(data);
      console.log(data);
  };
      getData();
  }, []);


//   const handleDelete = async (id) => {
//     await deleteProducts(id);
//     getData();
// };

// const handleChange = async (updatedRecord) => {
//     const { id, ...record } = updatedRecord;
//     await updateProducts(id, record);
//     getData();
// };

// const handleCreate = async (newRecord) => {
//     await createProducts(newRecord);
//     getData();
// };
  
  return (
      <> 

        <Switch>
        
          <Route exact path="/" component={Home} />

          <Route exact path="products/:id"></Route>

          <Route path="/cart" component={Cart} />

        </Switch>


      </>
  );
}

export default App;