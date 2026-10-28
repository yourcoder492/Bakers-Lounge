import React from 'react';
import { Search, Sparkles, BookOpen, Clock, Award, ShieldCheck } from 'lucide-react';
import { HERO_IMAGE } from '../data/recipes';
import { useAuth } from '../context/AuthContext';

interface HeroProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  onExploreClick: () => void;
  onSelectCategory: (cat: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  searchQuery,
  onSearchChange,
  onExploreClick,
  onSelectCategory
}) => {
  const { isAuthenticated, openAuthModal, user } = useAuth();

  return (
    <section className="relative pt-6 pb-16 px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-semibold uppercase tracking-wider text-[#9C3218] mb-3">
              <span>Artisanal Boulangerie & Pâtisserie</span>
              <span aria-hidden="true" className="hidden sm:inline">·</span>
              <span>70 Tested Formulas</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-[#281E19] leading-[1.08] tracking-tight text-balance">
              The master baker’s definitive recipe compendium.
            </h1>

            <p className="mt-5 text-base sm:text-lg text-[#655347] leading-relaxed max-w-2xl text-pretty">
              From open-crumb sourdoughs and 54-layer butter croissants to heritage tea cakes and savory quiches.
              Every recipe is scaled to home ovens with interactive step checklists, bake timers, and personal baker notes.
            </p>

            {/* Search Input Box */}
            <div className="mt-8 max-w-xl">
              <div className="relative flex items-center">
                <Search className="absolute left-4 w-5 h-5 text-[#8D7868] pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  placeholder="Search 70 recipes, ingredients (e.g. sourdough, cocoa, buttermilk)..."
                  className="w-full pl-12 pr-4 py-3.5 bg-white border border-[#DDD5C2] rounded-xl text-sm text-[#281E19] placeholder-[#8D7868] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#E25C38] focus:border-transparent transition-all"
                />
              </div>

              {/* Quick tags */}
              <div className="flex items-center gap-2 mt-3 text-xs text-[#786457] overflow-x-auto pb-1">
                <span className="font-medium shrink-0">Popular:</span>
                {['Sourdough', 'Butter Croissant', 'Chocolate Fudge Cake', 'Quiche Lorraine', 'Glazed Doughnuts'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => {
                      onSearchChange(tag);
                      onExploreClick();
                    }}
                    className="shrink-0 hover:text-[#281E19] hover:underline underline-offset-2 transition-colors cursor-pointer"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <button
                onClick={onExploreClick}
                className="px-6 py-3 bg-[#E25C38] hover:bg-[#C94723] text-white font-medium rounded-xl shadow-sm hover:shadow transition-all text-sm flex items-center gap-2 cursor-pointer"
              >
                <BookOpen className="w-4 h-4" />
                <span>Browse All 70 Recipes</span>
              </button>

              {!isAuthenticated ? (
                <button
                  onClick={() => openAuthModal('signup')}
                  className="px-6 py-3 bg-white hover:bg-[#F4EFE6] text-[#281E19] border border-[#DDD5C2] font-medium rounded-xl text-sm transition-colors cursor-pointer"
                >
                  Create Baker Account
                </button>
              ) : (
                <div className="text-xs text-[#655347] flex items-center gap-2 py-2">
                  <span>Welcome back, <strong>{user?.name}</strong></span>
                  <span aria-hidden="true">·</span>
                  <span className="text-[#9C3218] font-semibold">{user?.savedRecipeIds.length} Saved</span>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#E2D9C5] shadow-lg aspect-4/3 lg:aspect-square bg-[#E8DFC9] group">
              <img
                src={HERO_IMAGE}
                alt="Artisanal bakery table with sourdough loaves, baguettes, and flaky croissants"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  // Fallback container
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-5 left-5 right-5 text-white pointer-events-none">
                <p className="text-xs font-semibold tracking-wider uppercase text-amber-200">
                  Featured Baker Collection
                </p>
                <h3 className="font-serif text-xl font-bold mt-1">
                  70 Heritage Formulas, Zero Fillers
                </h3>
                <p className="text-xs text-stone-200 mt-1">
                  Standardized metric weights · Tested oven temperatures · Foolproof crusts
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Value Proof Bar */}
        <div className="mt-14 pt-8 border-t border-[#E6DFC5] grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          <div>
            <div className="flex items-center gap-2 text-[#9C3218] mb-1">
              <BookOpen className="w-4 h-4" />
              <span className="text-xs uppercase font-bold tracking-wider">Compendium</span>
            </div>
            <p className="font-serif text-2xl font-bold text-[#281E19] tabular-nums">70 Recipes</p>
            <p className="text-xs text-[#786457] mt-0.5">Across 7 master collections</p>
          </div>

          <div>
            <div className="flex items-center gap-2 text-[#9C3218] mb-1">
              <Clock className="w-4 h-4" />
              <span className="text-xs uppercase font-bold tracking-wider">Step Precision</span>
            </div>
            <p className="font-serif text-2xl font-bold text-[#281E19] tabular-nums">100% Timed</p>
            <p className="text-xs text-[#786457] mt-0.5">Proofing, baking & rest minutes</p>
          </div>

          <div>
            <div className="flex items-center gap-2 text-[#9C3218] mb-1">
              <Award className="w-4 h-4" />
              <span className="text-xs uppercase font-bold tracking-wider">Baker Ranks</span>
            </div>
            <p className="font-serif text-2xl font-bold text-[#281E19]">Mastery Track</p>
            <p className="text-xs text-[#786457] mt-0.5">Earn badges from Novice to Grand Master</p>
          </div>

          <div>
            <div className="flex items-center gap-2 text-[#9C3218] mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-xs uppercase font-bold tracking-wider">Grams & Metric</span>
            </div>
            <p className="font-serif text-2xl font-bold text-[#281E19]">Exact Ratios</p>
            <p className="text-xs text-[#786457] mt-0.5">Flour weighed to precision for crisp crusts</p>
          </div>
        </div>
      </div>
    </section>
  );
};
