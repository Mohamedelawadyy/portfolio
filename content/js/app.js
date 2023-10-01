particlesJS(
  "particles-js",

  {
    particles: {
      number: {
        value: 255,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#f1f1f1",
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#ffc311",
        },
        polygon: {
          nb_sides: 5,
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100,
        },
      },
      opacity: {
        value: 0.3,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 5,
        random: true,
        anim: {
          enable: false,
          speed: 60,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffc311",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 200,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
    config_demo: {
      hide_card: false,
      background_color: "#b61924",
      background_image: "",
      background_position: "50% 50%",
      background_repeat: "no-repeat",
      background_size: "cover",
    },
  }
);

const tabBtns = document.querySelectorAll(".tab-btn");
const aboutSection = document.querySelector("#about");
const resumeSection = document.querySelector("#resume");

tabBtns.forEach((btn) => {
  btn.addEventListener("click", () => handleTabNavigation(btn));
});

function handleTabNavigation(currentBtn) {
  const tabContainers = document.querySelectorAll(".tab-container");
  const currentContainer = document.querySelector(
    `.${currentBtn.dataset.tab}-tab-container`
  );
  console.log(currentBtn.classList.contains("active"));
  //this is throttle technique
  // to minimize unnecessary function invocations when using event listeners
  let isActive = false;

  if (currentBtn.classList.contains("active")) {
    isActive = true;
    return null;
  } else {
    isActive = false;
    tabContainers.forEach((container) => {
      container.classList.remove("active");
    });
    currentContainer.classList.add("active");

    tabBtns.forEach((btn) => {
      btn.classList.remove("active");
    });
    currentBtn.classList.add("active");
  }
}

/* Filter Variables */
const filterItems = document.querySelectorAll("[data-filter-item]");
const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
};

// function getAllRepo() {
//   const res = fetch(
//     "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"
//   );
//   const data = res.json();
//   console.log(data);
//   return data;
// }
// getAllRepo();
const accessToken =
  "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";
const username = "Mohamedelawadyy";

fetch(`https://api.github.com/users/${username}/repos`, {
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
})
  .then((response) => response.json())
  .then((data) => {
    // Process the repository data
    console.log(data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
