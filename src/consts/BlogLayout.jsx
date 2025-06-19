// BlogLayout.jsx
import {
  FiChevronRight,
  FiCalendar,
  FiClock,
  FiArrowUp,
  FiShare2,
  FiMessageSquare,
} from "react-icons/fi";
import {
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaBookmark,
  FaRegBookmark,
} from "react-icons/fa";

import { Helmet } from "react-helmet-async"; // for SEO, Schema Markup, etc.
import { useEffect, useState } from "react";
import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { blogPosts } from "./BlogPost";

const BlogLayout = ({
  slug,
  title,
  description,
  author,
  role,
  date,
  readTime,
  image,
  tags,
  children,
  isPremium = false,
  isWeeklyUpdated = false,
}) => {
  const [readingProgress, setReadingProgress] = useState(0);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(100);

  // const { slug } = useParams();
  const currentPost = blogPosts.find((post) => post.slug === slug);

  if (!currentPost) return <div>Post not found.</div>;

  // Filter out the current post
  const otherPosts = blogPosts.filter((p) => p.path !== currentPost.path);

  // Pick two random post
  const randomPosts = useMemo(() => {
    const shuffled = [...otherPosts].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 2); // get 2 random articles
  }, [currentPost.path]);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      setReadingProgress((scrollPosition / totalHeight) * 100);
      setShowScrollButton(scrollPosition > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes((prev) => (isLiked ? prev - 1 : prev + 1));
  };

  const shareArticle = (platform) => {
    const currentUrl = window.location.href;
    const encodedUrl = encodeURIComponent(currentUrl);
    const encodedTitle = encodeURIComponent(title);

    switch (platform) {
      case "twitter":
        window.open(
          `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
          "_blank"
        );
        break;
      case "linkedin":
        window.open(
          `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`,
          "_blank"
        );
        break;
      case "facebook":
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
          "_blank"
        );
        break;
      default:
        if (navigator.share) {
          navigator
            .share({
              title: title,
              text: metaDescription || excerpt,
              url: currentUrl,
            })
            .catch(console.error);
        } else {
          // Fallback for desktop browsers
          navigator.clipboard
            .writeText(currentUrl)
            .then(() => {
              alert("Link copied to clipboard!");
            })
            .catch(() => {
              // Final fallback if clipboard API fails
              prompt("Copy this link to share:", currentUrl);
            });
        }
    }
  };

  // Meta description from the post itself not from common Blog home page (blogpost)
  const metaDescription = description;

  // ISO date format for structured data
  const dateISO = new Date(date).toISOString();
  const modISO = new Date("2025-06-16").toISOString();

  // Generate excerpt from first paragraph if no description
  const excerpt = useMemo(() => {
    if (metaDescription) return metaDescription;
    const firstPara = children.props.children.find(
      (child) => child.type === "p"
    );
    return firstPara?.props.children.substring(0, 160) + "...";
  }, [metaDescription, children]);

  return (
    <div className="bg-gray-50 text-night min-h-screen">
      <Helmet>
        <title>{title}</title>

        <meta
          name="description"
          content={metaDescription || `${title} - ${excerpt}`}
        />
        <meta name="keywords" content={tags.join(", ")} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
        />

        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={metaDescription || excerpt} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={`https://www.sipgo.in/blog/${slug}`} />
        <meta property="og:type" content="article" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={metaDescription || excerpt} />
        <meta name="twitter:image" content={image} />

        {/* Canonical */}
        <link rel="canonical" href={`https://www.sipgo.in/blog/${slug}`} />

        {/* Artical Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: title,
            description: metaDescription || excerpt,
            author: {
              "@type": "Person",
              name: author,
              url: "https://www.sipgo.in/",
            },
            datePublished: dateISO,
            dateModified: modISO,
            image: image,
            publisher: {
              "@type": "Organization",
              name: "SIPGo",
              logo: {
                "@type": "ImageObject",
                url: "https://www.sipgo.in/logo.png",
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://www.sipgo.in/blog/${slug}`,
            },
            keywords: tags.join(", "),
            articleBody: excerpt, // Consider adding full text for better SEO
          })}
        </script>

        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "@id": `https://www.sipgo.in/blog/${slug}`,
            name: "Each Blogs Navigation Path",
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
                item: "https://www.sipgo.in/blog",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: title,
                item: `https://www.sipgo.in/blog/${slug}`,
              },
            ],
          })}
        </script>
      </Helmet>

      {/* Progress bar */}
      <div
        className="fixed top-13 left-0 right-0 h-1 bg-indigo-600 z-50"
        style={{ width: `${readingProgress}%` }}
      />
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-indigo-600 text-white p-3 rounded-full shadow-lg z-50 hover:bg-indigo-700"
          aria-label="Scroll to top"
        >
          <FiArrowUp className="w-5 h-5" />
        </button>
      )}

      <main className="max-w-4xl mx-auto px-2 sm:px-4 py-6 sm:py-12">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-500 mb-4 sm:mb-8">
          <a href="/" className="hover:text-indigo-600">
            Home
          </a>
          <FiChevronRight className="mx-2 w-4 h-4" />
          <a href="/blog" className="hover:text-indigo-600">
            Blog
          </a>
          <FiChevronRight className="mx-2 w-4 h-4" />
          <span className="text-gray-400 truncate">{title}</span>
        </div>

        {/* Header */}
        <div className="mb-4 sm:mb-6">
          <div className="flex justify-between items-start mb-4">
            <div className="flex space-x-2">
              {isPremium && (
                <span className="bg-indigo-100 text-indigo-800 text-xs px-3 py-1.5 rounded-full border border-indigo-200">
                  Premium Research
                </span>
              )}
              {isWeeklyUpdated && (
                <span className="bg-emerald-100 text-emerald-800 text-xs px-3 py-1.5 rounded-full border border-emerald-200">
                  Updated Weekly
                </span>
              )}
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            {title}
          </h1>

          <div className="flex sm:flex-row flex-col space-y-4 sm:space-y-0 justify-between text-sm text-gray-500">
            <div className="flex items-center space-x-4">
              <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                <span className="text-indigo-800 font-semibold tracking-wider text-lg">
                  {author
                    .split(" ")
                    .map((namePart) => namePart[0])
                    .join("")
                    .toUpperCase()}
                </span>
              </div>
              <div>
                <p className="font-medium text-gray-900">{author}</p>
                {role && <p className="text-gray-500 text-sm">{role}</p>}
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <FiCalendar /> <span>{currentPost.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <FiClock /> <span>{currentPost.readTime}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Image */}
        {image && (
          <figure className="mb-4 sm:mb-6">
            <img
              src={image}
              alt={`Illustration image for ${title}`} // More descriptive alt text
              className="w-full rounded-xl shadow-md"
              loading="lazy"
            />
          </figure>
        )}

        {/* Content */}
        <article className="prose prose-lg max-w-none">{children}</article>

        {/* Engagement & Sharing */}
        <div className="mb-6 sm:mb-12">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
            <div className="flex items-center space-x-3">
              <span className="text-gray-500 font-medium">Share:</span>
              <button
                onClick={() => shareArticle("twitter")}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors duration-200"
                aria-label="Share on Twitter"
              >
                <FaTwitter className="w-5 h-5" />
              </button>
              <button
                onClick={() => shareArticle("linkedin")}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors duration-200"
                aria-label="Share on LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </button>
              <button
                onClick={() => shareArticle("facebook")}
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

        {/* Tags */}
        {tags && (
          <div className="my-6 sm:my-10">
            <div className="flex flex-wrap gap-3">
              {tags.map((tag) => (
                <a
                  key={tag}
                  // href={`/tags/${tag.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full"
                  // aria-label={`Posts tagged with ${tag}`}
                >
                  #{tag}
                </a>
              ))}
            </div>
          </div>
        )}

        {randomPosts && (
          <div className="my-6 sm:my-10">
            <h3 className="text-2xl font-bold mb-8">You Might Also Like</h3>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              {randomPosts.map((post) => (
                <Link key={post.path} to={post.path}>
                  <article className="flex flex-col h-full bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200 group">
                    <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                      <img
                        src={post.image}
                        alt={`Illustration image for ${post.title}`}
                        className="w-full h-46 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="px-4 py-4">
                      <span className="inline-block bg-indigo-50 text-indigo-600 text-xs px-2 py-1 rounded-md tracking-wide mb-3">
                        {post.tag}
                      </span>
                      <h4 className="text-base md:text-lg font-bold group-hover:text-indigo-600 transition-colors duration-200 md:min-h-14 mb-1">
                        {post.title}
                      </h4>
                      <p className="text-gray-600 mb-2 flex-grow">
                        {post.description}
                      </p>
                      <div className="flex justify-between items-center text-sm text-gray-500">
                        <span>{post.date}</span>
                        {/* <span className="mx-2">•</span> */}
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default BlogLayout;
