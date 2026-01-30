import { headers } from "next/headers";
import { Webhook } from "svix";
import type { WebhookEvent } from "@clerk/nextjs/server";
import { createProfile } from "@/lib/strapi";

export async function POST(req: Request) {
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error("CLERK_WEBHOOK_SECRET is not set");
  }

  // Get the headers
  const headerPayload = await headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Missing svix headers", { status: 400 });
  }

  // Get the body
  const payload = await req.json();
  const body = JSON.stringify(payload);

  // Create a new Svix instance with your webhook secret
  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: WebhookEvent;

  // Verify the webhook
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error verifying webhook", { status: 400 });
  }

  // Handle the webhook
  const eventType = evt.type;

  if (eventType === "user.created") {
    const { id: clerkUserId, first_name, last_name, email_addresses } = evt.data;

    // Build the profile name
    const name = [first_name, last_name].filter(Boolean).join(" ") ||
      email_addresses?.[0]?.email_address?.split("@")[0] ||
      "New User";

    // Generate a slug from the name
    const baseSlug = name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");

    // Add random suffix to ensure uniqueness
    const slug = `${baseSlug}-${Math.random().toString(36).substring(2, 7)}`;

    // Create default profile in Strapi
    try {
      const profile = await createProfile({
        name,
        slug,
        clerkUserId,
        role: null,
        description: null,
        theme: {
          mode: "dark",
          primaryColor: "#3b82f6",
          accentColor: "#8b5cf6",
          preset: "default",
        },
        blocks: [
          {
            __component: "blocks.header",
            id: crypto.randomUUID(),
            showName: true,
            showRole: true,
            showDescription: true,
            showCoverImage: true,
          },
          {
            __component: "blocks.socials",
            id: crypto.randomUUID(),
            links: [],
          },
          {
            __component: "blocks.cta",
            id: crypto.randomUUID(),
            text: "Contact Me",
            url: "#",
            style: "primary",
          },
        ],
        publishedAt: null, // Start as draft
      } as any);

      if (profile) {
        console.log(`Created profile for user ${clerkUserId}: ${profile.slug}`);
      } else {
        console.error(`Failed to create profile for user ${clerkUserId}`);
      }
    } catch (error) {
      console.error("Error creating profile:", error);
      // Don't return error - we don't want to retry the webhook
    }
  }

  if (eventType === "user.deleted") {
    const { id: clerkUserId } = evt.data;
    console.log(`User deleted: ${clerkUserId}`);
    // Optionally: delete or deactivate the profile in Strapi
  }

  return new Response("Webhook processed", { status: 200 });
}
