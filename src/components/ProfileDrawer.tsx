import React from 'react';
import { useAuth } from '../context/AuthContext';
import { calculateBakerRank } from '../utils/recipeUtils';
import { ALL_RECIPES } from '../data/recipes';
import {
  X,
  LogOut,
  Award,
  CheckCircle2,
  Bookmark,
  FileText,
  Flame,
  ArrowRight
} from 'lucide-react';

interface ProfileDrawerProps {
  onOpenRecipe: (id: number) => void;
}

export const ProfileDrawer: React.FC<ProfileDrawerProps> = ({ onOpenRecipe }) => {
  const {
    user,
    logout,
    isProfileDrawerOpen,
    setIsProfileDrawerOpen
  } = useAuth();

  const [activeTab, setActiveTab] = React.useState<'mastered' | 'saved' | 'notes'>('mastered');

  if (!isProfileDrawerOpen || !user) return null;

  const rank = calculateBakerRank(user.masteredRecipeIds.length);

  const masteredRecipes = ALL_RECIPES.filter(r => user.masteredRecipeIds.includes(r.id));
  const savedRecipes = ALL_RECIPES.filter(r => user.savedRecipeIds.includes(r.id));
  const notedRecipes = ALL_RECIPES.filter(r => !!user.recipeNotes[r.id]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="profile-drawer-title"
      className="fixed inset-0 z-50 bg-[#140A06]/60 backdrop-blur-xs flex justify-end overflow-hidden"
      onClick={() => setIsProfileDrawerOpen(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md bg-[#FAF8F5] h-full shadow-2xl border-l border-[#DDD5C2] flex flex-col animate-in slide-in-from-right duration-200"
      >
        {/* Drawer Header */}
        <div className="p-6 bg-white border-b border-[#E6DFC5] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#E25C38] text-white flex items-center justify-center font-bold text-base overflow-hidden">
              {user.avatar && user.avatar.startsWith('http') ? (
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              ) : (
                user.name.charAt(0)
              )}
            </div>
            <div>
              <h3 id="profile-drawer-title" className="font-serif text-lg font-bold text-[#281E19]">
                {user.name}
              </h3>
              <p className="text-xs text-[#786457]">{user.email}</p>
            </div>
          </div>

          <button
            onClick={() => setIsProfileDrawerOpen(false)}
            aria-label="Close profile drawer"
            className="w-8 h-8 rounded-full bg-[#FAF8F5] hover:bg-[#EFE8D8] text-[#281E19] flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Rank & Stats Card */}
        <div className="p-6 bg-gradient-to-br from-[#281E19] to-[#3E3029] text-white">
          <div className="flex items-center justify-between">
            <span className="text-[11px] uppercase tracking-wider text-amber-200 font-semibold">
              Baker Standing
            </span>
            <div className="px-2 py-0.5 rounded-full bg-white/20 text-white text-[10px] font-bold">
              Guild Tier
            </div>
          </div>

          <p className="font-serif text-xl font-bold mt-1 text-white">
            {rank.title}
          </p>

          <div className="mt-4">
            <div className="flex justify-between text-xs text-stone-300 mb-1.5 font-medium">
              <span>{user.masteredRecipeIds.length} of 70 Bakes Mastered</span>
              <span className="tabular-nums font-semibold">{rank.progressPercent}%</span>
            </div>
            <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#E25C38] transition-all duration-300 rounded-full"
                style={{ width: `${rank.progressPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-[#E6DFC5] bg-white px-6">
          <button
            onClick={() => setActiveTab('mastered')}
            className={`py-3 px-3 text-xs font-semibold border-b-2 transition-colors cursor-pointer ${
              activeTab === 'mastered'
                ? 'border-[#E25C38] text-[#E25C38]'
                : 'border-transparent text-[#786457] hover:text-[#281E19]'
            }`}
          >
            Mastered ({masteredRecipes.length})
          </button>
          <button
            onClick={() => setActiveTab('saved')}
            className={`py-3 px-3 text-xs font-semibold border-b-2 transition-colors cursor-pointer ${
              activeTab === 'saved'
                ? 'border-[#E25C38] text-[#E25C38]'
                : 'border-transparent text-[#786457] hover:text-[#281E19]'
            }`}
          >
            Saved ({savedRecipes.length})
          </button>
          <button
            onClick={() => setActiveTab('notes')}
            className={`py-3 px-3 text-xs font-semibold border-b-2 transition-colors cursor-pointer ${
              activeTab === 'notes'
                ? 'border-[#E25C38] text-[#E25C38]'
                : 'border-transparent text-[#786457] hover:text-[#281E19]'
            }`}
          >
            Notes ({notedRecipes.length})
          </button>
        </div>

        {/* Tab Content List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-3">
          {activeTab === 'mastered' && (
            <>
              {masteredRecipes.length > 0 ? (
                masteredRecipes.map((r) => (
                  <div
                    key={r.id}
                    onClick={() => {
                      onOpenRecipe(r.id);
                      setIsProfileDrawerOpen(false);
                    }}
                    className="p-3.5 bg-white rounded-xl border border-[#DDD5C2] hover:border-[#E25C38] transition-all cursor-pointer flex items-center justify-between"
                  >
                    <div>
                      <h4 className="font-serif font-bold text-sm text-[#281E19]">
                        {r.n}
                      </h4>
                      <p className="text-[11px] text-[#786457] mt-0.5">
                        {r.c} · {r.b}
                      </p>
                    </div>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  </div>
                ))
              ) : (
                <p className="text-xs text-[#786457] text-center py-10">
                  You haven't marked any bakes as mastered yet. Tap "Mark as Mastered" when completing a recipe!
                </p>
              )}
            </>
          )}

          {activeTab === 'saved' && (
            <>
              {savedRecipes.length > 0 ? (
                savedRecipes.map((r) => (
                  <div
                    key={r.id}
                    onClick={() => {
                      onOpenRecipe(r.id);
                      setIsProfileDrawerOpen(false);
                    }}
                    className="p-3.5 bg-white rounded-xl border border-[#DDD5C2] hover:border-[#E25C38] transition-all cursor-pointer flex items-center justify-between"
                  >
                    <div>
                      <h4 className="font-serif font-bold text-sm text-[#281E19]">
                        {r.n}
                      </h4>
                      <p className="text-[11px] text-[#786457] mt-0.5">
                        {r.c} · {r.y}
                      </p>
                    </div>
                    <Bookmark className="w-4 h-4 text-[#E25C38] fill-current shrink-0" />
                  </div>
                ))
              ) : (
                <p className="text-xs text-[#786457] text-center py-10">
                  No saved recipes yet. Tap the bookmark icon on any recipe to save it for your next bake.
                </p>
              )}
            </>
          )}

          {activeTab === 'notes' && (
            <>
              {notedRecipes.length > 0 ? (
                notedRecipes.map((r) => (
                  <div
                    key={r.id}
                    onClick={() => {
                      onOpenRecipe(r.id);
                      setIsProfileDrawerOpen(false);
                    }}
                    className="p-3.5 bg-white rounded-xl border border-[#DDD5C2] hover:border-[#E25C38] transition-all cursor-pointer"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-serif font-bold text-sm text-[#281E19]">
                        {r.n}
                      </h4>
                      <span className="text-[10px] text-[#9C3218] font-semibold">{r.c}</span>
                    </div>
                    <p className="text-xs text-[#655347] bg-[#FAF8F5] p-2.5 rounded-lg border border-[#EBE3D3] italic">
                      "{user.recipeNotes[r.id]}"
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-xs text-[#786457] text-center py-10">
                  No notes recorded yet. Open any recipe to jot down your oven temperatures and fermentation tweaks.
                </p>
              )}
            </>
          )}
        </div>

        {/* Drawer Footer Actions */}
        <div className="p-5 bg-white border-t border-[#E6DFC5] flex items-center justify-between">
          <button
            onClick={logout}
            className="flex items-center gap-2 text-xs font-semibold text-rose-700 hover:text-rose-900 transition-colors cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </button>

          <button
            onClick={() => setIsProfileDrawerOpen(false)}
            className="px-4 py-2 bg-[#281E19] hover:bg-[#3E3029] text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
