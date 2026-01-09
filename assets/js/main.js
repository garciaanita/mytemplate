// ===================================
// MAIN.JS - JavaScript Principal
// ===================================

// ===================================
// Menú Móvil
// ===================================
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// ===================================
// Smooth Scroll para navegación
// ===================================
document.addEventListener("DOMContentLoaded", function () {
  // Seleccionar todos los enlaces que empiezan con #
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        // Cerrar menú móvil si está abierto
        nav.classList.remove("active");

        // Calcular posición con offset para el header
        const headerHeight = 80;
        const targetPosition =
          targetElement.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = targetPosition - headerHeight;

        // Scroll suave
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });

        console.log("Navegando a:", targetId);
      } else {
        console.error("Elemento no encontrado:", targetId);
      }
    });
  });
});

// Cerrar menú al hacer clic fuera
document.addEventListener("click", (e) => {
  if (
    nav.classList.contains("active") &&
    !nav.contains(e.target) &&
    !menuToggle.contains(e.target)
  ) {
    nav.classList.remove("active");
  }
});

// ===================================
// Datos de Proyectos
// ===================================
const projectsData = {
  1: {
    title: "(Project Name) (Fecha)",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    client: "(Nombre Cliente)",
    year: "(Fecha)",
    services:
      "Ex. Motion Design<br>Ex. Interactive Installation<br>Ex. Typography",
    mainImage: "assets/images/projectfoto.png",
    sideImage: "assets/images/projectfoto.png",
  },
  2: {
    title: "(Project Name) (Fecha)",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    client: "(Nombre Cliente)",
    year: "(Fecha)",
    services: "Ex. Graphic Design<br>Ex. Brand Identity<br>Ex. Wayfinding",
    mainImage: "assets/images/projectfoto.png",
    sideImage: "assets/images/projectfoto.png",
  },
  3: {
    title: "(Project Name) (Fecha)",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    client: "(Nombre Cliente)",
    year: "(Fecha)",
    services:
      "Ex. Installation Design<br>Ex. Interactive Art<br>Ex. Data Visualization",
    mainImage: "assets/images/projectfoto.png",
    sideImage: "assets/images/projectfoto.png",
  },
  4: {
    title: "(Project Name) (Fecha)",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    client: "(Nombre Cliente)",
    year: "(Fecha)",
    services:
      "Ex. Editorial Design<br>Ex. Data Visualization<br>Ex. Art Direction",
    mainImage: "assets/images/projectfoto.png",
    sideImage: "assets/images/projectfoto.png",
  },
  5: {
    title: "(Project Name) (Fecha)",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    client: "(Nombre Cliente)",
    year: "(Fecha)",
    services: "Ex. Brand Identity<br>Ex. Generative Design<br>Ex. UI/UX Design",
    mainImage: "assets/images/projectfoto.png",
    sideImage: "assets/images/projectfoto.png",
  },
  6: {
    title: "(Project Name) (Fecha)",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    client: "(Nombre Cliente)",
    year: "(Fecha)",
    services:
      "Ex. Web Design<br>Ex. 3D Animation<br>Ex. Interactive Storytelling",
    mainImage: "assets/images/projectfoto.png",
    sideImage: "assets/images/projectfoto.png",
  },
};

// ===================================
// Modal de Detalle de Proyecto
// ===================================
const projectCards = document.querySelectorAll(".project-card");
const detail = document.getElementById("detail");
const closeDetail = document.getElementById("closeDetail");

// Abrir detalle
projectCards.forEach((card) => {
  card.addEventListener("click", () => {
    const projectId = card.getAttribute("data-project");
    const project = projectsData[projectId];

    if (project) {
      // Actualizar contenido
      document.getElementById("detailTitle").textContent = project.title;
      document.getElementById("detailDescription").textContent =
        project.description;
      document.getElementById("detailClient").textContent = project.client;
      document.getElementById("detailYear").textContent = project.year;
      document.getElementById("detailServices").innerHTML = project.services;

      // Actualizar imágenes
      if (project.mainImage) {
        document.getElementById("detailMainImg").src = project.mainImage;
      }
      if (project.sideImage) {
        document.getElementById("detailSideImg").src = project.sideImage;
      }

      // Mostrar modal
      detail.classList.add("active");
      document.body.style.overflow = "hidden";
    }
  });
});

// Cerrar detalle
function closeDetailModal() {
  detail.classList.remove("active");
  document.body.style.overflow = "auto";
}

closeDetail.addEventListener("click", closeDetailModal);

// Cerrar con ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && detail.classList.contains("active")) {
    closeDetailModal();
  }
});

// Cerrar al hacer clic fuera
detail.addEventListener("click", (e) => {
  if (e.target === detail) {
    closeDetailModal();
  }
});

// ===================================
// Animaciones con Intersection Observer
// ===================================
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observar tarjetas con efecto escalonado
projectCards.forEach((card, index) => {
  card.style.transitionDelay = `${index * 0.1}s`;
  observer.observe(card);
});

// ===================================
// Inicialización
// ===================================
console.log("Portfolio initialized");
console.log(`${projectCards.length} projects loaded`);

//  ===================================
// Animación de favicon
// ====================================
const favicons = ["assets/favicons/dragon.png"];

let currentFavicon = 0;

setInterval(() => {
  currentFavicon = (currentFavicon + 1) % favicons.length;
  const link =
    document.querySelector("link[rel*='icon']") ||
    document.createElement("link");
  link.type = "image/png";
  link.rel = "icon";
  link.href = favicons[currentFavicon];
  document.head.appendChild(link);
}, 500); // Cambia cada 500ms

console.log("Portfolio initialized");
console.log(`${projectCards.length} projects loaded`);

// ===================================
// Icono Rebotando en Hero Section
// ===================================
const bouncingIcon = document.getElementById("bouncingIcon");

if (bouncingIcon) {
  // Posición inicial aleatoria
  let x = Math.random() * (window.innerWidth - 80);
  let y = Math.random() * (window.innerHeight - 80);

  // Velocidad inicial
  let speedX = 1;
  let speedY = 1;

  // Tamaño del icono
  const iconSize = 80;

  // Función para animar el icono
  function animateBounce() {
    // Obtener dimensiones del hero
    const hero = document.querySelector(".hero");
    if (!hero) return;

    const heroRect = hero.getBoundingClientRect();
    const maxX = heroRect.width - iconSize;
    const maxY = heroRect.height - iconSize;

    // Actualizar posición
    x += speedX;
    y += speedY;

    // Rebotar en los bordes horizontales
    if (x <= 0 || x >= maxX) {
      speedX = -speedX;
      x = x <= 0 ? 0 : maxX;
    }

    // Rebotar en los bordes verticales
    if (y <= 0 || y >= maxY) {
      speedY = -speedY;
      y = y <= 0 ? 0 : maxY;
    }

    // Aplicar nueva posición
    bouncingIcon.style.left = x + "px";
    bouncingIcon.style.top = y + "px";

    // Continuar animación
    requestAnimationFrame(animateBounce);
  }

  // Posición inicial
  bouncingIcon.style.left = x + "px";
  bouncingIcon.style.top = y + "px";

  // Iniciar animación
  animateBounce();

  // Recalcular en resize
  window.addEventListener("resize", () => {
    const hero = document.querySelector(".hero");
    if (!hero) return;

    const heroRect = hero.getBoundingClientRect();
    const maxX = heroRect.width - iconSize;
    const maxY = heroRect.height - iconSize;

    x = Math.min(x, maxX);
    y = Math.min(y, maxY);
  });
}
