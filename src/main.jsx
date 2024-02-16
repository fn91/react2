import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CartProvider } from './components/context/CartContext.jsx';
import { ThemeProvider } from './components/context/ThemeContext.jsx';
import  {AuthProvider} from './components/context/Auth.context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
    <ThemeProvider>
    <AuthProvider>
    <CartProvider>

    <App/>

    </CartProvider>


    </AuthProvider>


    </ThemeProvider>

  </React.StrictMode>,
)
