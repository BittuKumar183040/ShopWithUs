import './App.css'
import Main from './route/dashboard/Main';
import Login from './route/landingPage/login/Login';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { store } from './store'
import { Provider } from 'react-redux'
import Cart from './route/dashboard/cart/Cart';
import Signup from './route/landingPage/signup/Signup';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { isAuthenticated, PrivateRoute, PublicRoute } from './route/RoutesProtection';
import ProductInfo from './route/productPage/ProductInfo';

function App() {

  const authStatus = isAuthenticated();

  return (
    <Provider store={store}>
      <BrowserRouter>
        <GoogleOAuthProvider clientId={import.meta.env.VITE_API_GOOGLE_API_TOKEN}>
          <Routes>
            
            {/* Public Routes */} 
            <Route element={<PublicRoute isAuth={authStatus} />}>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Route>
            
            {/* Private Routes */}
            <Route path="/" element={<Navigate to={authStatus ? "/dashboard" : "/login"} replace />} />
            <Route path="*" element={<Navigate to={authStatus ? "/dashboard" : "/login"} replace />} />
    
            {/* Private Routes */}
            <Route element={<PrivateRoute isAuth={authStatus} />}>
              <Route path="/dashboard" element={<Main />} />
              <Route path="/shopping_cart" element={<Cart />} />
              <Route path="/product/:id" element={<ProductInfo key={window.location.pathname}/>} />
            </Route>
            
          </Routes>
        </GoogleOAuthProvider>
      </BrowserRouter>
    </Provider>
  )
}

export default App