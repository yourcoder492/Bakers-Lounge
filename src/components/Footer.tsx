import React from 'react';
import { useAuth } from '../context/AuthContext';

interface FooterProps {
  onSelectCategory: (cat: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCategory }) => {
  const { openAuthModal, isAuthenticated } = useAuth();

  return (
    <footer className="bg-[#241A14] text-stone-300 py-14 px-6 lg:px-12 border-t border-[#3A2D25]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* Brand statement */}
        <div className="max-w-sm">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-7 h-7 rounded-lg bg-[#E25C38] text-white flex items-center justify-center font-serif text-sm font-bold">
              B
            </span>
            <span className="font-serif text-xl font-bold text-white tracking-tight">
              The Baker’s Legend
            </span>
          </div>
          <p className="text-xs text-stone-400 leading-relaxed">
            Seventy rigorously tested artisanal formulas across seven craft collections. Standardized in metric grams and scaled for reliable home oven baking.
          </p>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-xs">
          <div>
            <p className="font-semibold text-white uppercase tracking-wider mb-3 text-[11px]">
              Collections
            </p>
            <ul className="space-y-2 text-stone-400">
              <li>
                <button
                  onClick={() => onSelectCategory('Breads')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Breads (10)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('Pastries')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Pastries (10)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('Cakes')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Cakes (10)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('Biscuits & Cookies')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Cookies (10)
                </button>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-white uppercase tracking-wider mb-3 text-[11px]">
              Specialties
            </p>
            <ul className="space-y-2 text-stone-400">
              <li>
                <button
                  onClick={() => onSelectCategory('Savory Items')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Savory Items
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('Sweet Snacks & Desserts')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Desserts
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('Others')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Pretzels & Bagels
                </button>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-white uppercase tracking-wider mb-3 text-[11px]">
              Baker Guild
            </p>
            <ul className="space-y-2 text-stone-400">
              {!isAuthenticated ? (
                <>
                  <li>
                    <button
                      onClick={() => openAuthModal('signin')}
                      className="hover:text-white transition-colors cursor-pointer text-left"
                    >
                      Sign In
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => openAuthModal('signup')}
                      className="hover:text-white transition-colors cursor-pointer text-left"
                    >
                      Create Free Account
                    </button>
                  </li>
                </>
              ) : (
                <li>
                  <span className="text-emerald-400">Active Baker Session</span>
                </li>
              )}
              <li>
                <a href="#craft" className="hover:text-white transition-colors">
                  Baking Invariants
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-[#3A2D25] flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-500 gap-3">
        <p>© 2026 The Baker’s Legend. Quantities suit home and small-batch baking.</p>
        <p>Built with precision craftsmanship and measured flour weights.</p>
      </div>
    </footer>
  );
};
