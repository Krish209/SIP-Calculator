import React, { useEffect } from "react";

const MeteorEffect = () => {
  useEffect(() => {
    // Create random meteors at random intervals
    const meteorCount = 5; // Number of meteors to generate
    const container = document.querySelector(".meteor-container");

    for (let i = 0; i < meteorCount; i++) {
      const meteor = document.createElement("div");
      meteor.classList.add("meteor");

      // Set random position and animation delay
      meteor.style.left = `${Math.random() * 100}vw`;
      meteor.style.animationDuration = `${Math.random() * 5 + 3}s`;

      container.appendChild(meteor);
    }
  }, []);

  return <div className="meteor-container"></div>;
};

export default MeteorEffect;
