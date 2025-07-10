import React, { useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface CartItem extends Product {
  quantity: number;
}

const ProductListing: React.FC = () => {
  const [cartOpen, setCartOpen] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: 'Mac Book Pro',
      price: 20,
      image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80',
      quantity: 2
    }
  ]);

  const products: Product[] = [
    { id: 1, name: 'Classic watch', price: 123, image: 'https://images.unsplash.com/photo-1495856458515-0637185db551?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80' },
    { id: 2, name: 'Old watch', price: 95, image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-1.2.1&auto=format&fit=crop&w=689&q=80' },
    { id: 3, name: 'Classic watch', price: 125, image: 'https://images.unsplash.com/photo-1532667449560-72a95c8d381b?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80' },
    { id: 4, name: 'Fossil watch', price: 180, image: 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80' }
  ];

  const addToCart = (product: Product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      
      if (existingItem) {
        return prevItems.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const increaseQuantity = (id: number) => {
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === id 
          ? { ...item, quantity: item.quantity + 1 } 
          : item
      )
    );
  };

  const decreaseQuantity = (id: number) => {
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 } 
          : item
      ).filter(item => item.quantity > 0)
    );
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header, Cart, Main Content and Footer components */}
      <header>
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="w-full text-gray-900 md:text-center text-2xl font-semibold">
              Brand
            </div>
            <div className="flex items-center justify-end w-full">
              <button onClick={() => setCartOpen(!cartOpen)} className="text-gray-600 focus:outline-none mx-4 sm:mx-0">
                <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="my-8">
        <div className="container mx-auto px-6">
          <h3 className="text-gray-900 text-2xl font-medium">Wrist Watch</h3>
          <span className="mt-3 text-sm text-gray-500">200+ Products</span>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
            {products.map(product => (
              <div key={product.id} className="w-full max-w-sm mx-auto rounded-lg shadow-md overflow-hidden bg-white">
                <div 
                  className="flex items-end justify-end h-56 w-full bg-cover" 
                  style={{ backgroundImage: `url('${product.image}')` }}
                >
                  <button 
                    onClick={() => addToCart(product)}
                    className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
                  >
                    <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                  </button>
                </div>
                <div className="px-5 py-3">
                  <h3 className="text-gray-900 uppercase">{product.name}</h3>
                  <span className="text-gray-500 mt-2 block">${product.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-200">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <a href="#" className="text-xl font-bold text-gray-500 hover:text-gray-400">Brand</a>
          <p className="py-2 text-gray-500 sm:py-0">All rights reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default ProductListing;