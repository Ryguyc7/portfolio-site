 particlesJS("particles-js", {
      particles: {
        number: {
          value: 200,
          density: {
            enable: true,
            value_area: 1000
          }
        },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: {
          value: 0.2,
          random: true
        },
        size: {
          value: 2,
          random: true
        },
        line_linked: {
          enable: true,
          distance: 80,
          color: "#ffffff",
          opacity: 1,
          width: 1
        },
        move: {
          enable: true,
          speed: 0.3,
          direction: "none",
          out_mode: "out"
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "grab"
          },
          onclick: {
            enable: false
          }
        },
        modes: {
          grab: {
            distance: 250,
            line_linked: {
              opacity: 1
            }
          }
        }
      },
      retina_detect: true
    });