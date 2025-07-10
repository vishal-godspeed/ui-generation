import React from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  sold: number;
  available: number;
  size: string;
  gender: string;
  color: string;
}

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  size: string;
  color: string;
}

const ProductListingLight: React.FC = () => {
  const products: Product[] = [
    { id: 1, name: 'White T-shirt', price: 49.3, image: 'https://via.placeholder.com/120x120', sold: 12, available: 12, size: 'M', gender: 'Man', color: 'bg-gray-300' },
    { id: 2, name: 'Outer Hodie Flannel', price: 112.4, image: 'https://via.placeholder.com/120x120', sold: 12, available: 12, size: 'XL', gender: 'Unisex', color: 'bg-gray-400' },
    { id: 3, name: 'Denim Longslave', price: 49.3, image: 'https://via.placeholder.com/120x120', sold: 12, available: 12, size: 'M', gender: 'Man', color: 'bg-blue-200' },
    { id: 4, name: 'Wide Leg Dress Pants', price: 28.2, image: 'https://via.placeholder.com/120x120', sold: 12, available: 12, size: '28', gender: 'Women', color: 'bg-brown-200' },
    { id: 5, name: 'Dress For Women Muslim', price: 76.8, image: 'https://via.placeholder.com/120x120', sold: 12, available: 12, size: 'M', gender: 'Man', color: 'bg-gray-700' },
    { id: 6, name: 'Trench Coat Notch Lapel', price: 112.2, image: 'https://via.placeholder.com/120x120', sold: 12, available: 12, size: 'M', gender: 'Man', color: 'bg-brown-700' },
    { id: 7, name: 'Classic Shirt', price: 59.9, image: 'https://via.placeholder.com/120x120', sold: 12, available: 12, size: 'L', gender: 'Man', color: 'bg-gray-200' },
    { id: 8, name: 'Summer Polo', price: 39.5, image: 'https://via.placeholder.com/120x120', sold: 12, available: 12, size: 'M', gender: 'Man', color: 'bg-blue-400' },
  ];

  const cartItems: CartItem[] = [
    { id: 1, name: 'White T-shirt', price: 49.3, image: 'https://via.placeholder.com/32x32', size: 'M', color: 'Gray' },
    { id: 2, name: 'Outer Hodie Flannel', price: 112.4, image: 'https://via.placeholder.com/32x32', size: 'XL', color: 'Black' },
  ];

  const subtotal = 210.0;
  const discount = 10.0;
  const salesTax = 5.0;
  const total = subtotal - discount + salesTax;

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-5 border-b border-gray-200 bg-white max-w-7xl mx-auto rounded-t-2xl shadow-sm">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">My Stuff-</h1>
          <div className="text-gray-400 text-sm">Let's Choose Your Option To Sale !</div>
        </div>
        <div className="flex items-center gap-3">
          <input 
            type="text" 
            placeholder="Search" 
            className="px-3 py-2 rounded-lg bg-gray-100 border border-gray-200 text-sm focus:ring-2 focus:ring-primary-500 outline-none" 
          />
          <button className="flex items-center px-3 py-2 rounded-lg bg-gray-100 border border-gray-200 text-gray-700 hover:bg-gray-200 transition">
            <span className="material-icons mr-1">filter_list</span>Filters
          </button>
        </div>
      </header>

      <div className="flex flex-col lg:flex-row gap-8 px-6 py-8 max-w-7xl mx-auto">
        {/* Product List */}
        <section className="flex-1">
          <div className="flex flex-wrap gap-2 mb-6">
            <button className="px-4 py-2 rounded-lg bg-white border border-gray-200 font-medium text-gray-900 flex items-center shadow-sm hover:bg-gray-100 transition">
              <span className="material-icons mr-2">checkroom</span>Clothes
            </button>
            <button className="px-4 py-2 rounded-lg bg-white border border-gray-200 font-medium text-gray-500 flex items-center shadow-sm hover:bg-gray-100 transition">
              <span className="material-icons mr-2">watch</span>Accessories
            </button>
            <button className="px-4 py-2 rounded-lg bg-white border border-gray-200 font-medium text-gray-500 flex items-center shadow-sm hover:bg-gray-100 transition">
              <span className="material-icons mr-2">menu_book</span>Books
            </button>
            <button className="px-4 py-2 rounded-lg bg-white border border-gray-200 font-medium text-gray-500 flex items-center shadow-sm hover:bg-gray-100 transition">
              <span className="material-icons mr-2">devices</span>Electronics
            </button>
            <button className="px-4 py-2 rounded-lg bg-white border border-gray-200 font-medium text-gray-500 flex items-center shadow-sm hover:bg-gray-100 transition">
              <span className="material-icons mr-2">home</span>Home Goods
            </button>
            <button className="px-4 py-2 rounded-lg bg-white border border-gray-200 font-medium text-red-500 flex items-center shadow-sm hover:bg-gray-100 transition">
              <span className="material-icons mr-2">shopping_cart</span>Ordered 
              <span className="ml-2 bg-red-100 text-red-500 rounded-full px-2 py-0.5 text-xs">12</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <div 
                key={product.id}
                className="bg-white rounded-2xl border border-gray-200 p-5 flex flex-col h-full min-h-[370px] shadow-sm hover:shadow-lg transition-all group cursor-pointer"
              >
                <div className="flex flex-col flex-1">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-32 h-32 object-contain mx-auto mb-4 group-hover:scale-105 transition-transform" 
                  />
                  <div className="font-semibold text-gray-900 mb-1 text-base text-center">{product.name}</div>
                  <div className="text-xs text-gray-400 mb-1 text-center">
                    Sold {product.sold}pcs &bull; Avail {product.available}pcs
                  </div>
                  <div className="flex items-center gap-2 mb-2 justify-center">
                    <select className="border border-gray-200 rounded px-2 py-1 text-xs focus:ring-1 focus:ring-primary-500">
                      <option>{product.size}</option>
                    </select>
                    <select className="border border-gray-200 rounded px-2 py-1 text-xs focus:ring-1 focus:ring-primary-500">
                      <option>{product.gender}</option>
                    </select>
                    <button className={`w-6 h-6 rounded-full border border-gray-200 ${product.color}`}></button>
                  </div>
                  <div className="font-bold text-lg text-gray-900 mb-2 text-center">${product.price.toFixed(1)}</div>
                </div>
                <button className="flex items-center justify-center mt-auto px-3 py-2 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-700 transition">
                  <span className="material-icons mr-1">add_shopping_cart</span>Add to cart
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Cart/Order Summary */}
        <aside className="w-full lg:w-80 bg-white rounded-2xl border border-gray-200 p-6 flex flex-col mt-8 lg:mt-0 shadow sticky top-8 self-start">
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 rounded-full bg-gray-200 mr-3"></div>
            <div>
              <div className="font-semibold text-gray-900 text-sm">Chasier 1</div>
              <div className="text-xs text-gray-400">Maximillian M</div>
              <div className="text-xs text-gray-300">ID: #1992327</div>
            </div>
          </div>
          
          <div className="mb-4">
            <div className="font-semibold text-gray-900 mb-2">List Order Product</div>
            <div className="space-y-2">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between text-sm">
                  <img src={item.image} className="w-8 h-8 rounded bg-gray-100 mr-2" alt={item.name} />
                  <div className="flex-1">
                    <div className="text-gray-900">{item.name}</div>
                    <div className="text-xs text-gray-400">Size: {item.size} | Color: {item.color}</div>
                  </div>
                  <div className="font-semibold text-gray-900">${item.price}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mb-4">
            <div className="font-semibold text-gray-900 mb-2">Detail Payment</div>
            <div className="flex justify-between text-sm text-gray-500">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(1)}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-500">
              <span>Discount</span>
              <span>-${discount.toFixed(1)}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-500">
              <span>Sales Tax</span>
              <span>${salesTax.toFixed(1)}</span>
            </div>
            <div className="flex justify-between text-base font-bold text-gray-900 mt-2">
              <span>Total Amount</span>
              <span>${total.toFixed(1)}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2 mb-2">
            <input 
              type="text" 
              placeholder="Discount" 
              className="flex-1 px-3 py-2 rounded-lg bg-gray-100 border border-gray-200 text-sm focus:ring-2 focus:ring-primary-500 outline-none" 
            />
            <button className="px-3 py-2 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700 transition">
              Cash
            </button>
          </div>
          
          <button className="w-full mt-2 px-3 py-2 rounded-lg bg-gray-900 text-white font-semibold hover:bg-gray-700 transition">
            Checkout
          </button>
        </aside>
      </div>
    </div>
  );
};

export default ProductListingLight;