import Link from "next/link";

const plans = [
  { name: "Starter", price: "$0", features: ["1 project", "Community support"] },
  { name: "Pro", price: "$19/mo", features: ["Unlimited projects", "Priority support", "Analytics"] },
  { name: "Team", price: "$49/mo", features: ["Everything in Pro", "Team seats", "SSO"] },
];

export default function LandingPage() {
  return (
    <main>
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <span className="text-xl font-bold">SaaS Platform</span>
        <div className="flex gap-4">
          <Link href="/login" className="text-sm text-gray-600 hover:text-gray-900">Log in</Link>
          <Link href="/dashboard" className="rounded-lg bg-gray-900 px-4 py-2 text-sm text-white hover:bg-gray-700">
            Get started
          </Link>
        </div>
      </nav>

      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight">
          Ship your SaaS <span className="text-indigo-600">faster</span>
        </h1>
        <p className="mt-6 text-lg text-gray-600">
          Auth, billing, and dashboard out of the box — so you can focus on your product.
        </p>
        <Link href="/dashboard" className="mt-8 inline-block rounded-lg bg-indigo-600 px-6 py-3 text-white hover:bg-indigo-500">
          Start building
        </Link>
      </section>

      <section className="mx-auto grid max-w-5xl gap-6 px-6 pb-24 sm:grid-cols-3">
        {plans.map((p) => (
          <div key={p.name} className="rounded-2xl border p-6 shadow-sm">
            <h3 className="text-lg font-semibold">{p.name}</h3>
            <p className="mt-2 text-3xl font-bold">{p.price}</p>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              {p.features.map((f) => <li key={f}>• {f}</li>)}
            </ul>
          </div>
        ))}
      </section>
    </main>
  );
}
