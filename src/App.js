import { Fragment } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import ProductList from './Components/ProductList/ProductList';

function App() {
  return (
    <Fragment>
      <Header />
      <ProductList />
    </Fragment>

  );
}

export default App;
