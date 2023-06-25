import './App.css';
import Header from "./containers/Header";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import ProductListing from './containers/ProductListing';
import ProductDetails from './containers/ProductDetails';
function App() {
  return (
    <div className="App">
    <Router>
      <Header/>
      <Routes>
      <Route path='/' exact Component={ProductListing}></Route>
      <Route path='/product/:productId' exact Component={ProductDetails}></Route>
      <Route>404 Not Found!!</Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
