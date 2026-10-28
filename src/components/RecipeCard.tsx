import React from 'react';
import { Recipe } from '../types/recipe';
import { CATEGORIES_INFO } from '../data/recipes';
import { RecipeArt } from './RecipeArt';
import { Bookmark, CheckCircle2, Flame, ArrowUpRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface RecipeCardProps {
  recipe: Recipe;
  onOpen: (id: number) => void;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, onOpen }) => {
  const { toggleFavorite, isFavorite, toggleMastered, isMastered } = useAuth();
  const cat = CATEGORIES_INFO[recipe.c];
  const hue = cat ? cat.hue : 34;

  const favorited = isFavorite(recipe.id);
  const mastered = isMastered(recipe.id);

  return (
    <div className="group relative bg-white border border-[#DDD5C2] rounded-2xl overflow-hidden hover:border-[#C25E00] hover:shadow-md transition-all duration-300 flex flex-col justify-between text-left">
      {/* Visual Header Slot */}
      <div
        onClick={() => onOpen(recipe.id)}
        className="relative h-44 overflow-hidden cursor-pointer flex items-center justify-center transition-colors"
        style={{
          backgroundColor: recipe.imageUrl ? '#1C1411' : `hsl(${hue}, 75%, 92%)`,
        }}
      >
        {recipe.imageUrl ? (
          <img
            src={recipe.imageUrl}
            alt={recipe.imageAlt || recipe.n}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="p-4 transition-transform duration-300 group-hover:scale-110">
            <RecipeArt recipe={recipe} className="w-24 h-24 filter drop-shadow-md" />
          </div>
        )}

        {/* Favorite Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite(recipe.id);
          }}
          aria-label={favorited ? `Unsave ${recipe.n}` : `Save ${recipe.n}`}
          className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
            favorited
              ? 'bg-[#E25C38] text-white shadow-sm'
              : 'bg-white/90 backdrop-blur-sm text-[#48372D] hover:bg-white hover:text-[#E25C38]'
          }`}
        >
          <Bookmark className={`w-3.5 h-3.5 ${favorited ? 'fill-current' : ''}`} />
        </button>

        {/* Mastered Badge (if achieved) */}
        {mastered && (
          <div className="absolute top-3 left-3 px-2 py-0.5 bg-emerald-600/90 text-white text-[11px] font-semibold rounded-md flex items-center gap-1 shadow-sm backdrop-blur-sm">
            <CheckCircle2 className="w-3 h-3" />
            <span>Mastered</span>
          </div>
        )}
      </div>

      {/* Details Body */}
      <div className="p-4.5 flex-1 flex flex-col justify-between">
        <div>
          {/* Metadata line without pill enclosure */}
          <div className="flex items-center gap-1.5 text-xs text-[#786457] mb-1.5">
            <span className="font-medium text-[#9C3218]">{recipe.c}</span>
            <span aria-hidden="true">·</span>
            <span>{recipe.y}</span>
          </div>

          <h3
            onClick={() => onOpen(recipe.id)}
            className="font-serif font-bold text-base text-[#281E19] group-hover:text-[#E25C38] transition-colors cursor-pointer leading-snug"
          >
            {recipe.n}
          </h3>

          <p className="text-xs text-[#655347] mt-1.5 line-clamp-2">
            {recipe.i.slice(0, 3).join(', ')}
            {recipe.i.length > 3 ? `, +${recipe.i.length - 3} more` : ''}
          </p>
        </div>

        {/* Card Footer Bar */}
        <div className="mt-4 pt-3 border-t border-[#F0EAE1] flex items-center justify-between">
          <div className="text-[11px] font-mono text-[#786457] truncate max-w-[150px]">
            {recipe.b}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => toggleMastered(recipe.id)}
              title={mastered ? 'Mark unmastered' : 'Mark as mastered bake'}
              className={`p-1 rounded-md transition-colors ${
                mastered
                  ? 'text-emerald-700 bg-emerald-50 hover:bg-emerald-100'
                  : 'text-[#8D7868] hover:text-[#281E19] hover:bg-[#F5EFE4]'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
            </button>

            <button
              onClick={() => onOpen(recipe.id)}
              className="p-1 text-[#E25C38] hover:bg-[#FDF2EE] rounded-md transition-colors"
              aria-label={`Open ${recipe.n}`}
            >
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
