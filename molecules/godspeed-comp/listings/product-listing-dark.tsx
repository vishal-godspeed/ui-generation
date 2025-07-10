import React from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const ProductListingDark: React.FC = () => {
  const products: Product[] = [
    { id: 1, name: 'Koesi Longsleeve', price: 190.0, image: 'https://via.placeholder.com/200x240' },
    { id: 2, name: 'Beat Seller', price: 210.0, image: 'https://via.placeholder.com/200x240' },
    { id: 3, name: 'Koesi Longsleeve', price: 190.0, image: 'https://via.placeholder.com/200x240' },
    { id: 4, name: 'Classic Polo', price: 120.0, image: 'https://via.placeholder.com/200x240' },
    { id: 5, name: 'Summer Hoodie', price: 99.0, image: 'https://via.placeholder.com/200x240' },
    { id: 6, name: 'Urban Jacket', price: 150.0, image: 'https://via.placeholder.com/200x240' },
    { id: 7, name: 'Street Tee', price: 80.0, image: 'https://via.placeholder.com/200x240' },
    { id: 8, name: 'Minimalist Shirt', price: 110.0, image: 'https://via.placeholder.com/200x240' },
  ];

  return (
    <div className="min-h-screen bg-[#18181b] text-white">
      {/* Header */}
      <header className="bg-[#23232b] px-6 py-5 flex items-center justify-between border-b border-gray-800">
        <div className="flex items-center gap-8">
          <span className="text-2xl font-bold tracking-wide">KANGI</span>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#" className="hover:text-primary-400 transition">New</a>
            <a href="#" className="hover:text-primary-400 transition">Men</a>
            <a href="#" className="hover:text-primary-400 transition">Women</a>
            <a href="#" className="hover:text-primary-400 transition">Kids</a>
            <a href="#" className="hover:text-primary-400 transition">Sports</a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-gray-400 hover:text-white transition">
            <span className="material-icons">search</span>
          </button>
          <button className="text-gray-400 hover:text-white transition">
            <span className="material-icons">shopping_cart</span>
          </button>
          <button className="text-gray-400 hover:text-white transition">
            <span className="material-icons">person</span>
          </button>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="bg-[#18181b] border-b border-gray-800 px-6 py-12 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Exclusive Fashion Offers Await</h1>
          <div className="text-2xl md:text-3xl font-semibold text-primary-400 mb-6">Flat 20% OFF</div>
          <div className="flex gap-4">
            <button className="px-6 py-3 rounded-lg bg-primary-500 text-white font-semibold hover:bg-primary-600 transition">
              Shop Now
            </button>
            <button className="px-6 py-3 rounded-lg border border-primary-500 text-primary-500 font-semibold hover:bg-primary-500 hover:text-white transition">
              Learn More
            </button>
          </div>
        </div>
        <div className="mt-8 md:mt-0">
          <img src="https://via.placeholder.com/320x200" alt="Hero" className="rounded-xl shadow-lg" />
        </div>
      </section>

      {/* Product Grid */}
      <main className="p-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <div 
              key={product.id}
              className="bg-[#23232b] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col cursor-pointer group"
            >
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-60 object-cover group-hover:scale-105 transition-transform" 
              />
              <div className="p-4">
                <div className="font-semibold text-lg text-white mb-1">{product.name}</div>
                <div className="text-gray-400 text-sm mb-2">${product.price.toFixed(1)}</div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ProductListingDark;