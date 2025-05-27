import { useState } from 'react';

const InvestmentBlog = () => {
  const [email, setEmail] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Market Trends', 'Investment Strategies', 'Portfolio Management', 'Startup Funding'];

  const featuredPost = {
    title: 'The Future of AI Investments in 2024',
    excerpt: 'How artificial intelligence is reshaping investment strategies and which sectors are poised for growth in the coming year.',
    author: 'Sarah Johnson',
    date: 'May 15, 2024',
    readTime: '8 min read',
    category: 'Market Trends'
  };

  const blogPosts = [
    {
      id: 1,
      title: 'Diversification in Volatile Markets',
      excerpt: 'Strategies to protect your portfolio when market conditions are uncertain.',
      category: 'Investment Strategies',
      date: 'May 10, 2024',
      readTime: '6 min read'
    },
    {
      id: 2,
      title: 'Understanding Series A Funding',
      excerpt: 'A complete guide to what investors look for in early-stage startups.',
      category: 'Startup Funding',
      date: 'May 5, 2024',
      readTime: '10 min read'
    },
    {
      id: 3,
      title: 'The Rise of ESG Investing',
      excerpt: 'How environmental, social, and governance factors are becoming key metrics.',
      category: 'Market Trends',
      date: 'April 28, 2024',
      readTime: '7 min read'
    },
    {
      id: 4,
      title: 'Automated Portfolio Rebalancing',
      excerpt: 'How technology is making portfolio management more efficient.',
      category: 'Portfolio Management',
      date: 'April 22, 2024',
      readTime: '5 min read'
    },
    {
      id: 5,
      title: 'Cryptocurrency: Risk vs Reward',
      excerpt: 'Analyzing the current state of digital assets in investment portfolios.',
      category: 'Investment Strategies',
      date: 'April 15, 2024',
      readTime: '9 min read'
    },
    {
      id: 6,
      title: 'Real Estate Crowdfunding Insights',
      excerpt: 'How fractional ownership is changing property investments.',
      category: 'Investment Strategies',
      date: 'April 8, 2024',
      readTime: '8 min read'
    }
  ];

  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Thanks for subscribing with ${email}! You'll receive our investment insights.`);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-indigo-900 text-white">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <span className="text-xl font-bold">InvestWise</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="hover:text-indigo-200">Home</a>
              <a href="#" className="hover:text-indigo-200">Blog</a>
              <a href="#" className="hover:text-indigo-200">Resources</a>
              <a href="#" className="hover:text-indigo-200">About</a>
            </nav>
            <button className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-md font-medium transition duration-300">
              Sign In
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-indigo-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Investment Insights & Strategies</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Expert analysis and actionable advice to grow your investment portfolio
          </p>
          <div className="max-w-md mx-auto relative">
            <input 
              type="text" 
              placeholder="Search articles..." 
              className="w-full py-3 px-4 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-indigo-600 text-white p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Featured Post */}
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-2/3 p-8">
              <span className="inline-block bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full uppercase font-semibold tracking-wide mb-2">
                {featuredPost.category}
              </span>
              <h2 className="text-3xl font-bold mb-4">{featuredPost.title}</h2>
              <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
              <div className="flex items-center text-sm text-gray-500">
                <span>{featuredPost.author}</span>
                <span className="mx-2">•</span>
                <span>{featuredPost.date}</span>
                <span className="mx-2">•</span>
                <span>{featuredPost.readTime}</span>
              </div>
              <button className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-md font-medium transition duration-300">
                Read Article
              </button>
            </div>
            <div className="md:w-1/3 bg-indigo-100 flex items-center justify-center p-8">
              <div className="text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-indigo-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-bold mb-2">Featured Analysis</h3>
                <p className="text-gray-600">In-depth research and market insights from our investment team</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="container mx-auto px-4 pb-8">
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition duration-300 ${
                activeCategory === category
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map(post => (
            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <div className="h-48 bg-indigo-100 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="p-6">
                <span className="inline-block bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full uppercase font-semibold tracking-wide mb-2">
                  {post.category}
                </span>
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <button className="mt-4 text-indigo-600 hover:text-indigo-800 font-medium transition duration-300">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-indigo-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Get Weekly Investment Insights</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Join our newsletter to receive the latest market analysis, investment strategies, and portfolio tips directly to your inbox.
          </p>
          <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-grow py-3 px-4 rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-r-md font-medium transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                <span className="text-xl font-bold">InvestWise</span>
              </div>
              <p className="text-gray-400">
                Empowering investors with data-driven insights and intelligent portfolio management.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Research</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Guides</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Webinars</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Press</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Disclosures</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Regulatory</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>© 2024 InvestWise. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default InvestmentBlog;