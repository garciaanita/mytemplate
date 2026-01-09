# Portfolio Template - Clean Anita Style :D

**Live Demo:** [https://garciaanita.github.io/mytemplate]

A minimal, elegant portfolio template for graphic designers and creative studios, inspired by contemporary design aesthetics with a touch of analogic essence ;D. Built with vanilla HTML, CSS, and JavaScript.

## ✨Some of the features here:

A clean, professional aesthetic with generous white space design.
**It's fully responsive** - Works seamlessly on desktop, tablet, and mobile
**It has smooth animations** - Intersection Observer API for scroll-triggered animations
**It's accessible** - Respects `prefers-reduced-motion` settings
**Has a fast loading** - No frameworks, pure vanilla JavaScript
**Includes a modular CSS** - Organized with `@import` for easy maintenance
**Project Modal System** - Dynamic project detail views
**Includes mobile navigation** - Smooth hamburger menu with overlay

## 🛠️ The tech stack:

- **HTML5** - Semantic markup
- **CSS3** - Modern CSS with custom properties, grid, and flexbox
- **JavaScript (ES6+)** - Vanilla JS, and no dependencies
- **Fluid typography as asked** - Using `clamp()` for responsive text
- **Intersection observer API** - For scroll animations

## 📁 The project structure is...

```
portfolio/
├── index.html              # Main HTML file
├── 404.html               # Custom error page
├── README.md              # This file
├── LICENSE                # MIT License
├── .gitignore            # Git ignore rules
├── assets/
│   ├── css/
│   │   ├── index.css     # Main CSS (imports others)
│   │   ├── base.css      # Reset & variables
│   │   ├── layout.css    # Structure & layout
│   │   └── components.css # UI components
│   ├── js/
│   │   └── main.js       # Main JavaScript
│   ├── images/           # Project images
│   └── fonts/            # Custom fonts (if any)
└── docs/                 # Documentation
```

## 🚀 Quick Start

### 1. Clone the repository

```bash
git clone https://github.com/your-username/portfolio.git
cd portfolio
```

### 2. Images adding

Project images in `assets/images/`

### 3. Customize content

to update the following just edit `index.html` :

- Studio name and contact information
- Project titles and descriptions
- About section content
- Social media links

### 4. Update project data

Edit `assets/js/main.js` in order to modify the `projectsData` object.

### 5. Deploy

#### GitHub Pages:

Site live at `https://garciaanita.github.io/mytemplate`

## 🎨 Customization

### Colors

CSS variables are mainly edited in `assets/css/base.css`:

```css
:root {
  --bg: #f5f5f0;
  --text: #1a1a1a;
  --accent: #a6ff00;
  --border: #d0d0d0;
  --gray: #e0e0e0;
}
```

### Typography

The template uses mainly `dm sans, sans-serif` and `jetbrains mono, monospace`.

### Layout

The spacing and grid ajusting is mainly in `assets/css/layout.css` and `assets/css/components.css`.

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels where appropriate
- Keyboard navigation support
- `prefers-reduced-motion` support for animations
- High contrast ratios for text
- Focus states for interactive elements

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

Contributions, issues, and feature requests are always welcome here! :D

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Contact

Ana García Peña

Project Link: [https://github.com/garciaanita/mytemplate](https://github.com/garciaanita/mytemplate)

## Acknowledgments

My design was initially inspired by [Simantic Studio](https://readymag.com/designs/5959211/)
