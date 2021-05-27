import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import ProductsPage from './Pages/ProductsPage/ProductsPage';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Route path="/" component={ProductsPage} exact />
    </BrowserRouter>
  );
};

export default App;
