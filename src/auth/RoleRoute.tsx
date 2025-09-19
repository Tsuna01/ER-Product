import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import type { ReactNode } from "react";

type Props = { roles: string[]; children: ReactNode };

export default function RoleRoute({ roles, children }: Props) {
  const { user, loading } = useAuth();
  if (loading) return <div>Loading...</div>;
  if (!user) return <Navigate to="/auth/login" replace />;
  if (!roles.includes(user.role)) return <Navigate to="/admin" replace />; // เปลี่ยน fallback ไม่ให้ย้อน login
  return <>{children}</>;
}