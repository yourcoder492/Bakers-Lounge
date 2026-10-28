import React from 'react';
import { CATEGORIES_INFO, ALL_RECIPES } from '../data/recipes';
import { ArrowRight, BookOpen } from 'lucide-react';

interface CollectionsOverviewProps {
  onSelectCategory: (cat: string) => void;
}

export const CollectionsOverview: React.FC<CollectionsOverviewProps> = ({ onSelectCategory }) => {
  const collectionList = Object.keys(CATEGORIES_INFO);

  return (
    <section id="collections" className="py-16 px-6 lg:px-12 max-w-7xl mx-auto scroll-mt-14">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-[#9C3218]">
            Master Taxonomy
          </span>
          <h2 className="text-3xl font-serif font-bold text-[#281E19] mt-1">
            Seven Baking Disciplines
          </h2>
          <p className="text-sm text-[#655347] mt-1 max-w-xl">
            Each volume is organized with curated baker tips, oven temperatures, and foundational techniques.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {collectionList.map((catKey) => {
          const cat = CATEGORIES_INFO[catKey];
          const count = ALL_RECIPES.filter(r => r.c === catKey).length;
          const sample = ALL_RECIPES.filter(r => r.c === catKey).slice(0, 3);

          return (
            <div
              key={catKey}
              onClick={() => {
                onSelectCategory(catKey);
                document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group p-6 rounded-2xl bg-white border border-[#DDD5C2] hover:border-[#E25C38] hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-[#9C3218]">
                    {count} Formulas
                  </span>
                  <div
                    className="w-3.5 h-3.5 rounded-full"
                    style={{ backgroundColor: `hsl(${cat.hue}, 70%, 45%)` }}
                  />
                </div>

                <h3 className="font-serif text-xl font-bold text-[#281E19] group-hover:text-[#E25C38] transition-colors">
                  {cat.name}
                </h3>

                <p className="text-xs text-[#655347] mt-2 line-clamp-2 leading-relaxed">
                  {cat.description}
                </p>

                {/* Sample items */}
                <div className="mt-4 pt-3 border-t border-[#F0EAE1] space-y-1">
                  {sample.map(s => (
                    <div key={s.id} className="text-[11px] text-[#786457] truncate flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-[#9C3218]" />
                      <span>{s.n}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-[#F0EAE1] flex items-center justify-between text-xs font-semibold text-[#E25C38] group-hover:text-[#9C3218]">
                <span>Explore Collection</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
