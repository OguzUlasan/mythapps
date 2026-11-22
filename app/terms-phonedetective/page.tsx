import type { Metadata } from "next";
import Link from "next/link";
import { Prose, Shell } from "../_components/shell";

export const metadata: Metadata = {
  title: "Phone Detective: Terms of Use · Myth Apps",
  description: "Terms of use for Phone Detective and Phone Detective Pro.",
};

const UPDATED = "22 November 2026";

export default function PhoneDetectiveTerms() {
  return (
    <Shell>
      <Prose>
        <h1>Phone Detective: Terms of Use</h1>
        <p className="text-sm text-zinc-500">Last updated: {UPDATED}</p>
        <p>
          These terms apply to the Phone Detective app. They add to our shared{" "}
          <Link href="/terms">Terms of Use</Link>, which also apply. If you got the app from the Apple App Store,
          Apple’s{" "}
          <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/">
            Licensed Application End User License Agreement
          </a>{" "}
          applies too. Where they differ, the stricter protection for you applies. What the app stores is described
          on the <Link href="/phonedetective#privacy">Phone Detective page</Link> and in our{" "}
          <Link href="/privacy">Privacy Policy</Link>.
        </p>

        <h2>Every case is fiction</h2>
        <ul>
          <li>
            The people, places, companies, phones, messages, photos and events in Phone Detective are invented. Any
            resemblance to real people, living or dead, or to real events is a coincidence.
          </li>
          <li>
            Cases are games, not true stories, legal advice or investigation training. Nothing in the app tells you
            how to access, read or track a real person’s phone or accounts. Don’t do that: it hurts people and is
            illegal in most countries.
          </li>
          <li>
            Photos of people in the app are created for the game and do not show real people.
          </li>
        </ul>

        <h2>Age</h2>
        <p>
          Phone Detective is rated 17+. Cases deal with crime, for example missing people, kidnapping and fraud,
          without graphic violence. Please don’t use the app if you are under 17, or under the age your country
          requires for this kind of content.
        </p>

        <h2>Phone Detective Pro</h2>
        <ul>
          <li>
            The first case is free. Phone Detective Pro unlocks every case, each new case as it is released, and
            unlimited hints.
          </li>
          <li>
            Pro is sold as a weekly or a yearly auto-renewing subscription. New subscribers may get a free trial on
            the weekly plan. The price for your country, the period and any trial are shown in the app before you
            buy.
          </li>
          <li>
            Payment is charged to your Apple ID when you confirm the purchase, or when the free trial ends unless you
            cancel at least 24 hours before it ends. The subscription renews automatically at the same price and
            period unless you turn off auto-renew at least 24 hours before the current period ends.
          </li>
          <li>
            Manage or cancel in your Apple ID settings (Settings → your name → Subscriptions). Deleting the app does
            not cancel it. Refunds are handled by Apple at{" "}
            <a href="https://reportaproblem.apple.com">reportaproblem.apple.com</a>.
          </li>
          <li>
            We plan to release new cases regularly. The number and timing of new cases can change, and a delay does
            not entitle you to a refund from us; Apple’s refund rules still apply.
          </li>
          <li>
            Restore Pro on a new device with the same Apple ID: Settings in the app → “Restore purchases”.
          </li>
        </ul>

        <h2>Your progress</h2>
        <p>
          Your progress in each case is saved on your phone only. Deleting the app, or “Reset all progress” in the
          app’s Settings, removes it, and we cannot recover it.
        </p>

        <h2>Contact</h2>
        <p>
          <a href="mailto:hello@mythapps.com?subject=Phone%20Detective">hello@mythapps.com</a>
        </p>
      </Prose>
    </Shell>
  );
}
