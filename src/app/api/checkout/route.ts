import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { stripe } from "@/lib/stripe";

export async function POST() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) return new NextResponse("Unauthorized", { status: 401 });

  const checkout = await stripe.checkout.sessions.create({
    mode: "subscription",
    customer_email: session.user.email,
    line_items: [{ price: process.env.STRIPE_PRICE_ID!, quantity: 1 }],
    success_url: `${process.env.NEXTAUTH_URL}/dashboard?success=1`,
    cancel_url: `${process.env.NEXTAUTH_URL}/?canceled=1`,
  });

  return NextResponse.json({ url: checkout.url });
}
