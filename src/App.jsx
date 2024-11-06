import './App.css'
import Main from './route/dashboard/Main';
import Login from './route/landingPage/login/Login';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { store } from './store'
import { Provider } from 'react-redux'
import Nav from './route/dashboard/Nav';
import Cart from './route/dashboard/cart/Cart';

function App() {
  
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Login />} />
            <Route path="dashboard" element={<Main />} />
            <Route path="shopping_cart" element={<Cart />} />
          <Route/>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App