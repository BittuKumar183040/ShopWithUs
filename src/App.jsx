import './App.css'
import Main from './route/dashboard/Main';
import Login from './route/landingPage/login/Login';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { store } from './store'
import { Provider } from 'react-redux'
import Cart from './route/dashboard/cart/Cart';
import Signup from './route/landingPage/signup/Signup';
import { GoogleOAuthProvider } from '@react-oauth/google';
// import { isAuthenticated, PrivateRoute, PublicRoute } from './route/RoutesProtection';
import ProductInfo from './route/productPage/ProductInfo';
import { AuthProvider } from './route/auth/AuthContext';
import PublicRoute from './route/auth/PublicRoute';
import PrivateRoute from './route/auth/PrivateRoute';

function App() {

  return (
    <Provider store={store}>
      <AuthProvider>
        <BrowserRouter>
          <GoogleOAuthProvider clientId={import.meta.env.VITE_API_GOOGLE_API_TOKEN}>
            <Routes>
              <Route
                path="/"
                element={<PublicRoute restricted={true} component={Login} />}
              />
              <Route
                path="/login"
                element={<PublicRoute restricted={true} component={Login} />}
              />
              <Route
                path="/signup"
                element={<PublicRoute restricted={true} component={Signup} />}
              />

              <Route
                path="/dashboard"
                element={<PrivateRoute component={Main} />}
              />
              <Route
                path="/shopping_cart"
                element={<PrivateRoute component={Cart} />}
              />
              <Route
                path="/product/:id"
                element={<PrivateRoute component={ProductInfo} key={window.location.pathname} />}
              />
                         
            </Routes>
          </GoogleOAuthProvider>
        </BrowserRouter>
      </AuthProvider>
    </Provider>
  )
}

export default App