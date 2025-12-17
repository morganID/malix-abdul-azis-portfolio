<div align="center">
<img width="1200" height="475" alt="Portfolio Banner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# 🚀 Malix Abdul Azis - Portfolio

A modern, interactive portfolio showcasing fullstack development expertise with cutting-edge animations and immersive user experiences.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-View%20Portfolio-blue?style=for-the-badge)](https://malix-abdul-azis.github.io)
[![GitHub Repository](https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github)](https://github.com/morganID/malix-abdul-azis-portfolio)

## ✨ Features

- 🎨 **Immersive Design** - Modern UI with dark/light mode support
- 🎭 **Advanced Animations** - Framer Motion powered interactions
- 🌟 **Interactive Elements** - 3D tilt effects and particle systems
- 📱 **Responsive Design** - Optimized for all devices
- 🎯 **Performance Optimized** - Fast loading with Vite bundling

## 🛠️ Tech Stack

### Frontend Framework
- **React 19** - Latest React with modern features
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool

### Animation & Styling
- **Framer Motion** - Advanced animation library
- **Tailwind CSS** - Utility-first CSS framework
- **Custom CSS Variables** - Dynamic theming system

### UI Components
- **Lucide React** - Beautiful icon library
- **Custom Fonts** - Inter, Space Grotesk, Rajdhani, Cinzel

## 🎨 Animation & Style Showcase

### Advanced Animation System

This portfolio features a comprehensive animation ecosystem designed to create an immersive and engaging user experience:

#### 1. **Neural Network Particle System**
- **Interactive Canvas Background**: Dynamic particle network that responds to mouse movement
- **Connection Lines**: Particles connect with animated lines that glow on hover
- **Repulsion Physics**: Particles move away from cursor creating fluid interactions
- **Screen Wrapping**: Infinite canvas effect with seamless particle movement

#### 2. **Text Animations**
- **Decryption Effect**: Hero title uses a Matrix-style text decryption animation
- **Gold Sheen Text**: Gradient text with animated shine effect using CSS keyframes
- **Shimmer Buttons**: Interactive buttons with sliding light effects
- **Typewriter Effects**: Sequential text reveals with smooth transitions

#### 3. **3D Interactive Elements**
- **Tilt Effects**: Cards and components tilt based on mouse position using Framer Motion
- **Perspective Transforms**: CSS 3D transforms create depth and immersion
- **Hover Transformations**: Scale, rotation, and glow effects on interaction

#### 4. **Particle Systems**
- **Gold Dust Particles**: Floating particles in project sections
- **Meteor Effects**: Diagonal animated elements across backgrounds
- **Twinkling Stars**: Animated star field in hero section
- **Floating Elements**: Various ambient particle effects

#### 5. **Scroll & Viewport Animations**
- **Scroll-triggered Reveals**: Elements animate in as they enter viewport
- **Staggered Animations**: Sequential reveals with calculated delays
- **Spring Physics**: Natural motion using spring-based animations

### Styling Architecture

#### Custom Theme System
```css
:root {
  --bg-color: #f8fafc;
  --surface-color: #ffffff;
  --text-color: #0f172a;
  --text-muted: #64748b;
  --border-color: #cbd5e1;
}

.dark {
  --bg-color: #050505;
  --surface-color: #0a0a0a;
  --text-color: #ffffff;
  --text-muted: #9ca3af;
  --border-color: rgba(255, 255, 255, 0.1);
}
```

#### Custom Animation Keyframes
```css
@keyframes shine-text {
  0% { background-position: 0% center; }
  100% { background-position: -200% center; }
}

@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}
```

#### Visual Effects
- **Noise Texture Overlay**: Subtle grain effect for texture
- **Backdrop Blur**: Glassmorphism effects on cards and modals
- **Gradient Backgrounds**: Dynamic color transitions
- **Glow Effects**: Ambient lighting and hover states
- **Custom Scrollbar**: Themed scrollbar design

### Performance Optimizations

- **Lazy Loading**: Components load on viewport entry
- **Optimized Canvas**: Efficient particle rendering with requestAnimationFrame
- **Spring Animations**: GPU-accelerated transforms
- **Minimal Re-renders**: Smart state management

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/morganID/malix-abdul-azis-portfolio.git
   cd malix-abdul-azis-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
malix-abdul-azis-portfolio/
├── components/           # React components
│   ├── Hero.tsx         # Hero section with neural network
│   ├── About.tsx        # About section
│   ├── Skills.tsx       # Skills showcase
│   ├── Experience.tsx   # Work experience
│   ├── Projects.tsx     # Project portfolio
│   ├── Testimonials.tsx # Client testimonials
│   ├── Contact.tsx      # Contact form
│   └── Navbar.tsx       # Navigation component
├── constants.ts         # Static data and content
├── types.ts            # TypeScript type definitions
├── App.tsx             # Main application component
├── index.tsx           # Application entry point
└── index.html          # HTML template with custom styles
```

## 🎯 Key Components Breakdown

### Hero Section (`Hero.tsx`)
- Canvas-based neural network animation
- 3D tilt effects on mouse movement
- Text decryption animation
- Interactive particle system
- Responsive design with mobile optimizations

### Projects Section (`Projects.tsx`)
- 3D card tilt interactions
- Gold dust particle effects
- Gradient text animations
- Hover reveal effects
- Staggered entrance animations

### Skills Section (`Skills.tsx`)
- Animated progress bars
- Icon hover effects
- Grid-based layout with smooth transitions

## 🎨 Customization

### Colors & Themes
Modify CSS custom properties in `index.html` to customize the color scheme:

```css
:root {
  --bg-color: #your-background;
  --surface-color: #your-surface;
  --text-color: #your-text;
  /* ... */
}
```

### Animations
Adjust animation parameters in component files:

```typescript
// Modify spring physics
const mouseX = useSpring(x, {
  stiffness: 100,    // Change responsiveness
  damping: 30        // Change smoothness
});
```

### Particle Systems
Customize particle behavior in respective components:

```typescript
const particleCount = width < 768 ? 60 : 120;  // Adjust density
const connectionDistance = 150;                // Connection radius
```

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

Particle count and animation complexity automatically adjust based on screen size for optimal performance.

## 🌟 Performance Metrics

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Bundle Size**: ~150KB gzipped
- **First Paint**: < 1.5s
- **Interactive**: < 3s

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Malix Abdul Azis**
- Portfolio: [malix-abdul-azis.github.io](https://malix-abdul-azis.github.io)
- GitHub: [@morganID](https://github.com/morganID)
- LinkedIn: [Your LinkedIn Profile]

---

*Built with ❤️ using React, TypeScript, and cutting-edge web animations*
