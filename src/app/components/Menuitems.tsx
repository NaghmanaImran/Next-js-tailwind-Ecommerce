'use client';

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Product } from "@/pages/types";
import ProductCard from "./Productcard";

const Menu = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [isCheckout, setIsCheckout] = useState(false);
 

  // Fetch products and initialize cart from local storage
  useEffect(() => {
    // Fetch products
    async function fetchProducts() {
      
        const response = await fetch("/api/products");
      
        const data = await response.json();
        setProducts(data);
      
      }
    
    fetchProducts();

    // Load saved cart from localStorage
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Add product to cart
  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, product];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  // Toggle cart visibility
  const toggleCart = () => {
    setShowCart((prev) => !prev);
  };

  // Go to checkout
  const goToCheckout = () => {
    setIsCheckout(true);
  };

  // Clear the cart
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  return (
    <div className="relative min-h-screen py-6">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10 animate-background"
        style={{
          backgroundImage:
            "url('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Frestaurant-background&psig=AOvVaw2kOEZIZynqRABP8nR-APaM&ust=1735854350631000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMCB28G_1YoDFQAAAAAdAAAAABAK')", // Replace with a valid image URL
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10">
        <div className="max-w-6xl mx-auto text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Delicious Food in OUR Menu</h1>
          <p className="text-xl text-white">
            Explore our selection of mouth-watering food and place your order now!
          </p>
        </div>

        {/* Product section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-3 gap-6 max-w-6xl mx-auto text-black">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} onAddToCart={addToCart} />
          ))}
        </div>

        {/* Cart Section */}
        <div>
          <button
            onClick={toggleCart}
            className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md mt-8 hover:bg-blue-800 transition duration-300 ease-in-out transform"
          >
            {showCart ? "Hide Cart" : "View Cart"} ({cart.length} items)
          </button>
          {showCart && (
            <div className="mt-6 bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-4xl font-bold mb-4 text-blue-600">Your Cart Items:</h2>
              {cart.length > 0 ? (
                <div>
                  <ul>
                    {cart.map((product) => (
                      <li
                        key={product.id}
                        className="flex justify-center mb-6 transform transition-all duration-300 ease-in-out"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-20 h-40 sm:w-24 inline-block transition-transform duration-300 ease-in-out"
                        />
                        <span className="ml-4 text-lg font-medium">
                          {product.name} - ${product.price}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-between items-center mt-6 text-black">
                    <span className="font-semibold text-xl">
                      Total: ${cart.reduce((total) => total + parseFloat('product.price'), 0)}
                    </span>

                    <div>
                      <button  
                        onClick={goToCheckout}
                        className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg shadow-md hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-110"
                      >
                        Proceed To Checkout
                      </button>
                      <button
                        className="bg-red-600 text-white px-8 py-3 rounded-lg ml-4 text-lg shadow-md hover:bg-red-700 transition duration-300 ease-in-out transform hover:scale-110"
                        onClick={clearCart}
                      >
                        Clear Cart
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <p className="text-lg text-slate-500">Your cart is empty.</p>
              )}
            </div>
          )}
        </div>

        {/* Checkout section */}
        {isCheckout && (
          <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center z-50 text-black">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
              <h2 className="text-4xl font-bold text-blue-600 mb-4">Checkout</h2>
              <p className="text-lg text-red-600">Please confirm your order before proceeding.</p>
              <ul>
                {cart.map((product) => (
                  <li key={product.id} className="flex justify-between mb-4">
                    <span>{product.name}</span>
                    <span>${product.price}</span>
                  </li>
                ))}
              </ul>
              <div className="flex justify-between mt-4">
                <span className="font-semibold">Total</span>
                <span className="font-semibold">
                  ${cart.reduce((total) => total + parseFloat('product.price'), 0)}
                </span>
              </div>
            </div>

            <div className="mt-6 flex justify-between">
              <button
                onClick={() => setIsCheckout(false)}
                className="bg-slate-600 text-white px-6 py-2 rounded-lg ml-4 text-lg shadow-md hover:bg-slate-500 transition duration-300 ease-in-out transform hover:scale-110"
              >
                Close
              </button>
              <button
                onClick={() => alert('Order confirmed! It will be delivered to your doorstep.')}
                className="bg-green-600 text-white px-6 py-2 rounded-lg ml-4 text-lg shadow-md hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-110"
              >
                Confirm Order
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
