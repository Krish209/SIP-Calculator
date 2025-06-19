import { Link } from "react-router-dom";
import { blogPosts } from "./BlogPost";
import { Helmet } from "react-helmet-async";

function BlogHome() {
  // SEO Meta Variables
  const pageTitle =
    "Financial Blog - Expert Investment Insights & Tips | SIPGo";
  const pageDescription =
    "Explore our financial blog for expert insights on SIP, mutual funds, tax planning, and wealth management strategies.";
  const canonicalUrl = "https://www.sipgo.in/blog";

  return (
    <div className="min-h-screen text-primary bg-gradient-to-b from-indigo-50 to-white">
      <Helmet>
        {/* Primary Meta Tags */}
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta
          name="keywords"
          content="financial blog, investment tips, SIP guide, mutual funds, tax planning"
        />
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="blog" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta
          property="og:image"
          content="https://www.sipgo.in/images/blog-social-preview.jpg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta
          name="twitter:image"
          content="https://www.sipgo.in/images/blog-social-preview.jpg"
        />

        {/* ========== SCHEMA MARKUP ========== */}
        {/* Blog Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "SIPGo Financial Blog",
            description: pageDescription,
            url: canonicalUrl,
            publisher: {
              "@type": "Organization",
              name: "SIPGo",
              logo: {
                "@type": "ImageObject",
                url: "https://www.sipgo.in/images/logo.png",
              },
            },
            dateModified: new Date().toISOString(),
          })}
        </script>

        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "@id": "https://www.sipgo.in/blog",
            name: "Home Blog Navigation Path",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://www.sipgo.in/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Blog",
                item: canonicalUrl,
              },
            ],
          })}
        </script>
      </Helmet>

      {/* Page Content */}
      <section className="max-w-7xl mx-auto py-8 md:py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 md:mb-12">
          📚 SIPGo Financial Blog
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="flex flex-col h-full bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200 group"
            >
              <Link to={post.path} className="flex flex-col h-full">
                <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                  <img
                    src={post.image}
                    alt={`Illustration image for ${post.title}`}
                    className="w-full h-46 object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                <div className="px-4 py-4 flex flex-col flex-grow">
                  <div className="flex justify-between items-center mb-2 text-sm text-gray-500">
                    <span className="text-indigo-600 font-medium bg-indigo-50 px-2 py-1 rounded-md text-xs">
                      {post.tag}
                    </span>
                    <div className="flex items-center gap-2 text-xs">
                      <span>{post.date}</span>
                      <span className="text-gray-300">•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <h2 className="text-base md:text-lg font-semibold group-hover:text-indigo-600 transition md:min-h-14 mb-1">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm">{post.description}</p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default BlogHome;
