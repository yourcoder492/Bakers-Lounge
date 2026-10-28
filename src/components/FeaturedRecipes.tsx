import React from 'react';
import { ALL_RECIPES } from '../data/recipes';
import { Bookmark, Clock, ArrowRight, Flame } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface FeaturedRecipesProps {
  onOpenRecipe: (id: number) => void;
}

export const FeaturedRecipes: React.FC<FeaturedRecipesProps> = ({ onOpenRecipe }) => {
  const { toggleFavorite, isFavorite } = useAuth();

  // Featured 4 recipes with high-fidelity generated images
  const featuredIds = [6, 11, 22, 17];
  const featured = ALL_RECIPES.filter(r => featuredIds.includes(r.id));

  return (
    <section id="featured" className="py-16 px-6 lg:px-12 bg-[#F5EFE4] border-y border-[#E6DFC5]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#9C3218]">
              Signature Showstoppers
            </span>
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-[#281E19] mt-1">
              Hall of Fame Bakes
            </h2>
            <p className="text-sm text-[#655347] mt-2 max-w-xl">
              Master these four foundational pillars of artisan baking: sourdough crust development, butter lamination, ganache emulsion, and fluted shortcrust.
            </p>
          </div>
          <a
            href="#catalog"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#9C3218] hover:text-[#7A240F] transition-colors"
          >
            <span>View All 70 Recipes</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((recipe) => {
            const favorited = isFavorite(recipe.id);

            return (
              <div
                key={recipe.id}
                className="group bg-white rounded-2xl border border-[#DDD5C2] overflow-hidden flex flex-col hover:shadow-md transition-all duration-300"
              >
                {/* Photo container */}
                <div
                  className="relative aspect-4/3 overflow-hidden bg-[#EAE2D2] cursor-pointer"
                  onClick={() => onOpenRecipe(recipe.id)}
                >
                  {recipe.imageUrl ? (
                    <img
                      src={recipe.imageUrl}
                      alt={recipe.imageAlt || recipe.n}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-amber-50 text-amber-900 font-serif font-bold">
                      {recipe.n}
                    </div>
                  )}

                  {/* Favorite Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(recipe.id);
                    }}
                    aria-label={favorited ? `Remove ${recipe.n} from saved` : `Save ${recipe.n}`}
                    className={`absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                      favorited
                        ? 'bg-[#E25C38] text-white shadow-sm'
                        : 'bg-white/90 backdrop-blur-sm text-[#48372D] hover:bg-white'
                    }`}
                  >
                    <Bookmark className={`w-4 h-4 ${favorited ? 'fill-current' : ''}`} />
                  </button>

                  {/* Category Pill Tag */}
                  <span className="absolute bottom-3 left-3 px-2.5 py-1 bg-[#281E19]/80 backdrop-blur-sm text-white text-[11px] font-medium rounded-md">
                    {recipe.c}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-[#786457] mb-1.5">
                      <span>{recipe.y}</span>
                      <span aria-hidden="true">·</span>
                      <span>{recipe.difficulty}</span>
                    </div>

                    <h3
                      onClick={() => onOpenRecipe(recipe.id)}
                      className="font-serif text-lg font-bold text-[#281E19] group-hover:text-[#E25C38] transition-colors cursor-pointer"
                    >
                      {recipe.n}
                    </h3>

                    <p className="text-xs text-[#655347] mt-2 line-clamp-2">
                      {recipe.i.slice(0, 4).join(', ')}...
                    </p>
                  </div>

                  <div className="mt-5 pt-3.5 border-t border-[#F0EAE1] flex items-center justify-between text-xs">
                    <span className="text-[#786457] font-mono">{recipe.b}</span>
                    <button
                      onClick={() => onOpenRecipe(recipe.id)}
                      className="font-semibold text-[#E25C38] hover:text-[#9C3218] transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <span>Bake Recipe</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
