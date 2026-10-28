import React, { useState, useMemo } from 'react';
import { ALL_RECIPES, CATEGORIES_INFO } from '../data/recipes';
import { RecipeCard } from './RecipeCard';
import { filterRecipes } from '../utils/recipeUtils';
import { useAuth } from '../context/AuthContext';
import { Search, SlidersHorizontal, Bookmark, Sparkles, Filter } from 'lucide-react';

interface RecipeCatalogProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  onOpenRecipe: (id: number) => void;
}

export const RecipeCatalog: React.FC<RecipeCatalogProps> = ({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onSelectCategory,
  onOpenRecipe
}) => {
  const { user, isFavorite } = useAuth();
  const [sortBy, setSortBy] = useState<'default' | 'name' | 'quickest'>('default');

  const savedIds = user?.savedRecipeIds || [];

  const categories = [
    'All',
    'Breads',
    'Pastries',
    'Cakes',
    'Biscuits & Cookies',
    'Savory Items',
    'Sweet Snacks & Desserts',
    'Others',
    'Saved'
  ];

  const filtered = useMemo(() => {
    let list = filterRecipes(ALL_RECIPES, searchQuery, selectedCategory, savedIds);

    if (sortBy === 'name') {
      list = [...list].sort((a, b) => a.n.localeCompare(b.n));
    } else if (sortBy === 'quickest') {
      list = [...list].sort((a, b) => {
        const timeA = parseInt(a.b) || 30;
        const timeB = parseInt(b.b) || 30;
        return timeA - timeB;
      });
    }

    return list;
  }, [searchQuery, selectedCategory, savedIds, sortBy]);

  const activeCategoryInfo = CATEGORIES_INFO[selectedCategory];

  return (
    <section id="catalog" className="py-16 px-6 lg:px-12 max-w-7xl mx-auto scroll-mt-14">
      {/* Catalog Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-[#9C3218]">
            Master Compendium
          </span>
          <h2 className="text-3xl font-serif font-bold text-[#281E19] mt-1">
            Browse The 70 Recipes
          </h2>
          {activeCategoryInfo && (
            <p className="text-sm text-[#655347] mt-1.5 max-w-2xl">
              {activeCategoryInfo.description}
            </p>
          )}
        </div>

        {/* Sort and active count */}
        <div className="flex items-center gap-3">
          <span className="text-xs text-[#786457] font-medium tabular-nums">
            Showing {filtered.length} {filtered.length === 1 ? 'recipe' : 'recipes'}
          </span>

          <div className="flex items-center gap-1.5 p-1 bg-[#EFE8D8] rounded-lg border border-[#DDD5C2] text-xs">
            <span className="text-[#786457] px-2 font-medium">Sort:</span>
            <button
              onClick={() => setSortBy('default')}
              className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                sortBy === 'default' ? 'bg-white text-[#281E19] font-semibold shadow-xs' : 'text-[#655347] hover:text-[#281E19]'
              }`}
            >
              Order
            </button>
            <button
              onClick={() => setSortBy('name')}
              className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                sortBy === 'name' ? 'bg-white text-[#281E19] font-semibold shadow-xs' : 'text-[#655347] hover:text-[#281E19]'
              }`}
            >
              A-Z
            </button>
          </div>
        </div>
      </div>

      {/* Category Segmented Tabs */}
      <div className="flex items-center gap-1.5 p-1.5 bg-[#F2ECDD] rounded-xl border border-[#DDD5C2] overflow-x-auto scrollbar-none mb-8">
        {categories.map((catName) => {
          const isActive = selectedCategory === catName;
          const count = catName === 'All'
            ? ALL_RECIPES.length
            : catName === 'Saved'
            ? savedIds.length
            : ALL_RECIPES.filter(r => r.c === catName).length;

          return (
            <button
              key={catName}
              onClick={() => onSelectCategory(catName)}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg whitespace-nowrap shrink-0 transition-all cursor-pointer flex items-center gap-1.5 ${
                isActive
                  ? 'bg-white text-[#281E19] shadow-sm'
                  : 'text-[#655347] hover:text-[#281E19] hover:bg-white/50'
              }`}
            >
              {catName === 'Saved' && <Bookmark className="w-3.5 h-3.5 text-[#E25C38]" />}
              <span>{catName}</span>
              <span className="text-[11px] opacity-60 tabular-nums">({count})</span>
            </button>
          );
        })}
      </div>

      {/* Recipe Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} onOpen={onOpenRecipe} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 px-6 bg-white border border-dashed border-[#DDD5C2] rounded-2xl max-w-lg mx-auto">
          <p className="font-serif text-xl font-bold text-[#281E19]">No recipes found</p>
          <p className="text-xs text-[#786457] mt-2">
            We couldn’t find any recipes matching "{searchQuery}" in {selectedCategory}. Try resetting your search or picking another collection.
          </p>
          <button
            onClick={() => {
              onSearchChange('');
              onSelectCategory('All');
            }}
            className="mt-5 px-4 py-2 bg-[#E25C38] text-white text-xs font-semibold rounded-lg shadow-sm hover:bg-[#C94723] transition-colors cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      )}
    </section>
  );
};
