// src/pages/Login.tsx
import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate(); // 👈

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [remember, setRemember] = useState(true);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  // เติม username อัตโนมัติจาก localStorage ถ้าเคย "จดจำฉัน"
  useEffect(() => {
    const saved = localStorage.getItem("remember_username");
    if (saved) setUsername(saved);
  }, []);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErr(null);
    setLoading(true);
    try {
      await login(username, password);
      if (remember) localStorage.setItem("remember_username", username);
      else localStorage.removeItem("remember_username");
      navigate("/admin", { replace: true }); // 👈 เปลี่ยนมาที่ path ที่มีจริง และใช้ lower-case
    } catch (e: any) {
      setErr(e?.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-cyan-50 via-teal-50 to-white flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="bg-gradient-to-r from-cyan-500 via-cyan-600 to-teal-600 text-white rounded-t-2xl shadow-lg px-6 py-6">
          <h1 className="text-2xl font-bold tracking-tight">เข้าสู่ระบบ</h1>
          <p className="text-white/90 text-sm mt-1">ระบบจัดการโรงพยาบาล</p>
        </div>

        {/* ฟอร์ม */}
        <form onSubmit={onSubmit} className="bg-white rounded-b-2xl shadow-xl ring-1 ring-gray-900/5 p-6 space-y-5">
          {err && (
            <div className="rounded-xl bg-red-50 text-red-700 text-sm px-3 py-2">
              {err}
            </div>
          )}

          <label className="flex flex-col gap-1.5">
            <span className="text-sm font-medium text-gray-700">ชื่อผู้ใช้</span>
            <input
              className="input"
              type="text"
              placeholder="เช่น emp001"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoFocus
              required
              autoComplete="username"
            />
          </label>

          <label className="flex flex-col gap-1.5">
            <span className="text-sm font-medium text-gray-700">รหัสผ่าน</span>
            <div className="relative">
              <input
                className="input pr-12"
                type={showPw ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
              />
              <button
                type="button"
                onClick={() => setShowPw((s) => !s)}
                className="absolute inset-y-0 right-2 my-auto text-xs px-2 py-1 rounded-md hover:bg-gray-100 text-gray-600"
                aria-label={showPw ? "hide password" : "show password"}
              >
                {showPw ? "ซ่อน" : "แสดง"}
              </button>
            </div>
          </label>

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={remember}
                onChange={() => setRemember((r) => !r)}
              />
              จดจำฉัน
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl px-5 py-2.5 bg-gradient-to-r from-cyan-500 via-cyan-600 to-teal-600 text-white font-medium shadow hover:brightness-110 active:scale-[.99] disabled:opacity-60"
          >
            {loading ? "กำลังเข้าสู่ระบบ..." : "เข้าสู่ระบบ"}
          </button>

          <p className="text-center text-sm text-gray-500">
            ยังไม่มีบัญชี?{" "}
            <Link className="text-cyan-700 hover:underline" to="#">
              ติดต่อผู้ดูแล
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
