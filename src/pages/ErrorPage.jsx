import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async"; // for SEO, Schema Markup, etc.
import img from "../assets/icons/bh2.jpg"; // Galaxy background image
import vid from "../assets/icons/sky.mp4"; // Optional video background
import aud from "../assets/icons/ds.mp3"; // Optional background music
import MeteorEffect from "./Meteor";

const ErrorPage = () => {
  const [countdown, setCountdown] = useState(10); // Initialize the countdown to 10
  const navigate = useNavigate(); // Initialize the navigate function

  // const playBackgroundMusic = () => {
  //   const audio = new Audio(ds); // Replace with your music file
  //   audio.loop = true; // Loop the music
  //   audio.play().catch((error) => {
  //     console.error("Failed to play audio:", error);
  //   });
  // };

  useEffect(() => {

    // Set 404 status (works with Netlify's redirect setup)
    // if (typeof window !== 'undefined') {
      window.http404 = () => {}; // Marker for Netlify
    // }

    // Start a countdown timer
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev === 1) {
          clearInterval(timer);
          navigate("/", { replace: true }); // Redirect to homepage when countdown reaches 0
        }
        return prev - 1;
      });
    }, 1000); // Update countdown every second

    // Cleanup the timer on component unmount
    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-black overflow-hidden">
      {/* For SEO */}
      <Helmet>
        <title>404 Page Not Found | SIPGo</title>
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://www.sipgo.in/404" /> {/* Self-referential */}
      </Helmet>

      {/* Background Image or Video */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src={img}
          alt="Galaxy Background"
          className="w-full h-full object-cover opacity-70" // Adjusted opacity for better readability
        />
        {/* Optional: Use a video background instead */}
        {/* <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover opacity-100"
        >
          <source src={vid} type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
      </div>
      {/* Semi-Transparent Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-0"></div>
      {/* <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-black via-transparent to-black opacity-80 z-0"></div> */}
      {/* Content */}
      <div className="relative z-10 text-white text-center px-4 sm:px-6 md:px-8 lg:px-12 max-w-4xl mx-auto">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 mb-6 text-glow">
          404 - Lost in Space!
        </h1>

        <p className="text-base vs:text-lg sm:text-xl mb-4 leading-relaxed">
          It seems you've drifted into a black hole. The planet you're searching
          for has vanished into the cosmos.
        </p>
        <p className="text-base vs:text-lg sm:text-xl mb-6 leading-relaxed">
          In the vast expanse of the web, some stars and planets just disappear.
          But don't worry, you can always navigate back to our galaxy!
        </p>

        {/* Countdown Section */}
        <div
          aria-live="polite"
          className="flex justify-center items-center mb-6 text-base vs:text-lg sm:text-xl"
        >
          Redirecting in {countdown} seconds...
        </div>

        {/* Manual Redirect Link */}
        <div className="text-center">
          <p className="text-sm sm:text-base text-gray-300">
            Still lost in space? Click{" "}
            <a
              href="/"
              className="text-blue-400 hover:text-blue-300 transition-colors duration-300 ease-in-out font-semibold"
            >
              here
            </a>{" "}
            to return to safety. 🚀
          </p>
        </div>
      </div>
      {/* Stars Animation (Optional) */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <MeteorEffect />
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-star"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ErrorPage;
