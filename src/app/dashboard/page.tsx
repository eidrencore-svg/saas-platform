import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/login");

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p className="mt-2 text-gray-600">Signed in as {session.user?.email}</p>
      <div className="mt-8 grid gap-6 sm:grid-cols-3">
        {["Active users", "MRR", "Churn"].map((m) => (
          <div key={m} className="rounded-2xl border p-6">
            <p className="text-sm text-gray-500">{m}</p>
            <p className="mt-1 text-2xl font-bold">—</p>
          </div>
        ))}
      </div>
    </main>
  );
}
