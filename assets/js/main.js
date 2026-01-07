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

// Cerrar menú al hacer clic en un enlace
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
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
      "Una exploración profunda de la tipografía cinética en entornos de realidad mixta. Este proyecto fusiona algoritmos generativos con principios clásicos de diseño tipográfico, creando experiencias visuales que responden en tiempo real a datos biométricos del público.",
    client: "Art Basel Miami",
    year: "2039",
    services: "Motion Design<br>Interactive Installation<br>Typography",
    mainImage: "assets/images/project-1-detail.jpg",
    sideImage: "assets/images/project-1-side.jpg",
  },
  2: {
    title: "(Project Name) (Fecha)",
    description:
      "Sistema modular de diseño para ecosistemas de transporte inteligente. Desarrollamos una identidad visual completa que se adapta dinámicamente a diferentes contextos urbanos, manteniendo coherencia visual mientras responde a las necesidades locales.",
    client: "Berlin Transit Authority",
    year: "2041",
    services: "Graphic Design<br>Brand Identity<br>Wayfinding",
    mainImage: "assets/images/project-2-detail.jpg",
    sideImage: "assets/images/project-2-side.jpg",
  },
  3: {
    title: "(Project Name) (Fecha)",
    description:
      "Instalación interactiva que visualiza emociones colectivas mediante escultura lumínica. Utilizando sensores biométricos y machine learning, la obra responde en tiempo real a los estados emocionales del público, creando un diálogo visual entre tecnología y humanidad.",
    client: "Tokyo Digital Art Museum",
    year: "2038",
    services: "Installation Design<br>Interactive Art<br>Data Visualization",
    mainImage: "assets/images/project-3-detail.jpg",
    sideImage: "assets/images/project-3-side.jpg",
  },
  4: {
    title: "(Project Name) (Fecha)",
    description:
      "Manifesto visual sobre arquitectura regenerativa. Este proyecto editorial combina visualización de datos climáticos con narrativa visual poética, presentando soluciones de diseño sostenible para el futuro de nuestras ciudades.",
    client: "Amsterdam Architecture Biennale",
    year: "2040",
    services: "Editorial Design<br>Data Visualization<br>Art Direction",
    mainImage: "assets/images/project-4-detail.jpg",
    sideImage: "assets/images/project-4-side.jpg",
  },
  5: {
    title: "(Project Name) (Fecha)",
    description:
      "Identidad generativa para plataforma descentralizada de bienestar. El sistema visual evoluciona orgánicamente basándose en las interacciones de los usuarios, creando una marca viva que refleja la filosofía colaborativa de la plataforma.",
    client: "WellDAO Collective",
    year: "2037",
    services: "Brand Identity<br>Generative Design<br>UI/UX Design",
    mainImage: "assets/images/project-5-detail.jpg",
    sideImage: "assets/images/project-5-side.jpg",
  },
  6: {
    title: "(Project Name) (Fecha)",
    description:
      "Experiencia web inmersiva con storytelling paraláctico para narrativa de exploración espacial sostenible. Combinamos tecnología web avanzada con diseño cinematográfico para crear un viaje visual que inspira acción hacia un futuro espacial responsable.",
    client: "Nordic Space Agency",
    year: "2039",
    services: "Web Design<br>3D Animation<br>Interactive Storytelling",
    mainImage: "assets/images/project-6-detail.jpg",
    sideImage: "assets/images/project-6-side.jpg",
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
// Smooth Scroll
// ===================================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
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
