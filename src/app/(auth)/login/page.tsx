"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function SignUpPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    agree: false,
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock signup - redirect to dashboard
    window.location.href = "/dashboard";
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "14px 16px",
    fontSize: "14px",
    borderRadius: "12px",
    border: "1px solid var(--border-primary)",
    background: "var(--bg-input)",
    color: "var(--text-primary)",
    outline: "none",
    transition: "border-color 200ms ease, box-shadow 200ms ease",
  };

  return (
    <div
      className="auth-gradient"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      {/* Top Bar */}
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 24px", zIndex: 10 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "8px",
              background: "var(--accent-primary)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <span style={{ fontSize: "15px", fontWeight: 700, color: "#fff" }}>aps</span>
        </div>
        <Link
          href="/dashboard"
          style={{
            padding: "8px 20px",
            fontSize: "12px",
            fontWeight: 700,
            borderRadius: "8px",
            background: "var(--accent-primary)",
            color: "#fff",
            textDecoration: "none",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="7" height="7" />
            <rect x="14" y="3" width="7" height="7" />
            <rect x="3" y="14" width="7" height="7" />
            <rect x="14" y="14" width="7" height="7" />
          </svg>
          Dashboard
        </Link>
      </div>

      {/* Card */}
      <div
        style={{
          width: "100%",
          maxWidth: "420px",
          background: "var(--bg-card)",
          borderRadius: "20px",
          padding: "40px 32px",
          boxShadow: "var(--shadow-modal)",
          border: "1px solid var(--border-primary)",
          animation: "fadeIn 500ms ease",
        }}
      >
        <h1 style={{ fontSize: "24px", fontWeight: 700, color: "var(--text-primary)", textAlign: "center", marginBottom: "4px" }}>
          Sign up
        </h1>
        <p style={{ fontSize: "13px", color: "var(--text-muted)", textAlign: "center", marginBottom: "28px" }}>
          Already have an account?{" "}
          <Link href="/login" style={{ color: "var(--accent-primary)", textDecoration: "none", fontWeight: 600 }}>
            Log in
          </Link>
        </p>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <div>
            <input
              type="text"
              name="firstName"
              placeholder="First name*"
              value={form.firstName}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>
          <div>
            <input
              type="text"
              name="lastName"
              placeholder="Last name*"
              value={form.lastName}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email address*"
              value={form.email}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>
          <div style={{ position: "relative" }}>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password (8+ characters)*"
              value={form.password}
              onChange={handleChange}
              required
              minLength={8}
              style={{ ...inputStyle, paddingRight: "44px" }}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: "absolute",
                right: "14px",
                top: "50%",
                transform: "translateY(-50%)",
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "var(--text-muted)",
                padding: "4px",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {showPassword ? (
                  <>
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                    <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                    <line x1="1" y1="1" x2="23" y2="23" />
                  </>
                ) : (
                  <>
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </>
                )}
              </svg>
            </button>
          </div>

          {/* Agreement */}
          <label style={{ display: "flex", alignItems: "flex-start", gap: "10px", cursor: "pointer", fontSize: "12px", color: "var(--text-secondary)", lineHeight: "1.5" }}>
            <input
              type="checkbox"
              name="agree"
              checked={form.agree}
              onChange={handleChange}
              required
              style={{ marginTop: "3px", accentColor: "var(--accent-primary)", width: "16px", height: "16px", flexShrink: 0 }}
            />
            <span>
              I agree to Aps&apos;s{" "}
              <a href="#" style={{ color: "var(--accent-primary)", textDecoration: "underline" }}>Terms & Conditions</a>
              {" "}and acknowledge the{" "}
              <a href="#" style={{ color: "var(--accent-primary)", textDecoration: "underline" }}>Privacy Policy</a>
            </span>
          </label>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "14px",
              fontSize: "14px",
              fontWeight: 700,
              borderRadius: "12px",
              background: "linear-gradient(135deg, #22c55e, #16a34a)",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              marginTop: "4px",
              transition: "opacity 200ms ease",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.9"; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
          >
            Create account
          </button>
        </form>

        {/* Social Login Divider */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", margin: "24px 0 16px" }}>
          <div style={{ flex: 1, height: "1px", background: "var(--border-primary)" }} />
          <span style={{ fontSize: "11px", color: "var(--text-muted)", fontWeight: 500 }}>or continue with</span>
          <div style={{ flex: 1, height: "1px", background: "var(--border-primary)" }} />
        </div>

        {/* Social Buttons */}
        <div style={{ display: "flex", gap: "12px" }}>
          {[
            { label: "Apple", icon: (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
            )},
            { label: "Google", icon: (
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
            )},
            { label: "Meta", icon: (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#1877F2">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
            )},
          ].map((social) => (
            <button
              key={social.label}
              type="button"
              style={{
                flex: 1,
                padding: "12px",
                borderRadius: "12px",
                background: "var(--bg-tertiary)",
                border: "1px solid var(--border-primary)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--text-primary)",
                transition: "background 200ms ease",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "var(--bg-card-hover)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "var(--bg-tertiary)"; }}
            >
              {social.icon}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}