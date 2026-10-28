import React, { useState, useEffect } from 'react';
import { ALL_RECIPES, CATEGORIES_INFO } from '../data/recipes';
import { scaleIngredient } from '../utils/recipeUtils';
import { useAuth } from '../context/AuthContext';
import { RecipeArt } from './RecipeArt';
import {
  X,
  Printer,
  Bookmark,
  CheckCircle2,
  Clock,
  Flame,
  ChefHat,
  Lightbulb,
  Edit3,
  Check
} from 'lucide-react';

interface RecipeModalProps {
  recipeId: number | null;
  onClose: () => void;
}

export const RecipeModal: React.FC<RecipeModalProps> = ({ recipeId, onClose }) => {
  const {
    isFavorite,
    toggleFavorite,
    isMastered,
    toggleMastered,
    getRecipeNote,
    saveRecipeNote,
    isAuthenticated,
    openAuthModal
  } = useAuth();

  const [scale, setScale] = useState<number>(1);
  const [checkedIngredients, setCheckedIngredients] = useState<Record<number, boolean>>({});
  const [completedSteps, setCompletedSteps] = useState<Record<number, boolean>>({});
  const [noteText, setNoteText] = useState<string>('');
  const [isNoteSaved, setIsNoteSaved] = useState<boolean>(false);

  const recipe = ALL_RECIPES.find(r => r.id === recipeId);

  useEffect(() => {
    if (recipeId) {
      setScale(1);
      setCheckedIngredients({});
      setCompletedSteps({});
      setNoteText(getRecipeNote(recipeId));
      setIsNoteSaved(false);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [recipeId]);

  if (!recipe) return null;

  const catInfo = CATEGORIES_INFO[recipe.c];
  const tip = catInfo ? catInfo.bakerTips[recipe.id % catInfo.bakerTips.length] : 'Weigh your ingredients for repeatable baker accuracy.';

  const favorited = isFavorite(recipe.id);
  const mastered = isMastered(recipe.id);

  const totalSteps = recipe.m.length;
  const doneStepsCount = Object.values(completedSteps).filter(Boolean).length;
  const progressPercent = totalSteps > 0 ? Math.round((doneStepsCount / totalSteps) * 100) : 0;

  const handleToggleIngredient = (idx: number) => {
    setCheckedIngredients(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  const handleToggleStep = (idx: number) => {
    setCompletedSteps(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  const handleSaveNote = () => {
    saveRecipeNote(recipe.id, noteText);
    setIsNoteSaved(true);
    setTimeout(() => setIsNoteSaved(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-recipe-title"
      className="fixed inset-0 z-50 bg-[#140A06]/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl border border-[#DDD5C2] my-auto flex flex-col max-h-[92vh] animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Modal Top Header with Close and Quick Actions */}
        <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
          <button
            onClick={() => toggleFavorite(recipe.id)}
            aria-label={favorited ? 'Remove from favorites' : 'Save to favorites'}
            className={`w-9 h-9 rounded-full flex items-center justify-center shadow-md transition-colors cursor-pointer ${
              favorited ? 'bg-[#E25C38] text-white' : 'bg-white/90 text-[#281E19] hover:bg-white'
            }`}
          >
            <Bookmark className={`w-4 h-4 ${favorited ? 'fill-current' : ''}`} />
          </button>
          <button
            onClick={onClose}
            aria-label="Close recipe details"
            className="w-9 h-9 rounded-full bg-white/90 hover:bg-white text-[#281E19] shadow-md flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Hero Visual Banner */}
        <div
          className="relative h-64 sm:h-72 overflow-hidden bg-[#241A14] flex items-center justify-center shrink-0"
          style={{
            backgroundColor: recipe.imageUrl ? '#1C1411' : `hsl(${catInfo?.hue || 34}, 75%, 90%)`,
          }}
        >
          {recipe.imageUrl ? (
            <>
              <img
                src={recipe.imageUrl}
                alt={recipe.imageAlt || recipe.n}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </>
          ) : (
            <div className="p-8">
              <RecipeArt recipe={recipe} className="w-36 h-36 filter drop-shadow-xl" />
            </div>
          )}

          {/* Banner Meta Overlay */}
          <div className="absolute bottom-5 left-6 right-6 text-white">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-200 mb-1">
              <span>{recipe.c}</span>
              <span aria-hidden="true">·</span>
              <span>Recipe #{recipe.id}</span>
              {recipe.difficulty && (
                <>
                  <span aria-hidden="true">·</span>
                  <span>{recipe.difficulty}</span>
                </>
              )}
            </div>
            <h2 id="modal-recipe-title" className="font-serif text-2xl sm:text-3xl font-bold leading-tight">
              {recipe.n}
            </h2>
            <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-stone-200">
              <span className="flex items-center gap-1 font-mono">
                <Flame className="w-3.5 h-3.5 text-amber-400" />
                {recipe.b}
              </span>
              <span aria-hidden="true">·</span>
              <span>Yields: {recipe.y}</span>
              {recipe.prepTime && (
                <>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-amber-300" />
                    {recipe.prepTime}
                  </span>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Scrollable Modal Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
          {/* Progress Bar & Mastered Status */}
          <div className="bg-[#FAF8F5] p-4 rounded-xl border border-[#E6DFC5] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center justify-between text-xs mb-1.5 font-medium text-[#786457]">
                <span>Baking Progress</span>
                <span className="tabular-nums font-semibold text-[#281E19]">
                  {doneStepsCount} of {totalSteps} steps completed ({progressPercent}%)
                </span>
              </div>
              <div className="w-full h-2 bg-[#E6DFC5] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#E25C38] transition-all duration-300 rounded-full"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            <button
              onClick={() => toggleMastered(recipe.id)}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-colors cursor-pointer shrink-0 ${
                mastered
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-white border border-[#DDD5C2] text-[#281E19] hover:bg-[#F2ECE0]'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>{mastered ? 'Mastered Bake' : 'Mark as Mastered'}</span>
            </button>
          </div>

          {/* Ingredients Section with Scaling */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
              <div>
                <h3 className="font-serif text-lg font-bold text-[#281E19]">
                  Formula & Ingredients
                </h3>
                <p className="text-xs text-[#786457]">
                  Check off items as you measure on your kitchen scale.
                </p>
              </div>

              {/* Serving Size Scaler */}
              <div className="flex items-center gap-1 p-1 bg-[#F5EFE4] rounded-lg border border-[#E0D8C3] self-start sm:self-auto">
                <span className="text-[11px] font-semibold text-[#786457] px-2">Batch:</span>
                {[1, 2, 3].map((f) => (
                  <button
                    key={f}
                    onClick={() => setScale(f)}
                    className={`px-2.5 py-1 text-xs font-bold rounded-md transition-all cursor-pointer ${
                      scale === f
                        ? 'bg-white text-[#281E19] shadow-xs'
                        : 'text-[#655347] hover:text-[#281E19]'
                    }`}
                  >
                    {f}x
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {recipe.i.map((item, idx) => {
                const scaled = scaleIngredient(item, scale);
                const isChecked = !!checkedIngredients[idx];

                return (
                  <label
                    key={idx}
                    className={`flex items-start gap-3 p-3 rounded-xl border transition-all cursor-pointer select-none ${
                      isChecked
                        ? 'bg-[#F9F7F4] border-[#E8E2D5] text-[#9E8E82]'
                        : 'bg-white border-[#E6DFC5] text-[#281E19] hover:border-[#C25E00]'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => handleToggleIngredient(idx)}
                      className="mt-0.5 w-4 h-4 rounded text-[#E25C38] focus:ring-[#E25C38] border-[#DDD5C2] cursor-pointer"
                    />
                    <span className={`text-xs leading-relaxed ${isChecked ? 'line-through' : 'font-medium'}`}>
                      {scaled}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Step-by-Step Method Section */}
          <div>
            <h3 className="font-serif text-lg font-bold text-[#281E19] mb-1">
              Method, Step by Step
            </h3>
            <p className="text-xs text-[#786457] mb-4">
              Tap each step as you complete it to advance your progress.
            </p>

            <div className="space-y-3">
              {recipe.m.map((step, idx) => {
                const isDone = !!completedSteps[idx];

                return (
                  <div
                    key={idx}
                    onClick={() => handleToggleStep(idx)}
                    className={`p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-3.5 ${
                      isDone
                        ? 'bg-[#FAF8F5] border-[#E6DFC5] opacity-60'
                        : 'bg-white border-[#DDD5C2] hover:border-[#C25E00]'
                    }`}
                  >
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${
                        isDone
                          ? 'bg-emerald-600 text-white'
                          : 'bg-[#281E19] text-white'
                      }`}
                    >
                      {isDone ? <Check className="w-3.5 h-3.5" /> : idx + 1}
                    </div>

                    <div className="flex-1">
                      <p className={`text-xs sm:text-sm text-[#281E19] leading-relaxed ${isDone ? 'line-through text-[#8D7868]' : ''}`}>
                        {step}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Baker's Tip Callout */}
          <div className="p-4.5 rounded-2xl bg-amber-50/80 border border-amber-200/80 flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-serif text-sm font-bold text-amber-900">
                Baker’s Guild Secret
              </h4>
              <p className="text-xs text-amber-800/90 mt-1 leading-relaxed">
                {tip}
              </p>
            </div>
          </div>

          {/* Baker's Notebook / Personal Notes */}
          <div className="p-5 rounded-2xl bg-[#F7F2E7] border border-[#DDD5C2]">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#281E19]">
                <Edit3 className="w-4 h-4 text-[#E25C38]" />
                <span>My Baker’s Notebook & Oven Notes</span>
              </div>
              {isNoteSaved && (
                <span className="text-[11px] font-semibold text-emerald-700 flex items-center gap-1">
                  <Check className="w-3 h-3" /> Saved to profile
                </span>
              )}
            </div>

            <textarea
              value={noteText}
              onChange={(e) => setNoteText(e.target.value)}
              placeholder="Record your oven quirks, hydration adjustments, proofing room temperatures, or flour brands..."
              rows={3}
              className="w-full p-3 bg-white border border-[#DDD5C2] rounded-xl text-xs text-[#281E19] placeholder-[#8D7868] focus:outline-none focus:ring-2 focus:ring-[#E25C38]"
            />

            <div className="flex items-center justify-between mt-2.5">
              <span className="text-[11px] text-[#786457]">
                {isAuthenticated
                  ? 'Notes persist securely to your account.'
                  : 'Saved locally. Sign in to sync across devices.'}
              </span>

              <button
                onClick={handleSaveNote}
                className="px-3.5 py-1.5 bg-[#281E19] hover:bg-[#3E3029] text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
              >
                Save Notes
              </button>
            </div>
          </div>
        </div>

        {/* Modal Bottom Footer Actions */}
        <div className="p-4 sm:p-5 bg-[#FAF8F5] border-t border-[#E6DFC5] flex items-center justify-between gap-3 shrink-0">
          <button
            onClick={handlePrint}
            className="px-4 py-2 border border-[#DDD5C2] bg-white hover:bg-[#F2ECE0] text-[#281E19] text-xs font-semibold rounded-xl flex items-center gap-2 transition-colors cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5 text-[#786457]" />
            <span>Print Recipe Card</span>
          </button>

          <button
            onClick={onClose}
            className="px-6 py-2 bg-[#E25C38] hover:bg-[#C94723] text-white text-xs font-semibold rounded-xl transition-colors cursor-pointer"
          >
            Done Baking
          </button>
        </div>
      </div>
    </div>
  );
};
