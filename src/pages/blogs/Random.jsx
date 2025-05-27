import { useState, useEffect } from 'react';
import { 
  FiShare2, FiMessageSquare, FiChevronRight, 
  FiClock, FiCalendar, FiArrowUp 
} from 'react-icons/fi';
import { 
  FaBitcoin, FaEthereum, FaRegBookmark, 
  FaBookmark, FaLinkedin, FaTwitter, FaFacebook 
} from 'react-icons/fa';
import { RiArrowRightUpLine } from 'react-icons/ri';
import { TbChartArcs } from 'react-icons/tb';

const PremiumBlogPost = () => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(142);
  const [comment, setComment] = useState('');
  const [activeTab, setActiveTab] = useState('article');
  const [readingProgress, setReadingProgress] = useState(0);
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Calculate reading progress and scroll visibility
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      setReadingProgress((scrollPosition / totalHeight) * 100);
      setShowScrollButton(scrollPosition > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
    
    // Trigger animation
    const likeBtn = document.getElementById('like-btn');
    if (likeBtn) {
      likeBtn.classList.add('animate-pulse');
      setTimeout(() => likeBtn.classList.remove('animate-pulse'), 300);
    }
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    // Add your comment submission logic here
    setComment('');
  };

  const shareArticle = (platform) => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent('Cryptocurrency: Risk vs Reward in Modern Portfolios');
    const text = encodeURIComponent('Expert analysis on balancing crypto investments in your portfolio');

    switch(platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}&summary=${text}`, '_blank');
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
        break;
      default:
        if (navigator.share) {
          navigator.share({
            title: title,
            text: text,
            url: url,
          }).catch(console.error);
        } else {
          alert(`Share this article: ${window.location.href}`);
        }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Set SEO meta tags
  useEffect(() => {
    // Title
    document.title = 'Cryptocurrency Risk vs Reward: Expert 2024 Portfolio Strategy | InvestWise Pro';
    
    // Description meta tag
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = 'Comprehensive analysis of cryptocurrency volatility and portfolio allocation strategies. Learn how to balance risk and reward with digital assets in 2024.';
    
    // News keywords for Google Discover
    let newsKeywords = document.querySelector('meta[name="news_keywords"]');
    if (!newsKeywords) {
      newsKeywords = document.createElement('meta');
      newsKeywords.name = 'news_keywords';
      document.head.appendChild(newsKeywords);
    }
    newsKeywords.content = 'cryptocurrency, bitcoin, portfolio, investment, risk, reward, 2024';
    
    // OG tags
    const ogTags = [
      { property: 'og:title', content: 'Cryptocurrency: Risk vs Reward in Modern Portfolios' },
      { property: 'og:description', content: 'Expert analysis on balancing crypto investments in your portfolio' },
      { property: 'og:image', content: 'https://yourdomain.com/images/crypto-risk-reward-2024.jpg' },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:type', content: 'article' },
      { property: 'og:url', content: window.location.href }
    ];
    
    ogTags.forEach(tag => {
      let metaTag = document.querySelector(`meta[property="${tag.property}"]`);
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('property', tag.property);
        document.head.appendChild(metaTag);
      }
      metaTag.content = tag.content;
    });

    // Article meta tags
    const articleTags = [
      { property: 'article:published_time', content: '2024-04-15T00:00:00Z' },
      { property: 'article:modified_time', content: '2024-05-24T00:00:00Z' },
      { property: 'article:author', content: 'Michael Johnson' },
      { property: 'article:section', content: 'Investing' }
    ];

    articleTags.forEach(tag => {
      let metaTag = document.querySelector(`meta[property="${tag.property}"]`);
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('property', tag.property);
        document.head.appendChild(metaTag);
      }
      metaTag.content = tag.content;
    });

    // Twitter card
    let twitterCard = document.querySelector('meta[name="twitter:card"]');
    if (!twitterCard) {
      twitterCard = document.createElement('meta');
      twitterCard.name = 'twitter:card';
      document.head.appendChild(twitterCard);
    }
    twitterCard.content = 'summary_large_image';

    // Schema.org markup
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      "headline": "Cryptocurrency: Risk vs Reward in Modern Portfolios",
      "description": "Expert analysis on balancing crypto investments in your portfolio",
      "image": "https://yourdomain.com/images/crypto-risk-reward-2024.jpg",
      "author": {
        "@type": "Person",
        "name": "Michael Johnson",
        "url": "https://yourdomain.com/authors/michael-johnson"
      },
      "datePublished": "2024-04-15T00:00:00Z",
      "dateModified": "2024-05-24T00:00:00Z",
      "publisher": {
        "@type": "Organization",
        "name": "InvestWise Pro",
        "logo": {
          "@type": "ImageObject",
          "url": "https://yourdomain.com/logo.jpg"
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": window.location.href
      }
    });
    document.head.appendChild(schemaScript);

    return () => {
      document.head.removeChild(schemaScript);
    };
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Reading Progress Bar */}
      <div className="fixed top-13 left-0 right-0 h-1 z-50">
        <div 
          className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-300 ease-out"
          style={{ width: `${readingProgress}%` }}
        ></div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollButton && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-indigo-600 text-white p-3 rounded-full shadow-lg z-40 hover:bg-indigo-700 transition-colors duration-200"
          aria-label="Scroll to top"
        >
          <FiArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Article Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Premium Breadcrumbs */}
        <div className="flex items-center text-sm text-gray-500 mb-8">
          <a href="/" className="hover:text-indigo-600 transition-colors duration-200">Home</a>
          <FiChevronRight className="mx-2 w-4 h-4" />
          <a href="/blog" className="hover:text-indigo-600 transition-colors duration-200">blog</a>
          <FiChevronRight className="mx-2 w-4 h-4" />
          <span className="text-gray-400">Risk Analysis</span>
        </div>

        {/* Article Header */}
        <article className="mb-16">
          <div className="mb-8">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center space-x-2">
                <span className="bg-indigo-100 text-indigo-800 text-xs px-3 py-1.5 rounded-full uppercase font-semibold tracking-wide border border-indigo-200">
                  Premium Research
                </span>
                <span className="bg-emerald-100 text-emerald-800 text-xs px-3 py-1.5 rounded-full uppercase font-semibold tracking-wide border border-emerald-200">
                  Updated Weekly
                </span>
              </div>
              {/* <button 
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={`p-2 rounded-full ${isBookmarked ? 'text-indigo-600 bg-indigo-50' : 'text-gray-400 hover:bg-gray-100'} transition-colors duration-200`}
                aria-label={isBookmarked ? "Remove bookmark" : "Bookmark article"}
              >
                {isBookmarked ? (
                  <FaBookmark className="w-5 h-5 fill-current" />
                ) : (
                  <FaRegBookmark className="w-5 h-5" />
                )}
              </button> */}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-gray-900">
              Cryptocurrency: Navigating Risk vs. Reward in 2024 Portfolios
            </h1>
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center shadow-inner">
                  <span className="text-indigo-800 font-medium text-lg">MJ</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Michael Johnson</p>
                  <p className="text-sm text-gray-500">Senior Crypto Analyst</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <FiCalendar className="text-gray-400" />
                  <span>April 15, 2024</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FiClock className="text-gray-400" />
                  <span>9 min read</span>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Image with Lazy Loading */}
          <figure className="mb-12 rounded-xl overflow-hidden relative group">
            <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-indigo-50 to-purple-50">
              <img 
                src="https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2232&q=80" 
                alt="Cryptocurrency risk vs reward analysis chart with Bitcoin and Ethereum symbols"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="absolute bottom-6 left-6 flex space-x-3">
              <div className="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center space-x-2 shadow-sm">
                <FaBitcoin className="text-amber-500 w-5 h-5" />
                <span className="text-sm font-medium">Bitcoin</span>
              </div>
              <div className="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center space-x-2 shadow-sm">
                <FaEthereum className="text-purple-500 w-5 h-5" />
                <span className="text-sm font-medium">Ethereum</span>
              </div>
            </div>
          </figure>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="lead text-gray-700 font-medium text-xl mb-8">
              The cryptocurrency market has evolved from a niche interest to a mainstream asset class, presenting both unprecedented opportunities and significant risks for investors. Our 2024 analysis reveals key insights for portfolio allocation in this dynamic sector.
            </p>
            
            {/* Key Takeaways */}
            <div className="bg-gradient-to-br from-gray-900 to-indigo-900 rounded-xl text-white p-8 mb-12 relative overflow-hidden">
              <div className="absolute -right-20 -top-20 h-64 w-64 bg-white/10 rounded-full"></div>
              <div className="relative">
                <h2 className="text-2xl font-bold mb-6 text-indigo-200 flex items-center">
                  <TbChartArcs className="mr-3 w-6 h-6" />
                  Key Takeaways
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-indigo-400 mt-0.5 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Optimal crypto allocation ranges from 1-5% for balanced portfolios, with aggressive investors going up to 10%</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-indigo-400 mt-0.5 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Dollar-cost averaging reduces volatility impact by 32% compared to lump-sum investments</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-indigo-400 mt-0.5 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Institutional adoption is driving correlation with traditional assets to 0.46, reducing diversification benefits</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Main Content Sections */}
            <section id="volatility-analysis">
              <h2 className="text-3xl font-bold mt-16 mb-6 text-gray-900">Volatility Analysis: 2020-2024 Trends</h2>
              <p>
                Cryptocurrencies remain the most volatile mainstream asset class, with Bitcoin's 30-day volatility averaging 4.2% compared to 0.9% for the S&P 500. However, our research shows this volatility has decreased by 38% since 2020, signaling market maturation.
              </p>
              
              {/* Interactive Chart Placeholder */}
              <div className="my-12 bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-gray-900">BTC vs S&P 500 Volatility (30-day rolling)</h3>
                  <div className="flex space-x-2">
                    <button className="text-xs px-3 py-1 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors duration-200">1Y</button>
                    <button className="text-xs px-3 py-1 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors duration-200">3Y</button>
                    <button className="text-xs px-3 py-1 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors duration-200">5Y</button>
                  </div>
                </div>
                <div className="h-64 bg-gradient-to-b from-indigo-50 to-white rounded-lg flex items-center justify-center text-gray-400">
                  [Interactive Chart Placeholder]
                </div>
                <div className="mt-4 text-sm text-gray-500 text-center">
                  Hover over chart to explore volatility trends. Data source: InvestWise Pro Research
                </div>
              </div>
            </section>

            <section id="portfolio-framework">
              <h2 className="text-3xl font-bold mt-16 mb-6 text-gray-900">Portfolio Construction Framework</h2>
              <p>
                Our proprietary framework evaluates crypto allocation across three dimensions: risk tolerance, investment horizon, and portfolio diversification needs. The following matrix provides guidance based on investor profiles:
              </p>
              
              {/* Premium Table */}
              <div className="my-12 overflow-hidden rounded-xl border border-gray-200 shadow-sm">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Risk Profile</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Allocation</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rebalancing</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Asset Mix</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50 transition-colors duration-150">
                      <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Conservative</td>
                      <td className="px-6 py-4 whitespace-nowrap">1-2%</td>
                      <td className="px-6 py-4 whitespace-nowrap">Quarterly</td>
                      <td className="px-6 py-4 whitespace-nowrap">BTC 70%, ETH 30%</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-150">
                      <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Moderate</td>
                      <td className="px-6 py-4 whitespace-nowrap">3-5%</td>
                      <td className="px-6 py-4 whitespace-nowrap">Monthly</td>
                      <td className="px-6 py-4 whitespace-nowrap">BTC 50%, ETH 30%, Altcoins 20%</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-150">
                      <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Aggressive</td>
                      <td className="px-6 py-4 whitespace-nowrap">5-10%</td>
                      <td className="px-6 py-4 whitespace-nowrap">Weekly</td>
                      <td className="px-6 py-4 whitespace-nowrap">BTC 30%, ETH 30%, Altcoins 40%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Expert Quote */}
            <div className="my-12 bg-white border border-indigo-100 rounded-xl p-8 shadow-sm relative overflow-hidden">
              <div className="absolute -right-10 -top-10 h-32 w-32 bg-indigo-100 rounded-full opacity-20"></div>
              <div className="relative">
                <div className="text-5xl text-indigo-100 absolute -left-4 -top-4">"</div>
                <blockquote className="text-xl font-medium text-gray-700 mb-6 relative">
                  The institutionalization of crypto markets is creating more stable valuation frameworks, but investors should maintain disciplined allocation strategies to manage tail risks. Our research shows that quarterly rebalancing captures 78% of upside while limiting downside exposure.
                </blockquote>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center mr-4">
                    <span className="text-indigo-800 font-medium">LT</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Lisa Thompson</p>
                    <p className="text-sm text-gray-500">Chief Investment Officer, Digital Assets</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Conclusion */}
            <section id="conclusion">
              <h2 className="text-3xl font-bold mt-16 mb-6 text-gray-900">Conclusion & Recommendations</h2>
              <p>
                Cryptocurrencies represent a high-risk, high-reward proposition that demands careful consideration. Based on our 2024 analysis, we recommend:
              </p>
              <ol className="my-6 space-y-3">
                <li className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-800 font-medium rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0">1</span>
                  <span>Start with a 1-2% allocation and increase gradually as you gain comfort</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-800 font-medium rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0">2</span>
                  <span>Implement dollar-cost averaging to mitigate timing risk</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-800 font-medium rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0">3</span>
                  <span>Rebalance quarterly to maintain target allocations</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-800 font-medium rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0">4</span>
                  <span>Focus on Bitcoin and Ethereum for core holdings (80%+)</span>
                </li>
              </ol>
              <p className="mt-6">
                As the asset class matures, we expect volatility to decrease while institutional participation increases—potentially improving the risk-reward profile over time. Investors should stay informed through our weekly crypto briefings.
              </p>
            </section>
          </div>
        </article>

        {/* Engagement & Sharing */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
            <div className="flex items-center space-x-6">
              <button 
                id="like-btn"
                onClick={handleLike}
                className={`flex items-center space-x-2 ${isLiked ? 'text-indigo-600' : 'text-gray-500 hover:text-indigo-600'} transition-colors duration-200`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${isLiked ? 'fill-current' : ''}`} viewBox="0 0 20 20" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={isLiked ? 0 : 1.5} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
                <span className="font-medium">{likes} Likes</span>
              </button>
              
              <button className="flex items-center space-x-2 text-gray-500 hover:text-indigo-600 transition-colors duration-200">
                <FiMessageSquare className="w-6 h-6" />
                <span className="font-medium">24 Comments</span>
              </button>
            </div>
            
            <div className="flex items-center space-x-3">
              <span className="text-gray-500 font-medium">Share:</span>
              <button 
                onClick={() => shareArticle('twitter')}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors duration-200"
                aria-label="Share on Twitter"
              >
                <FaTwitter className="w-5 h-5" />
              </button>
              <button 
                onClick={() => shareArticle('linkedin')}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors duration-200"
                aria-label="Share on LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </button>
              <button 
                onClick={() => shareArticle('facebook')}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors duration-200"
                aria-label="Share on Facebook"
              >
                <FaFacebook className="w-5 h-5" />
              </button>
              <button 
                onClick={() => shareArticle()}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors duration-200"
                aria-label="Share via other methods"
              >
                <FiShare2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Tags for SEO */}
        <div className="mb-16">
          <h3 className="text-sm font-medium text-gray-500 mb-3">TOPICS</h3>
          <div className="flex flex-wrap gap-3">
            {[
              'Cryptocurrency Investing',
              'Portfolio Management',
              'Risk Analysis',
              'Bitcoin',
              'Ethereum',
              'Digital Assets',
              'Blockchain Technology',
              '2024 Market Trends'
            ].map(tag => (
              <a 
                key={tag} 
                href={`/tags/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                className="bg-gray-100 text-gray-800 text-sm px-4 py-2 rounded-full border border-gray-200 hover:bg-gray-200 transition-colors duration-200"
              >
                {tag}
              </a>
            ))}
          </div>
        </div>

        {/* Author Bio with Schema Markup */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-16 border border-gray-200" itemScope itemType="https://schema.org/Person">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-shrink-0">
              <div className="h-24 w-24 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center shadow-inner">
                <span className="text-indigo-800 font-medium text-2xl" itemProp="givenName">MJ</span>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2" itemProp="name">About the Author: Michael Johnson</h3>
              <p className="text-gray-700 mb-4" itemProp="description">
                Michael Johnson is a Senior Crypto Analyst at InvestWise Pro with over 8 years of experience in digital asset research. He leads our cryptocurrency investment strategy and has been featured in CoinDesk, Bloomberg, and The Wall Street Journal. Michael holds a CFA charter and specializes in volatility analysis.
              </p>
              <div className="flex items-center space-x-4">
                <a 
                  href="/authors/michael-johnson" 
                  className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center space-x-1 transition-colors duration-200"
                  itemProp="url"
                >
                  <span>View all articles</span>
                  <RiArrowRightUpLine className="w-4 h-4" />
                </a>
                <a 
                  href="https://twitter.com/michaeljohnson" 
                  className="text-gray-500 hover:text-indigo-600 transition-colors duration-200"
                  aria-label="Michael Johnson on Twitter"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Related Articles for Engagement */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Continue Reading</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "The Institutionalization of Crypto Markets",
                excerpt: "How hedge funds and corporations are changing the digital asset landscape",
                category: "Market Trends",
                date: "May 10, 2024",
                readTime: "11 min read",
                premium: true
              },
              {
                title: "Tax-Efficient Crypto Investing Strategies",
                excerpt: "Minimizing tax liabilities while maximizing returns in digital assets",
                category: "Investment Strategies",
                date: "May 2, 2024",
                readTime: "8 min read",
                premium: false
              }
            ].map((article, index) => (
              <article key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200 group">
                <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-gray-50 to-indigo-50 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
                  {article.premium && (
                    <div className="absolute bottom-4 left-4 z-20">
                      <span className="bg-white text-xs px-2 py-1 rounded font-medium">Premium</span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full uppercase font-semibold tracking-wide mb-3">
                    {article.category}
                  </span>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-200">
                    <a href="#">{article.title}</a>
                  </h4>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>{article.date}</span>
                    <span className="mx-2">•</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Newsletter Signup with Schema */}
        <div className="bg-gradient-to-r from-indigo-900 to-purple-900 rounded-2xl p-8 text-white overflow-hidden relative mb-16">
          <div className="absolute -right-20 -top-20 h-64 w-64 bg-white/10 rounded-full"></div>
          <div className="absolute -left-20 -bottom-20 h-64 w-64 bg-indigo-700/20 rounded-full"></div>
          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Get Our Weekly Crypto Briefing</h3>
            <p className="text-indigo-200 mb-8">
              Join 25,000+ investors receiving our exclusive market analysis and portfolio strategies every Thursday.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
              <button
                type="submit"
                className="bg-white text-indigo-900 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors duration-200 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </main>

      {/* Sticky Bottom Bar for Mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-3 px-4 shadow-lg z-40">
        <div className="flex justify-between items-center">
          <button 
            onClick={handleLike}
            className={`flex flex-col items-center ${isLiked ? 'text-indigo-600' : 'text-gray-500'}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${isLiked ? 'fill-current' : ''}`} viewBox="0 0 20 20" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={isLiked ? 0 : 1.5} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
            </svg>
            <span className="text-xs mt-1">{likes}</span>
          </button>
          
          <button className="flex flex-col items-center text-gray-500">
            <FiMessageSquare className="w-6 h-6" />
            <span className="text-xs mt-1">24</span>
          </button>
          
          <button 
            onClick={() => setIsBookmarked(!isBookmarked)}
            className={`flex flex-col items-center ${isBookmarked ? 'text-indigo-600' : 'text-gray-500'}`}
          >
            {isBookmarked ? (
              <FaBookmark className="w-6 h-6 fill-current" />
            ) : (
              <FaRegBookmark className="w-6 h-6" />
            )}
            <span className="text-xs mt-1">Save</span>
          </button>
          
          <button 
            onClick={() => shareArticle()}
            className="flex flex-col items-center text-gray-500"
          >
            <FiShare2 className="w-6 h-6" />
            <span className="text-xs mt-1">Share</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PremiumBlogPost;