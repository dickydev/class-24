"use client";

import AuthGuard from "@/src/components/auth/AuthGuard";
import Link from "next/link";

export default function Home() {
  return (
    <AuthGuard>
      <main>
        <h1>Dashboard</h1>
        <Link href={"/posts"}>Posts</Link>
      </main>
    </AuthGuard>
  );
}
