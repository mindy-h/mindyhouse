# Martech Component Library - Figma Design Implementation

This project implements the "Read Me" page design from Figma, showcasing the Martech component library landing page.

## Features

- **Hero Section**: Welcome message with gradient text and background image
- **Feature Cards**: Three main benefits (Build smarter, Collaborate efficiently, Contribute back)
- **How It Works**: Two-column layout explaining Agency and Martech workflows
- **Library Structure**: Table showing Components, Patterns, and Brand Layer
- **Responsive Design**: Mobile-friendly layout with breakpoints

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── ReadMe.jsx          # Main component
│   └── ReadMe.css          # Component styles
├── App.jsx                 # App component
├── main.jsx               # Entry point
└── index.css              # Global styles
```

## Design Implementation

The design is implemented using:
- **React 18** for component structure
- **CSS3** with custom properties and modern layout techniques
- **Inter font family** for typography
- **Responsive design** with mobile-first approach
- **CSS Grid and Flexbox** for layouts
- **CSS gradients** for visual effects

## Key Features

1. **Exact Visual Match**: Faithfully recreates the Figma design
2. **Responsive**: Works on desktop, tablet, and mobile devices
3. **Accessible**: Proper semantic HTML and ARIA attributes
4. **Performance**: Optimized images and efficient CSS
5. **Maintainable**: Clean, well-structured code

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Customization

The design uses CSS custom properties for easy theming. You can modify colors, fonts, and spacing by updating the CSS variables in the stylesheets.
