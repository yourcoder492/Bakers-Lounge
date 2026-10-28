import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Bookmark, User as UserIcon, BookOpen, Flame } from 'lucide-react';
import { calculateBakerRank } from '../utils/recipeUtils';

interface NavbarProps {
  onSelectCategory: (cat: string) => void;
  onOpenRecipe: (id: number) => void;
  activeCategory: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onSelectCategory }) => {
  const { user, isAuthenticated, openAuthModal, setIsProfileDrawerOpen } = useAuth();
  const rank = calculateBakerRank(user?.masteredRecipeIds.length || 0);

  return (
    <header className="sticky top-0 z-30 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#E6DFC5] px-6 lg:px-12 py-3.5 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="text-xl lg:text-2xl font-serif font-bold tracking-tight text-[#281E19] whitespace-nowrap shrink-0 flex items-center gap-2 group"
        >
          <span className="w-8 h-8 rounded-lg bg-[#E25C38] text-white flex items-center justify-center font-serif text-lg font-bold shadow-sm transition-transform group-hover:scale-105">
            B
          </span>
          <span className="font-serif">The Baker’s Legend</span>
        </a>

        {/* Zone 2: 4-5 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#655347]">
          <a
            href="#catalog"
            onClick={() => onSelectCategory('All')}
            className="hover:text-[#281E19] transition-colors whitespace-nowrap shrink-0"
          >
            All 70 Recipes
          </a>
          <a
            href="#featured"
            className="hover:text-[#281E19] transition-colors whitespace-nowrap shrink-0"
          >
            Featured Bakes
          </a>
          <a
            href="#collections"
            className="hover:text-[#281E19] transition-colors whitespace-nowrap shrink-0"
          >
            Collections
          </a>
          <a
            href="#craft"
            className="hover:text-[#281E19] transition-colors whitespace-nowrap shrink-0"
          >
            Baker’s Craft
          </a>
          {isAuthenticated && (
            <button
              onClick={() => onSelectCategory('Saved')}
              className="flex items-center gap-1.5 hover:text-[#281E19] transition-colors whitespace-nowrap shrink-0 text-left font-medium"
            >
              <Bookmark className="w-4 h-4 text-[#E25C38]" />
              <span>Saved ({user?.savedRecipeIds.length || 0})</span>
            </button>
          )}
        </nav>

        {/* Zone 3: 1 primary action or User Profile trigger */}
        <div className="flex items-center gap-3 shrink-0">
          {isAuthenticated && user ? (
            <button
              onClick={() => setIsProfileDrawerOpen(true)}
              className="flex items-center gap-2.5 p-1.5 pr-3 rounded-full hover:bg-[#EFE8D8] border border-[#DDD5C2] transition-colors group cursor-pointer"
              title="Open Baker Profile"
              aria-label="Open Baker Profile"
            >
              <div className="w-8 h-8 rounded-full bg-[#E25C38] text-white flex items-center justify-center text-xs font-bold overflow-hidden">
                {user.avatar && user.avatar.startsWith('http') ? (
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                ) : (
                  user.name.charAt(0)
                )}
              </div>
              <div className="text-left hidden sm:block">
                <p className="text-xs font-semibold text-[#281E19] leading-tight whitespace-nowrap truncate max-w-[110px]">
                  {user.name}
                </p>
                <div className="flex items-center gap-1 text-[11px] text-[#786457]">
                  <Flame className="w-3 h-3 text-[#E25C38]" />
                  <span>{user.masteredRecipeIds.length} Mastered</span>
                </div>
              </div>
            </button>
          ) : (
            <div className="flex items-center gap-2">
              <button
                onClick={() => openAuthModal('signin')}
                className="px-3.5 py-1.5 text-xs font-semibold text-[#48372D] hover:text-[#281E19] hover:bg-[#EFE8D8] rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                Sign In
              </button>
              <button
                onClick={() => openAuthModal('signup')}
                className="px-4 py-2 text-xs font-semibold text-white bg-[#281E19] hover:bg-[#3E3029] rounded-lg shadow-sm transition-all hover:shadow whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-1.5"
              >
                <UserIcon className="w-3.5 h-3.5" />
                <span>Join Free</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
