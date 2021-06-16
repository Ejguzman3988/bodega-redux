import { Component } from 'react';
import './App.css';
import Bodega from './components/Bodega';
import Cat from './components/Cat';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import {connect} from 'react-redux'
import { getProducts } from './actions/product';
import Loading from './svg/Loading';

class App extends Component {
  componentDidMount(){
    //FETCH
    this.props.getProducts()
  }

  render(){
    return (
      <div className="App">
        <h1>Bodega 020121</h1>
        <Cat />
        <ProductForm />

        {this.props.loading ? <Loading /> : <ProductList />}
        <Bodega />
      </div>
    );
  }
}

const MSTP = (state) => {
  return{
    loading: state.loading
  }
}


export default connect(MSTP, { getProducts })(App);
