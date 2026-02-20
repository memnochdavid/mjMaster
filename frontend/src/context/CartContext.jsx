import React, { createContext, useState, useEffect, useContext } from 'react';
import { useAuth } from './AuthContext';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const { user, loading } = useAuth(); // Obtenemos el usuario del contexto de autenticación
  const [cartItems, setCartItems] = useState([]);
  const [isInitialized, setIsInitialized] = useState(false);

  // Determinar la clave de almacenamiento según el usuario
  const getStorageKey = () => {
    if (loading) return null; // Esperar a que termine de cargar el usuario
    return user ? `cart_user_${user.email}` : 'cart_guest';
  };

  // Cargar carrito cuando cambia el usuario (o al iniciar)
  useEffect(() => {
    if (loading) return;

    const key = getStorageKey();
    if (!key) return;

    try {
      const storedCart = localStorage.getItem(key);
      if (storedCart) {
        setCartItems(JSON.parse(storedCart));
      } else {
        setCartItems([]);
      }
    } catch (error) {
      console.error("Error al cargar el carrito:", error);
      setCartItems([]);
    }
    setIsInitialized(true);
  }, [user, loading]);

  // Guardar en localStorage cada vez que cambie el carrito
  useEffect(() => {
    if (!isInitialized || loading) return;

    const key = getStorageKey();
    if (key) {
      localStorage.setItem(key, JSON.stringify(cartItems));
    }
  }, [cartItems, user, loading, isInitialized]);

  // Añadir producto al carrito
  const addToCart = (product, quantity = 1) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      
      if (existingItem) {
        return prevItems.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + quantity } 
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity }];
      }
    });
  };

  // Eliminar producto del carrito
  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  // Actualizar cantidad de un producto
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === productId 
          ? { ...item, quantity: newQuantity } 
          : item
      )
    );
  };

  // Vaciar carrito
  const clearCart = () => {
    setCartItems([]);
  };

  // Calcular total del carrito
  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + (parseFloat(item.price) * item.quantity), 0);
  };

  // Calcular número de items
  const getCartCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getCartTotal,
      getCartCount
    }}>
      {children}
    </CartContext.Provider>
  );
};
