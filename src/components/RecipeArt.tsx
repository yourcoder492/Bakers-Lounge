import React from 'react';
import { Recipe } from '../types/recipe';
import { CATEGORIES_INFO } from '../data/recipes';

interface RecipeArtProps {
  recipe: Recipe;
  className?: string;
}

export const RecipeArt: React.FC<RecipeArtProps> = ({ recipe, className = 'w-24 h-24' }) => {
  const cat = CATEGORIES_INFO[recipe.c];
  const hue = cat ? cat.hue : 34;

  const n = recipe.n.toLowerCase();

  // Palette selection
  let baseColor = '#E3A653';
  let toppingColor = '#F4B6C9';

  if (/chocolate|brownie|lava|cocoa|pudding|tiramisu/.test(n)) {
    baseColor = '#7A4A2B';
    toppingColor = '#3F2214';
  } else if (/red velvet/.test(n)) {
    baseColor = '#C2272D';
    toppingColor = '#FFF4EE';
  } else if (/lemon/.test(n)) {
    baseColor = '#F2D04A';
    toppingColor = '#FFF3B0';
  } else if (/carrot/.test(n)) {
    baseColor = '#E08A3C';
    toppingColor = '#FFF1E0';
  } else if (/blueberry/.test(n)) {
    baseColor = '#7A67C2';
    toppingColor = '#F6F0FF';
  } else if (/banana|peanut|oat|ginger|multigrain|whole wheat|rusk/.test(n)) {
    baseColor = '#C98E4F';
    toppingColor = '#F1D9B0';
  } else if (/caramel/.test(n)) {
    baseColor = '#E0A24A';
    toppingColor = '#B8601F';
  } else if (/vanilla|panna|cheesecake|wedding/.test(n)) {
    baseColor = '#F0D9A8';
    toppingColor = '#FFF6EE';
  }

  // Kind selection
  let kind = 'misc';
  if (/doughnut|donut/.test(n)) kind = 'donut';
  else if (/eclair|cream puff|cream roll|horn/.test(n)) kind = 'eclair';
  else if (/cupcake|muffin/.test(n)) kind = 'cupcake';
  else if (/cheesecake|tiramisu|crème|creme|panna|pudding|lava/.test(n)) kind = 'cup';
  else if (/baguette|garlic bread|straws|rusk/.test(n)) kind = 'long';
  else if (/croissant|danish/.test(n)) kind = 'croissant';
  else if (/loaf|banana bread|tea cake/.test(n)) kind = 'loaf';
  else if (/cookie|biscuit|shortbread|cracker/.test(n)) kind = 'cookie';
  else if (/cake|brownie|sponge|swiss roll/.test(n)) kind = 'cake';
  else if (/bun|roll|pita|naan|bagel|pretzel|focaccia|sandwich/.test(n)) kind = 'bun';
  else if (/pie|tart|quiche|turnover|patties|sausage|puffs/.test(n)) kind = 'pie';
  else if (/pizza/.test(n)) kind = 'pizza';
  else if (/frosting|ganache/.test(n)) kind = 'bowl';

  const strokeProps = {
    stroke: '#4A2E1C',
    strokeWidth: '2.5',
    strokeLinejoin: 'round' as const,
    strokeLinecap: 'round' as const,
  };

  return (
    <svg viewBox="0 0 100 100" className={className} {...strokeProps} role="img" aria-label={recipe.n}>
      {kind === 'donut' && (
        <>
          <circle cx="50" cy="52" r="36" fill={baseColor} />
          <path d="M20 46q2-24 30-26t30 26q-4 12-12 8t-12 6-12-6-12 6-12-14z" fill={toppingColor} strokeWidth="2" />
          <circle cx="50" cy="52" r="11" fill={`hsl(${hue}, 70%, 90%)`} />
          <path d="M32 40l4-2" stroke="#FFF" strokeWidth="3" />
          <path d="M60 32l4 2" stroke="#7FD1E0" strokeWidth="3" />
          <path d="M70 46l3-3" stroke="#FFE07A" strokeWidth="3" />
          <path d="M40 28l-1 4" stroke="#7FD1E0" strokeWidth="3" />
        </>
      )}

      {kind === 'loaf' && (
        <>
          <path d="M16 52c-6-15 8-28 34-28s40 13 34 28c-1 3-3 4-5 4v22c0 4-3 6-7 6H28c-4 0-7-2-7-6V56c-2 0-4-1-5-4z" fill={baseColor} />
          <path d="M34 40l9 11M50 37l9 11M66 40l9 11" fill="none" />
          <path d="M28 70h44" stroke="#C98A3A" fill="none" />
        </>
      )}

      {kind === 'croissant' && (
        <>
          <g fill={baseColor}>
            <ellipse cx="20" cy="64" rx="10" ry="16" transform="rotate(-55 20 64)" />
            <ellipse cx="80" cy="64" rx="10" ry="16" transform="rotate(55 80 64)" />
            <ellipse cx="33" cy="47" rx="12" ry="19" transform="rotate(-32 33 47)" />
            <ellipse cx="67" cy="47" rx="12" ry="19" transform="rotate(32 67 47)" />
            <ellipse cx="50" cy="42" rx="13" ry="21" />
          </g>
          <path d="M44 28q-2 14 0 28M56 28q2 14 0 28" fill="none" stroke="#C98A3A" />
        </>
      )}

      {kind === 'cake' && (
        <>
          <rect x="18" y="58" width="64" height="26" rx="5" fill={baseColor} />
          <rect x="25" y="40" width="50" height="20" rx="5" fill={toppingColor} />
          <path d="M25 46q6 8 12 0t13 0 13 0 12 0" fill="#FFF" />
          <rect x="48" y="24" width="4" height="16" fill="#7FC8D8" />
          <path d="M50 14q6 6 0 11q-6-5 0-11z" fill="#FFB53B" />
          <circle cx="34" cy="38" r="4" fill="#D6284F" />
          <circle cx="66" cy="38" r="4" fill="#D6284F" />
        </>
      )}

      {kind === 'cookie' && (
        <>
          <circle cx="50" cy="50" r="34" fill={baseColor} />
          <g fill="#4A2C1A" stroke="none">
            <ellipse cx="38" cy="38" rx="5" ry="4" />
            <ellipse cx="60" cy="34" rx="4" ry="5" />
            <ellipse cx="66" cy="56" rx="5" ry="4" />
            <ellipse cx="44" cy="62" rx="5" ry="4" />
            <ellipse cx="30" cy="54" rx="3" ry="3" />
            <ellipse cx="54" cy="48" rx="3" ry="3" />
          </g>
        </>
      )}

      {kind === 'bun' && (
        <>
          <path d="M12 64c0-27 17-42 38-42s38 15 38 42c0 8-6 12-12 12H24c-6 0-12-4-12-12z" fill={baseColor} />
          <path d="M12 64h76" fill="none" stroke="#A9692A" />
          <g fill="#FFF6DC" stroke="none">
            <ellipse cx="38" cy="40" rx="4" ry="2" transform="rotate(-20 38 40)" />
            <ellipse cx="54" cy="33" rx="4" ry="2" />
            <ellipse cx="66" cy="45" rx="4" ry="2" transform="rotate(25 66 45)" />
            <ellipse cx="48" cy="50" rx="4" ry="2" />
          </g>
        </>
      )}

      {kind === 'long' && (
        <g transform="rotate(-28 50 50)">
          <rect x="6" y="37" width="88" height="26" rx="13" fill={baseColor} />
          <path d="M24 41l8 18M42 41l8 18M60 41l8 18" fill="none" stroke="#A9692A" />
        </g>
      )}

      {kind === 'pie' && (
        <>
          <ellipse cx="50" cy="62" rx="40" ry="22" fill={baseColor} />
          <ellipse cx="50" cy="54" rx="35" ry="19" fill={baseColor} stroke="#A9692A" />
          <path d="M26 48l38 14M38 38l36 14M28 62l30-24M44 70l30-22" fill="none" stroke="#A9692A" />
        </>
      )}

      {kind === 'cupcake' && (
        <>
          <path d="M24 56c-6-16 8-18 12-26 4-9 24-9 28 0 4 8 18 10 12 26z" fill={toppingColor} />
          <path d="M26 54h48l-7 30H33z" fill={baseColor} />
          <path d="M40 56l3 28M50 56v28M60 56l-3 28" fill="none" stroke="#A9692A" />
          <circle cx="50" cy="22" r="5" fill="#D6284F" />
        </>
      )}

      {kind === 'eclair' && (
        <>
          <rect x="8" y="40" width="84" height="28" rx="14" fill={baseColor} />
          <path d="M13 46q37-12 74 0v8q-37 9-74 0z" fill={toppingColor} />
          <path d="M22 70q28 8 56 0" fill="none" stroke="#FFF" strokeWidth="3" />
        </>
      )}

      {kind === 'pizza' && (
        <>
          <path d="M50 90L14 28Q50 10 86 28z" fill="#F3C65C" />
          <path d="M14 28Q50 10 86 28" fill="none" strokeWidth="7" stroke="#D99A45" />
          <g fill="#C8452F">
            <circle cx="38" cy="40" r="6" />
            <circle cx="60" cy="38" r="6" />
            <circle cx="50" cy="58" r="6" />
          </g>
          <path d="M45 72l3 3M54 66l3 2M34 52l3 2" stroke="#3F8F4A" fill="none" />
        </>
      )}

      {kind === 'cup' && (
        <>
          <path d="M20 38h60l-6 42c-1 5-4 7-8 7H34c-4 0-7-2-8-7z" fill="#F6EFE4" />
          <ellipse cx="50" cy="38" rx="30" ry="9" fill={baseColor} />
          <path d="M30 42q20 6 40 0" fill="none" stroke={toppingColor} strokeWidth="4" />
          <circle cx="50" cy="30" r="5" fill="#D6284F" />
        </>
      )}

      {kind === 'misc' && (
        <>
          <rect x="16" y="22" width="68" height="62" rx="12" fill={baseColor} />
          <path d="M33 22v62M50 22v62M67 22v62M16 41h68M16 62h68" fill="none" stroke="#B97A2E" />
          <rect x="38" y="40" width="24" height="22" rx="4" fill="#FFEAA0" />
          <path d="M62 46q14 2 12 14" fill="none" stroke="#C4571F" strokeWidth="3.5" />
        </>
      )}
    </svg>
  );
};
