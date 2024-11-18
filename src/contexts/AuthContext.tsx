// src/contexts/AuthContext.tsx
export interface AuthContextType {
    error: string | null;
    setError: (error: string | null) => void;
    login: (email: string, password: string) => Promise<void>;
    requestPasswordReset: (email: string) => Promise<void>;
  }