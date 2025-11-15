
# ACCA Learning Platform - React Landing Page

A modern, responsive landing page for ACCA (Association of Chartered Certified Accountants) built with React, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd acca-landing-page
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080` to view the application.

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   └── ui/             # Shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       ├── badge.tsx
│       └── ...
├── pages/              # Page components
│   ├── Index.tsx       # Main landing page
│   └── NotFound.tsx    # 404 page
├── hooks/              # Custom React hooks
│   └── use-toast.ts
├── lib/                # Utility functions
│   └── utils.ts
├── App.tsx             # Main app component with routing
├── main.tsx           # Application entry point
└── index.css          # Global styles
```

## 🛠 Technology Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/ui** - Pre-built component library
- **React Router** - Client-side routing
- **Lucide React** - Icon library
- **React Query** - Data fetching and state management

## 🎨 Design System

### Colors
- **Primary**: Red (#dc2626) - ACCA brand color
- **Secondary**: Gray (#6b7280)
- **Background**: White (#ffffff)
- **Accent**: Various colors for different sections

### Typography
- **Headings**: Bold, clear hierarchy
- **Body**: Readable font sizes with proper line spacing
- **CTA Text**: Emphasized and action-oriented

### Components
- **Buttons**: Primary (red), Secondary (outline), and Ghost variants
- **Cards**: Clean design with hover effects
- **Icons**: Lucide React icons for consistency

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

Key responsive features:
- Mobile-first approach
- Flexible grid layouts
- Responsive typography
- Touch-friendly buttons and navigation

## 🧩 Component Architecture

### Page Components
- `Index.tsx` - Main landing page with all sections

### UI Components (Shadcn/ui)
- Reusable, accessible components
- Consistent styling with Tailwind CSS
- TypeScript support for type safety

### Best Practices
- **Single Responsibility**: Each component has one clear purpose
- **Composition**: Components are composed together to build complex UIs
- **Props Interface**: Clear TypeScript interfaces for all props
- **Accessibility**: ARIA labels and semantic HTML

## 🔧 Development Guidelines

### Code Style
- Use TypeScript for all components
- Follow React functional component patterns
- Use Tailwind CSS for styling (no custom CSS unless necessary)
- Implement proper error boundaries
- Use React hooks appropriately

### File Naming
- Components: PascalCase (e.g., `HeaderSection.tsx`)
- Hooks: camelCase with 'use' prefix (e.g., `useAuth.ts`)
- Utils: camelCase (e.g., `formatDate.ts`)
- Constants: UPPER_SNAKE_CASE

### Component Structure
```typescript
import React from 'react';

interface ComponentProps {
  // Define props here
}

const Component: React.FC<ComponentProps> = ({ prop1, prop2 }) => {
  // Component logic here
  
  return (
    <div className="tailwind-classes">
      {/* JSX content */}
    </div>
  );
};

export default Component;
```

## 🚀 Deployment

### Build for Production
```bash
npm run build
# or
yarn build
```

### Preview Production Build
```bash
npm run preview
# or
yarn preview
```

### Deployment Options
- **Vercel**: Connect your GitHub repo for automatic deployments
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use GitHub Actions for automatic deployment
- **AWS S3**: Upload the `dist` folder to an S3 bucket

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎯 Features

### Current Features
- ✅ Responsive landing page design
- ✅ Hero section with call-to-action
- ✅ Feature showcase (Flashcards & Interview Prep)
- ✅ Target audience sections
- ✅ Key skills overview
- ✅ Professional footer
- ✅ Mobile-responsive navigation

### Potential Enhancements
- 🔄 Add animation and transitions
- 🔄 Implement dark mode
- 🔄 Add contact form
- 🔄 Integrate with CMS
- 🔄 Add blog section
- 🔄 Implement user authentication

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use**
   ```bash
   # Kill process on port 8080
   npx kill-port 8080
   ```

2. **Dependencies not installing**
   ```bash
   # Clear npm cache
   npm cache clean --force
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **TypeScript errors**
   - Check import paths
   - Ensure all props have proper types
   - Verify component exports/imports

## 📖 Learning Resources

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Shadcn/ui Components](https://ui.shadcn.com/)
- [Vite Guide](https://vitejs.dev/guide/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation
---
**Built with ❤️ for ACCA students and professionals**
