// ParticlesBackground.js
import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const particlesInit = async (main) => {
    // You can customize the particles setup here.
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: {
          color: {
            value: "#0a192f", // Background color (navy)
          },
        },
        particles: {
          number: {
            value: 80, // Number of particles
          },
          color: {
            value: "#64FFDA", // Neon green color
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.5,
            random: true,
          },
          size: {
            value: 3,
            random: true,
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            outMode: "bounce",
          },
          links: {
            enable: true,
            distance: 150,
            color: "#64FFDA",
            opacity: 0.4,
            width: 1,
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onHover: {
              enable: true,
              mode: "bubble", // This will create the hollow space around the cursor
            },
            onClick: {
              enable: true,
              mode: "repulse", // Makes particles repel on click
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 100,
              size: 10,
              duration: 2,
              opacity: 0.8,
              speed: 3,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
};

export default ParticlesBackground;
