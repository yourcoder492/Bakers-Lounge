import test from 'node:test';
import assert from 'node:assert/strict';
import { scaleIngredient, filterRecipes, calculateBakerRank, validateAuthForm } from './recipeUtils';
import { Recipe } from '../types/recipe';

const mockRecipes: Recipe[] = [
  {
    id: 1,
    c: 'Breads',
    n: 'White Sandwich Loaf',
    y: '1 loaf',
    i: ['500 g bread flour', '10 g salt', '7 g instant yeast'],
    m: ['Mix and knead', 'Proof 1 hr', 'Bake'],
    b: '180°C, 30 min'
  },
  {
    id: 11,
    c: 'Pastries',
    n: 'Butter Croissant',
    y: '12 croissants',
    i: ['500 g flour', '280 g cold butter'],
    m: ['Laminate dough', 'Shape croissants', 'Bake'],
    b: '200°C, 20 min'
  }
];

test('scaleIngredient scales metric quantities accurately', () => {
  assert.equal(scaleIngredient('500 g bread flour', 2), '1000 g bread flour');
  assert.equal(scaleIngredient('10 g salt', 1.5), '15 g salt');
  assert.equal(scaleIngredient('1 egg', 2), '2 eggs');
  assert.equal(scaleIngredient('500 g bread flour', 1), '500 g bread flour');
});

test('filterRecipes filters by category and search keyword', () => {
  const breadResults = filterRecipes(mockRecipes, '', 'Breads', []);
  assert.equal(breadResults.length, 1);
  assert.equal(breadResults[0].n, 'White Sandwich Loaf');

  const searchResults = filterRecipes(mockRecipes, 'croissant', 'All', []);
  assert.equal(searchResults.length, 1);
  assert.equal(searchResults[0].n, 'Butter Croissant');

  const ingredientSearch = filterRecipes(mockRecipes, 'butter', 'All', []);
  assert.equal(ingredientSearch.length, 1);
  assert.equal(ingredientSearch[0].id, 11);

  const savedResults = filterRecipes(mockRecipes, '', 'Saved', [11]);
  assert.equal(savedResults.length, 1);
  assert.equal(savedResults[0].id, 11);
});

test('calculateBakerRank assigns correct tiers and progression', () => {
  const novice = calculateBakerRank(0);
  assert.equal(novice.title, 'Kitchen Novice');

  const apprentice = calculateBakerRank(5);
  assert.equal(apprentice.title, 'Apprentice Baker');

  const master = calculateBakerRank(55);
  assert.equal(master.title, 'Grand Master Boulanger');
});

test('validateAuthForm catches invalid emails and passwords', () => {
  const badEmail = validateAuthForm('invalidemail', 'secret123');
  assert.equal(badEmail.valid, false);

  const shortPassword = validateAuthForm('baker@test.com', '123');
  assert.equal(shortPassword.valid, false);

  const validLogin = validateAuthForm('baker@test.com', 'secret123');
  assert.equal(validLogin.valid, true);

  const emptySignUpName = validateAuthForm('baker@test.com', 'secret123', '', true);
  assert.equal(emptySignUpName.valid, false);

  const validSignUp = validateAuthForm('baker@test.com', 'secret123', 'Julia Child', true);
  assert.equal(validSignUp.valid, true);
});
