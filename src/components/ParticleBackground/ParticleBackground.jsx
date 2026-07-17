import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

function ParticleBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="footerParticles"
      init={particlesInit}
      options={{
        fullScreen: false,
        fpsLimit: 60,

        particles: {
          number: {
            value: 60,
            density: {
              enable: true,
            },
          },

          color: {
            value: "#3b82f6",
          },

          links: {
            enable: true,
            color: "#60a5fa",
            distance: 150,
            opacity: 0.25,
            width: 1,
          },

          move: {
            enable: true,
            speed: 1,
          },

          opacity: {
            value: 0.5,
          },

          size: {
            value: {
              min: 2,
              max: 4,
            },
          },
        },

        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
          },

          modes: {
            grab: {
              distance: 180,
              links: {
                opacity: 0.7,
              },
            },
          },
        },

        detectRetina: true,
      }}
    />
  );
}

export default ParticleBackground;