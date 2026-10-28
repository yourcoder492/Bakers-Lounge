import { Recipe } from '../types/recipe';

/**
 * Scales metric and quantity numbers inside an ingredient line.
 * e.g., "500 g bread flour" at 2x becomes "1000 g bread flour"
 * "1.5 tsp baking powder" at 2x becomes "3 tsp baking powder"
 */
export function scaleIngredient(ingredient: string, factor: number): string {
  if (factor === 1) return ingredient;

  // Match numbers at the beginning or after a colon/prefix
  return ingredient.replace(/(\b\d+(?:\.\d+)?)\s*(g|ml|tbsp|tsp|cup|cups|eggs?|apples?|bananas?|cloves?|sheets?|tiers?|slices?)?/gi, (match, numStr, unit) => {
    const num = parseFloat(numStr);
    if (isNaN(num)) return match;
    const scaled = Math.round(num * factor * 10) / 10;
    if (!unit) return `${scaled}`;
    
    // Pluralize common countable nouns if scaled > 1 and currently singular
    let normalizedUnit = unit;
    if (scaled > 1) {
      if (normalizedUnit.toLowerCase() === 'egg') normalizedUnit = 'eggs';
      else if (normalizedUnit.toLowerCase() === 'apple') normalizedUnit = 'apples';
      else if (normalizedUnit.toLowerCase() === 'banana') normalizedUnit = 'bananas';
      else if (normalizedUnit.toLowerCase() === 'sheet') normalizedUnit = 'sheets';
    }
    return `${scaled} ${normalizedUnit}`;
  });
}

/**
 * Filter recipes by search query and category
 */
export function filterRecipes(
  recipes: Recipe[],
  query: string,
  category: string,
  savedIds: number[] = []
): Recipe[] {
  const cleanQ = query.trim().toLowerCase();

  return recipes.filter(r => {
    // Category check
    if (category === 'Saved') {
      if (!savedIds.includes(r.id)) return false;
    } else if (category !== 'All' && r.c !== category) {
      return false;
    }

    // Query check
    if (!cleanQ) return true;

    const inName = r.n.toLowerCase().includes(cleanQ);
    const inCategory = r.c.toLowerCase().includes(cleanQ);
    const inIngredients = r.i.some(item => item.toLowerCase().includes(cleanQ));

    return inName || inCategory || inIngredients;
  });
}

/**
 * Calculates baker rank and achievements based on mastered recipe count
 */
export function calculateBakerRank(masteredCount: number): {
  title: string;
  nextThreshold: number;
  badgeColor: string;
  progressPercent: number;
} {
  if (masteredCount >= 50) {
    return {
      title: 'Grand Master Boulanger',
      nextThreshold: 70,
      badgeColor: '#B81F55',
      progressPercent: Math.min(100, Math.round((masteredCount / 70) * 100)),
    };
  }
  if (masteredCount >= 25) {
    return {
      title: 'Artisan Pâtissier',
      nextThreshold: 50,
      badgeColor: '#C25E00',
      progressPercent: Math.round((masteredCount / 50) * 100),
    };
  }
  if (masteredCount >= 10) {
    return {
      title: 'Journeyman Baker',
      nextThreshold: 25,
      badgeColor: '#2C7A7B',
      progressPercent: Math.round((masteredCount / 25) * 100),
    };
  }
  if (masteredCount >= 1) {
    return {
      title: 'Apprentice Baker',
      nextThreshold: 10,
      badgeColor: '#6B46C1',
      progressPercent: Math.round((masteredCount / 10) * 100),
    };
  }
  return {
    title: 'Kitchen Novice',
    nextThreshold: 1,
    badgeColor: '#718096',
    progressPercent: 0,
  };
}

/**
 * Validates authentication forms
 */
export function validateAuthForm(
  email: string,
  password: string,
  name?: string,
  isSignUp: boolean = false
): { valid: boolean; error?: string } {
  if (!email || !email.includes('@') || !email.includes('.')) {
    return { valid: false, error: 'Please enter a valid email address.' };
  }
  if (!password || password.length < 6) {
    return { valid: false, error: 'Password must be at least 6 characters.' };
  }
  if (isSignUp && (!name || name.trim().length < 2)) {
    return { valid: false, error: 'Please enter your full name.' };
  }
  return { valid: true };
}
