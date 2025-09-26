import {
  BlogCard,
  Button,
  ChangelogExample,
  FeatureCard,
  Footer,
  Header,
  HeroSection,
  PartnerLogos,
  TestimonialCard,
  Typography,
} from '@/components';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Component */}
      <section className="mb-24">
        <Header />
      </section>

      {/* HeroSection Component */}
      <section className="mb-32">
        <HeroSection />
      </section>

      {/* Typography Component */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 mb-32">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-12">
            {/* Display Variants */}
            <div className="space-y-8">
              <div>
                <Typography variant="display" size="9xl" className="text-foreground">
                  Display Text - Hero Headlines
                </Typography>
                <Typography variant="caption" size="xs" className="text-muted-foreground mt-2">
                  variant="display" size="9xl"
                </Typography>
              </div>
              <div>
                <Typography variant="display" size="6xl" className="text-foreground">
                  Large Display - Section Headers
                </Typography>
                <Typography variant="caption" size="xs" className="text-muted-foreground mt-2">
                  variant="display" size="6xl"
                </Typography>
              </div>
              <div>
                <Typography variant="display" size="3xl" className="text-foreground">
                  Medium Display - Subsection Headers
                </Typography>
                <Typography variant="caption" size="xs" className="text-muted-foreground mt-2">
                  variant="display" size="3xl"
                </Typography>
              </div>
            </div>

            {/* Heading Variants */}
            <div className="space-y-8">
              <div>
                <Typography as="h1" variant="heading" size="4xl" className="text-foreground">
                  H1 Heading - SEO Optimized (Large)
                </Typography>
                <Typography variant="caption" size="xs" className="text-muted-foreground mt-2">
                  as="h1" variant="heading" size="4xl"
                </Typography>
              </div>
              <div>
                <Typography as="h1" variant="heading" size="lg" className="text-foreground">
                  H1 Heading - SEO Optimized (Small)
                </Typography>
                <Typography variant="caption" size="xs" className="text-muted-foreground mt-2">
                  as="h1" variant="heading" size="lg"
                </Typography>
              </div>
              <div>
                <Typography as="h2" variant="heading" size="2xl" className="text-foreground">
                  H2 Heading - Section Headers
                </Typography>
                <Typography variant="caption" size="xs" className="text-muted-foreground mt-2">
                  as="h2" variant="heading" size="2xl"
                </Typography>
              </div>
              <div>
                <Typography as="h3" variant="subheading" size="xl" className="text-foreground">
                  H3 Subheading - Content Headers
                </Typography>
                <Typography variant="caption" size="xs" className="text-muted-foreground mt-2">
                  as="h3" variant="subheading" size="xl"
                </Typography>
              </div>
            </div>

            {/* Body Text Variants */}
            <div className="space-y-8">
              <div>
                <Typography variant="large" size="xl" className="text-muted-foreground">
                  Large text - Perfect for subheadings and important content
                </Typography>
                <Typography variant="caption" size="xs" className="text-muted-foreground mt-2">
                  variant="large" size="xl"
                </Typography>
              </div>
              <div>
                <Typography variant="lead" size="lg">
                  Lead text - This is a lead paragraph that stands out from regular body text with refined spacing.
                </Typography>
                <Typography variant="caption" size="xs" className="text-muted-foreground mt-2">
                  variant="lead" size="lg"
                </Typography>
              </div>
              <div>
                <Typography variant="body" size="base" className="text-foreground">
                  Body text - This is regular paragraph text that provides the main content with optimal readability and line height.
                </Typography>
                <Typography variant="caption" size="xs" className="text-muted-foreground mt-2">
                  variant="body" size="base"
                </Typography>
              </div>
              <div>
                <Typography variant="body" size="sm" className="text-foreground">
                  Small body text - For compact layouts and secondary content
                </Typography>
                <Typography variant="caption" size="xs" className="text-muted-foreground mt-2">
                  variant="body" size="sm"
                </Typography>
              </div>
            </div>

            {/* Utility Variants */}
            <div className="space-y-8">
              <div>
                <Typography variant="small" size="sm" className="text-muted-foreground">
                  Small text - Used for secondary information and metadata
                </Typography>
                <Typography variant="caption" size="xs" className="text-muted-foreground mt-2">
                  variant="small" size="sm"
                </Typography>
              </div>
              <div>
                <Typography variant="caption" size="xs" className="text-muted-foreground">
                  Caption text - Uppercase tracking for labels and categories
                </Typography>
                <Typography variant="caption" size="xs" className="text-muted-foreground mt-2">
                  variant="caption" size="xs"
                </Typography>
              </div>
            </div>

            {/* Flexible Examples */}
            <div className="space-y-8 border-t pt-8">
              <Typography variant="heading" size="lg" className="text-foreground">
                Flexible Typography Examples
              </Typography>
              <div className="space-y-4">
                <div>
                  <Typography as="h1" variant="heading" size="sm" className="text-foreground">
                    SEO H1 with small visual size
                  </Typography>
                  <Typography variant="caption" size="xs" className="text-muted-foreground mt-2">
                    as="h1" variant="heading" size="sm"
                  </Typography>
                </div>
                <div>
                  <Typography as="p" variant="display" size="2xl" className="text-foreground">
                    Display text with medium size
                  </Typography>
                  <Typography variant="caption" size="xs" className="text-muted-foreground mt-2">
                    as="p" variant="display" size="2xl"
                  </Typography>
                </div>
                <div>
                  <Typography as="h2" variant="subheading" size="base" className="text-foreground">
                    H2 with body text size
                  </Typography>
                  <Typography variant="caption" size="xs" className="text-muted-foreground mt-2">
                    as="h2" variant="subheading" size="base"
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Button Component */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 mb-32">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-12">
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="primary" size="sm">Primary Small</Button>
              <Button variant="primary" size="md">Primary Medium</Button>
              <Button variant="primary" size="lg">Primary Large</Button>
              <Button variant="primary" size="xl">Primary Extra Large</Button>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="secondary" size="md">Secondary</Button>
              <Button variant="outline" size="md">Outline</Button>
              <Button variant="ghost" size="md">Ghost</Button>
              <Button variant="link" size="md">Link</Button>
            </div>
          </div>
        </div>
      </section>

      {/* FeatureCard Component */}
      <section className="mb-32 flex flex-col gap-24">
        <FeatureCard
          title="Magically accurate autocomplete"
          description="Our custom Tab model predicts your next action with striking speed and precision."
          linkText="Learn about Tab"
          linkHref="#tab"
          codeContent={`"use client";

import React, { useState } from 'react';
import Navigation from './Navigation';
import SupportChat from './SupportChat';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  
  return (
    <div className="flex h-[600px] border rounded-lg overflow-hidden">
      <div className="w-64 border-r">
        <Navigation />
      </div>
      <div className="flex-1">
        <SupportChat />
      </div>
    </div>
  );
}`}
        />
        <FeatureCard
          title="Code with AI"
          description="Cursor is built from the ground up for AI. Ask it questions, generate code, and debug with intelligent assistance."
          linkText="Learn how to use AI"
          linkHref="#ai"
          imageSrc="https://plus.unsplash.com/premium_photo-1701842913472-3e57eb04836d?q=80&w=3840&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          imageAlt="AI Code Assistant"
          reverse
        />
        <FeatureCard
          title="Edit anything"
          description="Cursor is a fork of VSCode, so you can use all your favorite extensions and keybindings. It's the editor you know, supercharged."
          linkText="See how it works"
          linkHref="#edit"
          imageSrc="https://images.unsplash.com/photo-1579547621706-1a9c79d5c9f1?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          imageAlt="Code Editor"
        />
      </section>

      {/* TestimonialCard Component */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 mb-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            <TestimonialCard
              quote="Cursor has completely transformed how I write code. The AI integration is seamless and incredibly powerful."
              author="Amjad Masad"
              title="CEO of Replit"
              avatar="https://plus.unsplash.com/premium_photo-1675200124904-dfadce24119f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <TestimonialCard
              quote="The future of coding is here. Cursor makes AI-assisted development feel natural and intuitive."
              author="Paul Graham"
              title="Y Combinator"
              avatar="https://images.unsplash.com/photo-1504730030853-eff311f57d3c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <TestimonialCard
              quote="I can't imagine going back to traditional coding. Cursor's AI features have made me 10x more productive."
              author="Sarah Chen"
              title="Senior Developer"
              avatar="https://images.unsplash.com/photo-1582639590011-f5a8416d1101?q=80&w=1649&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <TestimonialCard
              quote="Cursor understands my codebase better than I do. It's like having a brilliant pair programming partner."
              author="Mike Johnson"
              title="Tech Lead"
              avatar="https://images.unsplash.com/photo-1682505237099-3230a077a781?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <TestimonialCard
              quote="The productivity gains with Cursor are incredible. It's like having a senior developer always available to help."
              author="Alex Rodriguez"
              title="Full Stack Developer"
              avatar="https://images.unsplash.com/photo-1574539602047-548bf9557352?q=80&w=1665&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <TestimonialCard
              quote="Cursor's AI capabilities have revolutionized our development workflow. It's a game-changer for modern development."
              author="Emma Wilson"
              title="Engineering Manager"
              avatar="https://images.unsplash.com/photo-1526510747491-58f928ec870f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
        </div>
      </section>

      {/* BlogCard Component */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 mb-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <BlogCard
              title="Cursor 0.10: AI-powered refactoring, improved chat, and more"
              date="Oct 26, 2023"
            />
            <BlogCard
              title="The future of coding is here"
              date="Oct 19, 2023"
            />
          </div>
        </div>
      </section>

      {/* PartnerLogos Component */}
      <section className="mb-32">
        <PartnerLogos />
      </section>

      {/* ChangelogExample Component */}
      <section className="mb-32">
        <ChangelogExample />
      </section>

      {/* Footer Component */}
      <section>
        <Footer />
      </section>
    </div>
  );
}