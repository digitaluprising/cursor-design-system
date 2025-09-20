# Cursor Design System

A comprehensive component library inspired by Cursor.com, built with Next.js, React, and Tailwind CSS v4.

## 🚀 Features

- **Dark Theme**: Matches the Cursor.com aesthetic with dark backgrounds and orange accents
- **Responsive Design**: All components are mobile-first and fully responsive
- **Accessible**: Built with accessibility best practices
- **TypeScript**: Full TypeScript support for better development experience
- **Customizable**: Props-based customization for all components

## 📦 Components

All components are exported in alphabetical order:

### BlogCard
Displays blog post previews with image, title, and date.

```tsx
<BlogCard
  title="Cursor 0.10: AI-powered refactoring"
  date="Oct 26, 2023"
  imageSrc="/blog-image.jpg"
  href="/blog/post"
/>
```

### Button
Multiple button variants and sizes.

```tsx
<Button variant="primary" size="lg">
  Get started for free
</Button>
```

### FeatureCard
Showcases product features with alternating layouts.

```tsx
<FeatureCard
  title="Code with AI"
  description="Cursor is built from the ground up for AI..."
  linkText="Learn how to use AI"
  linkHref="#ai"
  reverse={false}
/>
```

### Footer
Site footer with navigation links and social media.

```tsx
<Footer />
```

### Header
Navigation header with logo and menu items.

```tsx
<Header />
```

### HeroSection
Main hero section with heading and CTA.

```tsx
<HeroSection />
```

### ImageWrapper
Responsive image component with optimization.

```tsx
<ImageWrapper
  src="/image.jpg"
  alt="Description"
  width={800}
  height={600}
/>
```

### PartnerLogos
Displays partner company logos.

```tsx
<PartnerLogos partners={['Stripe', 'OpenAI', 'Linear']} />
```

### TestimonialCard
Customer testimonial cards.

```tsx
<TestimonialCard
  quote="Cursor has transformed how I write code..."
  author="Amjad Masad"
  title="CEO of Replit"
  avatar="/avatar.jpg"
/>
```

### Typography
Consistent text styling with multiple variants.

```tsx
<Typography variant="h1">Main Heading</Typography>
<Typography variant="body">Body text content</Typography>
```

## 🎨 Design System

### Colors
- **Primary Orange**: `#ff6b35` (Cursor orange)
- **Dark Background**: `#0a0a0a` (Main background)
- **Gray Background**: `#1a1a1a` (Card backgrounds)
- **White Text**: `#ffffff` (Primary text)
- **Gray Text**: `#9ca3af` (Secondary text)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: Bold weights (600-900)
- **Body**: Regular weight (400)
- **Responsive**: Scales appropriately across devices

## 🛠️ Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) to view the component library.

## 📱 Responsive Breakpoints

- **Mobile**: `< 768px`
- **Tablet**: `768px - 1024px`
- **Desktop**: `> 1024px`

## ♿ Accessibility

- Semantic HTML elements
- Proper ARIA labels
- Keyboard navigation support
- Focus management
- Color contrast compliance

## 🎯 Usage

Import components from the main index:

```tsx
import {
  BlogCard,
  Button,
  FeatureCard,
  Footer,
  Header,
  HeroSection,
  ImageWrapper,
  PartnerLogos,
  TestimonialCard,
  Typography,
} from '@/components';
```

## 📄 License

MIT License - feel free to use in your projects!