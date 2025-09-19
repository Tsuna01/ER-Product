// src/auth/AuthContext.tsx
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { api } from "../api/axios";

type User = { sub: number; username: string; displayName?: string; role: string } | null;

type Ctx = {
  user: User;
  token: string | null;
  loading: boolean;
  login: (u: string, p: string) => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<Ctx>({} as any);
export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const called = useRef(false); // 👈 กันเรียกซ้ำจาก StrictMode

  useEffect(() => {
    if (called.current) return;
    called.current = true;

    (async () => {
      try {
        const res = await api.post("/auth/refresh", {}); // ไม่มีคุกกี้ก็จะ 401
        setToken(res.data.access_token);
        setUser(res.data.user);
      } catch {
        // เงียบ ๆ พอ ไม่ต้อง console.error
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const login = async (username: string, password: string) => {
    const res = await api.post("/auth/login", { username, password }); // Set-Cookie refresh_token กลับมาใน response
    setToken(res.data.access_token);
    setUser(res.data.user);
  };

  const logout = async () => {
    await api.post("/auth/logout", {});
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
