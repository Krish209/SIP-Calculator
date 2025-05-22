import { Link } from "react-router-dom";

const blogPosts = [
  {
    title: "How to Get Monthly Pension from NPS",
    path: "/blog/how-to-achieve-a-monthly-pension-of-50k-with-nps",
    description:
      "Learn how NPS can provide you with a regular monthly income after retirement.",
    tag: "Retirement",
    date: "May 10, 2025",
  },
  {
    title: "SIP vs Lumpsum – Which is Better?",
    path: "/blog/sip-vs-lumpsum",
    description:
      "Compare Systematic Investment Plans and lump sum investments to make the right choice.",
    tag: "Investment",
    date: "May 5, 2025",
  },
  {
    title: "Why Risk is a Part of Investing",
    path: "/blog/why-risk-is-part-of-investing",
    description:
      "Understand the relationship between risk and returns in investing.",
    tag: "Finance Basics",
    date: "April 28, 2025",
  },
  {
    title: "Investing vs Gambling – Know the Difference",
    path: "/blog/investing-vs-gambling-whats-the-real-difference",
    description:
      "See why investing and gambling are not the same—even if both involve risk.",
    tag: "Finance Mindset",
    date: "April 20, 2025",
  },
  {
    title: "How to Beat Inflation with Smart Investing",
    path: "/blog/beating-inflation",
    description:
      "Learn how to protect your money from inflation by making the right investments.",
    tag: "Wealth Building",
    date: "April 15, 2025",
  },
  {
    title: "What are Stocks, ETFs, Mutual Funds, and Bonds?",
    path: "/blog/what-are-stocks-etfs-mutual-funds-and-bonds",
    description:
      "A quick guide to different types of financial instruments for new investors.",
    tag: "Education",
    date: "April 1, 2025",
  },
  {
    title: "How to Create a Passive Income",
    path: "/blog/how-to-create-a-passive-income-with-investments",
    description:
      "Explore various strategies to generate income with minimal ongoing effort.",
    tag: "Passive Income",
    date: "March 25, 2025",
  },
  {
    title: "How Does Compounding Work?",
    path: "/blog/how-does-compounding-work",
    description:
      "Understand the powerful effect of compounding on your investments.",
    tag: "Compounding",
    date: "March 15, 2025",
  },
];

function BlogHome() {
  return (
    <div className="min-h-screen text-primary bg-gradient-to-b from-indigo-50 to-white">
      <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12">
          📚 Our Financial Blog
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {blogPosts.map((post, index) => (
            <Link
              key={index}
              to={post.path}
              className="bg-white p-5 sm:p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-indigo-500 group"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-indigo-600 font-normal sm:font-medium bg-indigo-50 px-2 py-0.5 rounded-md">
                  {post.tag}
                </span>
                <span className="text-xs text-gray-500">{post.date}</span>
              </div>
              <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 group-hover:text-indigo-600 transition">
                {post.title}
              </h2>
              <p className="mt-2 text-gray-600 text-sm">{post.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default BlogHome;
