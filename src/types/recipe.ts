export interface Recipe {
  id: number;
  c: string; // Category
  n: string; // Name
  y: string; // Yield
  i: string[]; // Ingredients
  m: string[]; // Method
  b: string; // Bake time & temp
  prepTime?: string;
  difficulty?: 'Beginner' | 'Intermediate' | 'Artisan';
  imageUrl?: string;
  imageAlt?: string;
  accentColor?: string;
}

export type Category = 
  | 'All'
  | 'Breads'
  | 'Pastries'
  | 'Cakes'
  | 'Biscuits & Cookies'
  | 'Savory Items'
  | 'Sweet Snacks & Desserts'
  | 'Others'
  | 'Saved';

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: string;
  savedRecipeIds: number[];
  masteredRecipeIds: number[];
  recipeNotes: Record<number, string>;
  createdAt: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}
