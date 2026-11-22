import type { Metadata } from "next";
import Link from "next/link";
import { Prose, Shell } from "../_components/shell";

export const metadata: Metadata = {
  title: "Support · Myth Apps",
  description: "Get help with Myth Apps apps.",
};

export default function Support() {
  return (
    <Shell>
      <Prose>
        <h1>Support</h1>
        <p>
          Email <a href="mailto:hello@mythapps.com">hello@mythapps.com</a>. We usually reply within two working
          days. Please include the app name, your device and what happened.
        </p>
        <h2>Apps</h2>
        <ul>
          <li>
            <Link href="/rareparty#support">Rare Answer: Party Game</Link>
          </li>
          <li>
            <Link href="/phonedetective#support">Phone Detective</Link>
          </li>
        </ul>
        <h2>Subscriptions</h2>
        <ul>
          <li>Restore a purchase: open the app’s Settings → “Restore purchases”, using the same Apple ID.</li>
          <li>Cancel or manage: iPhone Settings → your name → Subscriptions.</li>
          <li>
            Refunds are handled by Apple: <a href="https://reportaproblem.apple.com">reportaproblem.apple.com</a>.
          </li>
        </ul>
        <h2>Your data</h2>
        <p>
          See our <Link href="/privacy">Privacy Policy</Link>. To delete your data, use “Delete my data” in the
          app’s Settings, or email us.
        </p>
      </Prose>
    </Shell>
  );
}
