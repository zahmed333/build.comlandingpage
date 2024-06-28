import React from 'react';
import { ShoppingCart, User, Bell, Search, ChevronDown, Phone, MessageCircle } from 'lucide-react';

const featuredCategories = [
  { name: 'Door Hardware', imgSrc: '/Door.jpg' },
  { name: 'Electrical', imgSrc: '/electrical.jpg' },
  { name: 'Office Supplies', imgSrc: '/office.jpeg' },
  { name: 'Medical Supplies', imgSrc: '/medical.jpeg' },
];

const VendorHubsHomepage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Header */}
      <div className="bg-gray-100 text-sm py-1 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <span>Shipping to: </span>
            <span className="text-teal-600 ml-1 flex items-center">
              New Rochelle, NY <ChevronDown className="h-4 w-4 ml-1" />
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span>Are you a Pro? Get <span className="bg-orange-400 text-white px-1">PRO</span> Pricing</span>
            <span className="flex items-center"><Phone className="h-4 w-4 mr-1" /> (800) 375-3403</span>
            <span className="flex items-center"><MessageCircle className="h-4 w-4 mr-1" /> Chat With Us</span>
            <span>Showrooms</span>
            <span>Help</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-md p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold">VendorHubs</h1>
            <div className="relative">
              <input
                type="text"
                placeholder="What are you shopping for?"
                className="w-96 p-2 pr-10 border rounded-md"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center">
              <img src="/project.png" alt="Project icon" className="w-6 h-6 mr-2" />
              <span>My Projects</span>
            </div>
            <div className="flex items-center">
              <User className="h-6 w-6 mr-2" />
              <span>Log In<br/>Orders & Returns</span>
            </div>
            <Bell className="h-6 w-6" />
            <div className="relative">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 bg-teal-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">0</span>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-gray-800 text-white">
        <div className="container mx-auto flex">
          {['Shop All Departments', 'Medical Supplies', 'Office Essentials', 'Electrical', 'Hardware', 'Institutional Buyers', 'Bathroom', 'Kitchen', 'Lighting', 'Fans', 'Appliances', 'Flooring', 'Cabinet Hardware', 'Outdoor', 'HVAC', 'Clearance'].map((item, index) => (
            <a key={item} href="#" className={`py-2 px-4 hover:bg-gray-700 ${index === 0 ? 'bg-black' : ''}`}>{item}</a>
          ))}
        </div>
      </nav>

      {/* Promotional Banner */}
      <div className="bg-teal-600 text-white py-2">
        <div className="container mx-auto flex justify-between">
          <span>4th of July Event</span>
          <span>Learning Center</span>
          <span>FREE Standard Ground Shipping on Orders over $49</span>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Banner */}
        <section className="relative h-96 bg-gray-300">
          <img src="/banner.jpg" alt="Warehouse" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="text-4xl font-bold mb-4">Direct Factory Prices for Your Business</h2>
              <button className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600">
                Start Saving Now
              </button>
            </div>
          </div>
        </section>

        {/* Carousel */}
        <section className="py-8 bg-white">
          <div className="container mx-auto">
            <div className="flex justify-between items-center">
              {['Bathroom', 'Kitchen', 'Lighting', 'Hardware', 'Appliances'].map((category) => (
                <div key={category} className="text-center">
                  <img src="/warehouse.jpg" alt={category} className="mx-auto mb-2 rounded-full" />
                  <p className="font-semibold">{category}</p>
                  <p className="text-sm text-teal-600">SAVE UP TO 50%</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      {/* Featured Categories */}
      <section className="py-12 bg-white">
        <div className="container mx-auto">
          <h3 className="text-2xl font-bold mb-6">Featured Categories</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {featuredCategories.map((category) => (
              <div key={category.name} className="bg-gray-100 p-4 rounded-md text-center">
                <img src={category.imgSrc} alt={category.name} className="mx-auto mb-2" />
                <p className="font-semibold">{category.name}</p>
                <p className="text-sm text-gray-600">Up to 50% Off Retail</p>
              </div>
            ))}
          </div>
        </div>
      </section>

        {/* Value Proposition */}
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Factory Direct Pricing', description: 'Cut out the middleman and save' },
                { title: 'Verified Suppliers', description: 'Quality assured products' },
                { title: 'Bulk Order Discounts', description: 'Save more when you buy more' }
              ].map((item) => (
                <div key={item.title} className="text-center">
                  <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-12 bg-white">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-6">How It Works</h3>
          <div className="flex justify-center space-x-8 mb-8">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-navy-blue text-white flex items-center justify-center mb-2">
                  {step}
                </div>
                <p className="text-sm">Step {step}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <button className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600">
              Become a Supplier
            </button>
          </div>
        </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h5 className="font-semibold mb-4">Quick Links</h5>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-orange-400">About Us</a></li>
              <li><a href="#" className="hover:text-orange-400">For Suppliers</a></li>
              <li><a href="#" className="hover:text-orange-400">For Buyers</a></li>
              <li><a href="#" className="hover:text-orange-400">Terms of Service</a></li>
              <li><a href="#" className="hover:text-orange-400">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-4">Contact Us</h5>
            <p>Phone: (800) 123-4567</p>
            <p>Email: info@vendorhubs.com</p>
            <p>123 Business St, City, State 12345</p>
          </div>
          <div>
            <h5 className="font-semibold mb-4">Follow Us</h5>
            <div className="flex space-x-4">
              {/* Add social media icons here */}
            </div>
          </div>
          <div>
            <h5 className="font-semibold mb-4">Newsletter</h5>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 rounded-md text-gray-800 mb-2"
            />
            <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 w-full">
              Subscribe
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VendorHubsHomepage;
