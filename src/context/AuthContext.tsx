import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '../types/recipe';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, name?: string) => void;
  signup: (email: string, name: string) => void;
  logout: () => void;
  quickDemoLogin: (roleName: 'master' | 'apprentice') => void;
  toggleFavorite: (recipeId: number) => void;
  toggleMastered: (recipeId: number) => void;
  saveRecipeNote: (recipeId: number, note: string) => void;
  isFavorite: (recipeId: number) => boolean;
  isMastered: (recipeId: number) => boolean;
  getRecipeNote: (recipeId: number) => string;
  isAuthModalOpen: boolean;
  openAuthModal: (mode?: 'signin' | 'signup') => void;
  closeAuthModal: () => void;
  authModalMode: 'signin' | 'signup';
  isProfileDrawerOpen: boolean;
  setIsProfileDrawerOpen: (open: boolean) => void;
}

const STORAGE_KEY_USER = 'bakers_legend_user';
const STORAGE_KEY_SAVED = 'bakers_legend_favs';
const STORAGE_KEY_MASTERED = 'bakers_legend_mastered';
const STORAGE_KEY_NOTES = 'bakers_legend_notes';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY_USER);
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });

  // Local fallback saved IDs for guests or fast sync
  const [localSavedIds, setLocalSavedIds] = useState<number[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY_SAVED);
      return stored ? JSON.parse(stored) : [6, 11, 22]; // Default favorite presets: Sourdough, Croissant, Chocolate Cake
    } catch {
      return [6, 11, 22];
    }
  });

  const [localMasteredIds, setLocalMasteredIds] = useState<number[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY_MASTERED);
      return stored ? JSON.parse(stored) : [1, 34]; // Default mastered: White Loaf, Choc Chip Cookies
    } catch {
      return [1, 34];
    }
  });

  const [localNotes, setLocalNotes] = useState<Record<number, string>>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY_NOTES);
      return stored ? JSON.parse(stored) : {
        6: 'Bake with Dutch oven preheated to 240°C for extra ear rise. Add ice cube under parchment.',
        11: 'Use 84% European unsalted butter block for highest layer definition.'
      };
    } catch {
      return {};
    }
  });

  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalMode, setAuthModalMode] = useState<'signin' | 'signup'>('signin');
  const [isProfileDrawerOpen, setIsProfileDrawerOpen] = useState(false);

  // Sync to localStorage
  useEffect(() => {
    if (user) {
      localStorage.setItem(STORAGE_KEY_USER, JSON.stringify(user));
    } else {
      localStorage.removeItem(STORAGE_KEY_USER);
    }
  }, [user]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_SAVED, JSON.stringify(localSavedIds));
  }, [localSavedIds]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_MASTERED, JSON.stringify(localMasteredIds));
  }, [localMasteredIds]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_NOTES, JSON.stringify(localNotes));
  }, [localNotes]);

  const openAuthModal = (mode: 'signin' | 'signup' = 'signin') => {
    setAuthModalMode(mode);
    setIsAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  const login = (email: string, name?: string) => {
    const displayName = name || email.split('@')[0].replace(/[._]/g, ' ');
    const formattedName = displayName.charAt(0).toUpperCase() + displayName.slice(1);
    
    const newUser: User = {
      id: 'usr_' + Date.now(),
      name: formattedName,
      email,
      avatar: `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(email)}`,
      role: 'Artisan Baker',
      savedRecipeIds: localSavedIds,
      masteredRecipeIds: localMasteredIds,
      recipeNotes: localNotes,
      createdAt: new Date().toISOString()
    };
    setUser(newUser);
    closeAuthModal();
  };

  const signup = (email: string, name: string) => {
    const newUser: User = {
      id: 'usr_' + Date.now(),
      name,
      email,
      avatar: `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(email)}`,
      role: 'Master Boulanger in Training',
      savedRecipeIds: localSavedIds,
      masteredRecipeIds: localMasteredIds,
      recipeNotes: localNotes,
      createdAt: new Date().toISOString()
    };
    setUser(newUser);
    closeAuthModal();
  };

  const quickDemoLogin = (role: 'master' | 'apprentice') => {
    if (role === 'master') {
      const demoUser: User = {
        id: 'usr_chef_elena',
        name: 'Chef Elena Rostova',
        email: 'elena.bakes@thebakerslegend.com',
        avatar: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=120&auto=format&fit=crop&q=80',
        role: 'Executive Pâtissier',
        savedRecipeIds: [5, 6, 11, 17, 22, 30, 46, 50, 53, 59],
        masteredRecipeIds: [1, 2, 5, 6, 7, 10, 11, 14, 16, 17, 21, 22, 24, 27, 30, 31, 34, 41, 46, 51, 52, 53, 55, 59, 61],
        recipeNotes: {
          6: 'Heritage spelt flour mix adds nutty warmth. Bulk ferment at 22°C for 4.5 hours.',
          11: 'Double fold followed by single fold yields 54 whisper-thin buttery layers.',
          22: 'Bloom Dutch cocoa in freshly brewed dark espresso.'
        },
        createdAt: '2025-01-15'
      };
      setUser(demoUser);
      setLocalSavedIds(demoUser.savedRecipeIds);
      setLocalMasteredIds(demoUser.masteredRecipeIds);
      setLocalNotes(demoUser.recipeNotes);
    } else {
      const apprenticeUser: User = {
        id: 'usr_lucas_m',
        name: 'Lucas Morel',
        email: 'lucas.m@homebaking.org',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&auto=format&fit=crop&q=80',
        role: 'Apprentice Baker',
        savedRecipeIds: [1, 3, 21, 34, 52],
        masteredRecipeIds: [1, 4, 34],
        recipeNotes: {
          1: 'Great for sandwich lunches. Added a teaspoon of dry milk for extra tender crumb.',
          34: 'Use coarse Maldon sea salt flakes right when out of the oven.'
        },
        createdAt: '2026-03-01'
      };
      setUser(apprenticeUser);
      setLocalSavedIds(apprenticeUser.savedRecipeIds);
      setLocalMasteredIds(apprenticeUser.masteredRecipeIds);
      setLocalNotes(apprenticeUser.recipeNotes);
    }
    closeAuthModal();
  };

  const logout = () => {
    setUser(null);
    setIsProfileDrawerOpen(false);
  };

  const toggleFavorite = (recipeId: number) => {
    setLocalSavedIds(prev => {
      const exists = prev.includes(recipeId);
      const next = exists ? prev.filter(id => id !== recipeId) : [...prev, recipeId];
      if (user) {
        setUser({ ...user, savedRecipeIds: next });
      }
      return next;
    });
  };

  const toggleMastered = (recipeId: number) => {
    setLocalMasteredIds(prev => {
      const exists = prev.includes(recipeId);
      const next = exists ? prev.filter(id => id !== recipeId) : [...prev, recipeId];
      if (user) {
        setUser({ ...user, masteredRecipeIds: next });
      }
      return next;
    });
  };

  const saveRecipeNote = (recipeId: number, note: string) => {
    setLocalNotes(prev => {
      const next = { ...prev, [recipeId]: note };
      if (user) {
        setUser({ ...user, recipeNotes: next });
      }
      return next;
    });
  };

  const isFavorite = (recipeId: number) => {
    return user ? user.savedRecipeIds.includes(recipeId) : localSavedIds.includes(recipeId);
  };

  const isMastered = (recipeId: number) => {
    return user ? user.masteredRecipeIds.includes(recipeId) : localMasteredIds.includes(recipeId);
  };

  const getRecipeNote = (recipeId: number) => {
    return user ? (user.recipeNotes[recipeId] || '') : (localNotes[recipeId] || '');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        signup,
        logout,
        quickDemoLogin,
        toggleFavorite,
        toggleMastered,
        saveRecipeNote,
        isFavorite,
        isMastered,
        getRecipeNote,
        isAuthModalOpen,
        openAuthModal,
        closeAuthModal,
        authModalMode,
        isProfileDrawerOpen,
        setIsProfileDrawerOpen,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
