import './App.css';
import Bodega from './components/Bodega';
import Cat from './components/Cat';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="App">
      <h1>Intro To Redux</h1>
      {/* <Cat /> */}
      <ProductForm />
      <ProductList />
      <Bodega />
    </div>
  );
}

export default App;
