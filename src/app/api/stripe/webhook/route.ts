import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { db } from "@/lib/db";

export async function POST(req: Request) {
  const body = await req.text();
  const sig = headers().get("stripe-signature")!;

  let event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch {
    return new NextResponse("Invalid signature", { status: 400 });
  }

  if (event.type === "customer.subscription.updated" || event.type === "customer.subscription.created") {
    const sub = event.data.object as any;
    await db.subscription.updateMany({
      where: { stripeSubscriptionId: sub.id },
      data: {
        status: sub.status,
        stripePriceId: sub.items.data[0]?.price.id,
        currentPeriodEnd: new Date(sub.current_period_end * 1000),
      },
    });
  }

  return NextResponse.json({ received: true });
}
