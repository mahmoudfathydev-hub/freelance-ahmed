# Ahmed's Professional Portfolio 🎨

A modern, fully-featured portfolio website built with Next.js 16, React 19, and Tailwind CSS. Features stunning dark mode design, smooth animations, interactive project galleries, and responsive layouts.

## ✨ Key Features

- 🌙 **Dark Mode Design** - Modern dark theme with orange accents
- 🎭 **Smooth Animations** - AOS scroll animations and interactive effects
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- 🖼️ **Interactive Gallery** - Full-featured image gallery with navigation
- 🎠 **Swiper Carousel** - Touch-friendly carousel for related projects
- ⚡ **Lightning Fast** - Optimized images, code splitting, and smooth scrolling
- 📝 **Contact Form** - Fully functional contact form with validation
- 🔝 **Back to Top** - Smooth scroll button for better UX

## 🚀 Quick Start

### Prerequisites
- Node.js 18 or higher
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/mahmoudfathydev-hub/freelance-ahmed.git
cd PortfolioAhmed

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the portfolio.

### Build & Deploy

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
PortfolioAhmed/
├── app/                       # Next.js app directory
│   ├── layout.tsx             # Root layout with navigation
│   ├── page.tsx               # Home page
│   ├── globals.css            # Global styles
│   ├── AOSWrapper.tsx         # Animation wrapper
│   ├── about/                 # About page
│   ├── contact/               # Contact page
│   ├── projects/              # Projects section
│   └── home/                  # Home components
├── components/                # Reusable components
│   ├── Navbar.tsx             # Navigation component
│   ├── Footer.tsx             # Footer component
│   ├── BackToTop.tsx          # Back to top button
│   ├── ImageGallery.tsx       # Image gallery component
│   └── Skeletons.tsx          # Loading skeletons
├── lib/                       # Utilities and data
│   └── projectsData.ts        # Projects configuration
├── public/                    # Static assets
│   └── Images (care, cars, doc, ele, gar, pro, win)
├── package.json               # Dependencies
├── tsconfig.json              # TypeScript config
├── tailwind.config.ts         # Tailwind CSS config
└── INFO.txt                   # Complete documentation
```

## 🛠️ Technologies Stack

### Frontend Framework
- **Next.js 16.1.2** - React framework with SSR & SSG
- **React 19.2.3** - UI library
- **TypeScript 5** - Type-safe JavaScript

### Styling & Animation
- **Tailwind CSS 4** - Utility-first CSS framework
- **AOS 3.0.0** - Scroll animations
- **Swiper 11+** - Mobile carousel slider
- **React Icons 5.5.0** - Icon library

### Development
- **ESLint 9** - Code quality
- **PostCSS 4** - CSS transformation

## 📑 Pages & Sections

### 🏠 Home Page
- Hero section with introduction
- Services showcase
- Skills display
- Call-to-action sections

### 👤 About Page
- Personal introduction
- Skills and experience cards
- Professional highlights

### 🎨 Projects Page
- Project cards grid (responsive layout)
- First image preview for each project
- Category badges
- Click to view full gallery

### 🖼️ Project Details Page
- Full-screen image gallery
- Navigation arrows and thumbnails
- Image counter
- Related projects carousel (Swiper)
- Project information cards

### 📧 Contact Page
- Contact information cards
- Functional contact form
- Services list
- Social media links
- FAQ section
- Quick response indicator

## 🎭 Animations & Effects

### Scroll Animations (AOS)
- **fade-down** - Headers and titles
- **fade-up** - Cards and content sections
- **fade-left** - Sidebar content
- **fade-right** - Action buttons

### Interactive Animations
- Hover effects on cards (scale, lift, shadow)
- Color transitions (hover states)
- Smooth button effects
- Icon animations
- Form input focus effects

### Page Transitions
- Smooth scrolling between sections
- Back to Top button with smooth animation
- Page load animations

For detailed animation documentation, see [INFO.txt](INFO.txt)

## 🎨 Color Scheme

```
Primary Dark:     #0F1419 - Main background
Secondary Dark:   #1a1f26 - Card backgrounds
Primary Orange:   #FF6C0C - Brand color
Orange Hover:     #e55b00 - Hover states
Text Light:       #FFFFFF - Main text
Text Gray:        #9CA3AF - Secondary text
```

## 📱 Projects Organization

Projects are stored in the `/public` folder with numeric prefixes:

| Project | Prefix | Images | Category |
|---------|--------|--------|----------|
| Care Project | care | 6 | Healthcare |
| Cars Management | cars | 3 | Automotive |
| Documentation Hub | doc | 3 | Documentation |
| Electrical Systems | ele | 4 | IoT |
| Garden Gallery | gar | 5 | Design |
| Professional Portfolio | pro | 6 | Professional |
| Windows Showcase | win | 6 | Design |

Each project uses dynamic routing based on slug from project data.

## 🔧 Configuration

### Tailwind CSS (`tailwind.config.ts`)
- Custom theme colors
- Responsive breakpoints
- Extended animation configurations

### TypeScript (`tsconfig.json`)
- Strict mode enabled
- Path aliases configured
- JSX settings optimized

### ESLint (`eslint.config.mjs`)
- Next.js configuration
- Code style rules
- Import organization

## 🚀 Performance Features

- **Image Optimization** - Next.js Image component with lazy loading
- **Code Splitting** - Automatic per-route code splitting
- **CSS Optimization** - Tailwind's tree-shaking removes unused styles
- **Skeleton Loading** - Custom loading placeholders
- **Smooth Scroll** - CSS scroll-smooth for better UX
- **Responsive Design** - Mobile-first approach

## 📦 Dependencies

```json
{
  "dependencies": {
    "aos": "^3.0.0-beta.6",
    "next": "^16.1.2",
    "react": "^19.2.3",
    "react-dom": "^19.2.3",
    "react-icons": "^5.5.0",
    "swiper": "^11.0.0"
  }
}
```

## 🎯 Component Examples

### Using ImageGallery
```tsx
<ImageGallery 
  images={['/pro1.png', '/pro2.png', '/pro3.png']}
  title="Project Name"
  initialIndex={0}
/>
```

### Using Skeletons
```tsx
import { ProjectCardSkeleton, GridSkeleton } from '@/components/Skeletons'

<GridSkeleton count={6} />
```

### Using BackToTop
```tsx
// Automatically included in layout.tsx
// No manual implementation needed
```

## 🔐 Environment Variables

Currently, no environment variables are required for basic functionality.

For future features, you can add:
```env
NEXT_PUBLIC_API_URL=
EMAILJS_SERVICE_ID=
EMAILJS_TEMPLATE_ID=
EMAILJS_USER_ID=
```

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Other Platforms
- **Netlify** - Drag and drop build folder
- **GitHub Pages** - Export as static site
- **Docker** - Use Next.js Docker image

## 🐛 Troubleshooting

### Port Already in Use
```bash
npm run dev -- -p 3001
```

### Build Errors
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Styling Issues
```bash
# Rebuild Tailwind CSS
npm install
npm run dev
```

## 📖 Documentation

For complete documentation including:
- All animations used
- Every page section breakdown
- Technology details
- Performance considerations

See [INFO.txt](INFO.txt)

## 🎓 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [AOS Documentation](https://michalsnik.github.io/aos/)
- [Swiper Documentation](https://swiperjs.com)

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements.

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Ahmed Maher**
- **Email**: ahmedmaher88103@gmail.com
- **Phone**: +20 106 605 0658
- **Location**: Giza, Egypt
- **GitHub**: [@mahmoudfathydev-hub](https://github.com/mahmoudfathydev-hub)

## 🎁 Acknowledgments

- [Next.js](https://nextjs.org) - React framework
- [Tailwind CSS](https://tailwindcss.com) - CSS framework
- [AOS](https://michalsnik.github.io/aos/) - Scroll animations
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library
- [Swiper](https://swiperjs.com) - Carousel library

---

**Version**: 1.0.0  
**Last Updated**: January 16, 2026

Made with ❤️ by Mahmoud Fathy 
https://mahmoudfathydev-hub.github.io/New-Portfolio/
