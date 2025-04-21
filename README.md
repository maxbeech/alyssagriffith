# Alyssa Griffith - Theme-Switching Portfolio

A dynamic portfolio website for Alyssa Griffith featuring a theme-switching Hero component that seamlessly transitions between a professional portfolio theme and a kawaii theme.

## Features

- **Dual Theme Design**: Switch between a professional "Portfolio" theme and a playful "Kawaii" theme with a smooth transition.
- **Responsive Hero Component**: A fully responsive hero section that adapts to different screen sizes.
- **Dynamic Content**: Content, styles, and animations automatically update based on the selected theme.
- **Persistent Theme Preference**: User's theme preference is stored in localStorage for a consistent experience across visits.
- **Video Backgrounds**: Theme-specific video backgrounds with poster image fallbacks.
- **Animated UI Elements**: Smooth animations for transitions, hover effects, and theme toggle.

## Components

### ThemeProvider

The `ThemeProvider` component manages the theme state and provides context for theme-dependent components:

- **Context API**: Uses React Context to provide theme-related values and functions to child components.
- **Theme Persistence**: Saves the user's theme preference to localStorage.
- **Theme Classes**: Adds theme-specific CSS classes to the document for global styling.

Usage:
```jsx
import { ThemeProvider } from '@/components/layout/ThemeProvider';

function App() {
  return (
    <ThemeProvider defaultTheme="portfolio">
      {/* Your components */}
    </ThemeProvider>
  );
}
```

### Hero Component

The `Hero` component is a feature-rich, responsive hero section with theme-specific styles and content:

- **Dynamic Content**: Headings, subheadings, descriptions, and CTAs change based on the theme.
- **Video Background**: Theme-specific video backgrounds with fallback poster images.
- **Animated Elements**: Text animations and floating emotes (in Kawaii theme).
- **Theme Toggle**: Built-in button to switch between themes.

Usage:
```jsx
import Hero from '@/components/Hero';

function HomePage() {
  return (
    <main>
      <Hero />
      {/* Other content */}
    </main>
  );
}
```

## Theme-Specific Styling

The application uses CSS variables to define theme-specific colors and styles:

- **Portfolio Theme**: Professional, sophisticated design with violet/slate color scheme.
- **Kawaii Theme**: Playful, cute design with pink/purple color scheme.

Global theme-specific styles are defined in `globals.css` and applied through theme classes.

## Custom Cursors

The site implements theme-specific custom cursors:

- In "Pro" mode: A subtle, professional cursor with a violet color scheme
- In "Kawaii" mode: A fun star-shaped cursor with pink color scheme

The cursor files are located in:
- `/public/media/cursors/pro-cursor.svg`
- `/public/media/cursors/kawaii-cursor.svg`

If you experience any cursor display issues, ensure the PNG fallbacks are properly generated:
- `/public/media/cursors/pro-cursor.png`
- `/public/media/cursors/kawaii-cursor.png`

The cursor settings are defined in `src/app/globals.css` within the theme classes.

## Development

This project uses:

- **Next.js**: React framework for server-rendered applications.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Framer Motion**: Animation library for React.
- **TypeScript**: Typed JavaScript for better developer experience.

### Running Locally

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site in your browser.

## License

All rights reserved. The code and design in this project are proprietary and confidential. 