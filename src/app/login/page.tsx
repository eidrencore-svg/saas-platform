"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <form
        className="w-full max-w-sm space-y-4 rounded-2xl bg-white p-8 shadow"
        onSubmit={(e) => {
          e.preventDefault();
          signIn("credentials", { email, password, callbackUrl: "/dashboard" });
        }}
      >
        <h1 className="text-2xl font-bold">Welcome back</h1>
        <input
          type="email" required placeholder="Email" value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-lg border px-3 py-2"
        />
        <input
          type="password" required placeholder="Password" value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-lg border px-3 py-2"
        />
        <button type="submit" className="w-full rounded-lg bg-indigo-600 py-2 text-white hover:bg-indigo-500">
          Sign in
        </button>
      </form>
    </main>
  );
}
