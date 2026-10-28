import React, { useState, useEffect } from 'react';
import { AuthProvider } from './context/AuthContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedRecipes } from './components/FeaturedRecipes';
import { CollectionsOverview } from './components/CollectionsOverview';
import { RecipeCatalog } from './components/RecipeCatalog';
import { BakerPhilosophy } from './components/BakerPhilosophy';
import { Footer } from './components/Footer';
import { RecipeModal } from './components/RecipeModal';
import { AuthModal } from './components/AuthModal';
import { ProfileDrawer } from './components/ProfileDrawer';

export function MainApp() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeRecipeId, setActiveRecipeId] = useState<number | null>(null);

  // Handle URL hash on initial load (e.g. #r6 opens recipe 6)
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      const match = hash.match(/^r(\d+)$/);
      if (match) {
        setActiveRecipeId(parseInt(match[1], 10));
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleOpenRecipe = (id: number) => {
    setActiveRecipeId(id);
    window.history.replaceState(null, '', `#r${id}`);
  };

  const handleCloseRecipe = () => {
    setActiveRecipeId(null);
    window.history.replaceState(null, '', window.location.pathname);
  };

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
    const catalogElem = document.getElementById('catalog');
    if (catalogElem) {
      catalogElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreClick = () => {
    const catalogElem = document.getElementById('catalog');
    if (catalogElem) {
      catalogElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#281E19] flex flex-col font-sans">
      {/* Top Bar Navigation */}
      <Navbar
        onSelectCategory={handleSelectCategory}
        onOpenRecipe={handleOpenRecipe}
        activeCategory={selectedCategory}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onExploreClick={handleExploreClick}
          onSelectCategory={handleSelectCategory}
        />

        {/* Featured Signature Bakes Showcase */}
        <FeaturedRecipes onOpenRecipe={handleOpenRecipe} />

        {/* 7 Baking Disciplines Taxonomy Overview */}
        <CollectionsOverview onSelectCategory={handleSelectCategory} />

        {/* Complete 70-Recipe Master Catalog with Filters & Search */}
        <RecipeCatalog
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onOpenRecipe={handleOpenRecipe}
        />

        {/* Craftsmanship Philosophy & Testimonials */}
        <BakerPhilosophy />
      </main>

      {/* Footer */}
      <Footer onSelectCategory={handleSelectCategory} />

      {/* Interactive Recipe Baker Modal */}
      <RecipeModal
        recipeId={activeRecipeId}
        onClose={handleCloseRecipe}
      />

      {/* Sign In & Sign Up Modal */}
      <AuthModal />

      {/* Baker Profile & Mastered Bakes Drawer */}
      <ProfileDrawer onOpenRecipe={handleOpenRecipe} />
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <MainApp />
    </AuthProvider>
  );
}
