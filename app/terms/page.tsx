import type { Metadata } from "next";
import { Prose, Shell } from "../_components/shell";

export const metadata: Metadata = {
  title: "Terms of Use · Myth Apps",
  description: "Terms of use for Myth Apps apps and subscriptions.",
};

const UPDATED = "22 November 2026";

export default function Terms() {
  return (
    <Shell>
      <Prose>
        <h1>Terms of Use</h1>
        <p className="text-sm text-zinc-500">Last updated: {UPDATED}</p>
        <p>
          These terms apply to every app published by <strong>Myth Apps</strong> (“we”, “us”). By using one of
          our apps you agree to them. If you got the app from the Apple App Store, Apple’s{" "}
          <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/">
            Licensed Application End User License Agreement
          </a>{" "}
          also applies. Where the two differ, the stricter protection for you applies.
        </p>

        <h2>Using the apps</h2>
        <ul>
          <li>We give you a personal, non-transferable licence to use the app for your own non-commercial use.</li>
          <li>
            Do not use the apps to harass anyone, and do not enter names or text that are hateful, sexual or
            illegal. Do not try to break, overload or reverse-engineer our servers.
          </li>
          <li>
            In apps where several people play together, the host can remove players. We may block abuse.
          </li>
        </ul>

        <h2>Subscriptions and purchases</h2>
        <ul>
          <li>
            Some features need a paid subscription (for example “Pro”). The price, period and any free trial are
            shown in the app before you buy.
          </li>
          <li>
            Payment is charged to your Apple ID when you confirm the purchase. If you start a free trial, the
            first payment is charged when the trial ends, unless you cancel at least 24 hours before.
          </li>
          <li>
            Subscriptions renew automatically at the same price and period, unless you turn off auto-renew at
            least 24 hours before the current period ends.
          </li>
          <li>
            Manage or cancel your subscription in your Apple ID settings (Settings → your name → Subscriptions).
            Deleting the app does not cancel a subscription.
          </li>
          <li>
            Refunds are handled by Apple under its policies: request one at{" "}
            <a href="https://reportaproblem.apple.com">reportaproblem.apple.com</a>.
          </li>
          <li>
            You can restore a subscription on a new device with the same Apple ID using “Restore purchases” in
            the app.
          </li>
        </ul>

        <h2>Content</h2>
        <p>
          The apps, their design, word lists and other content belong to us or our licensors. Text you type stays
          yours. You let us store and show it to the other players in your session, so the app can work.
        </p>

        <h2>No guarantees</h2>
        <p>
          We work hard to keep the apps running, but we provide them “as is”. We cannot promise they will always
          be available or error-free. Games may show estimated statistics, which are for fun and may not be
          exact.
        </p>

        <h2>Liability</h2>
        <p>
          To the extent the law allows, we are not liable for indirect or consequential losses. Our total
          liability to you is limited to the amount you paid us in the 12 months before the claim. Nothing in
          these terms limits rights you have as a consumer under the law of your country.
        </p>

        <h2>Changes and ending</h2>
        <p>
          We may update these terms. If a change is significant, we will tell you in the app. You can stop using
          an app at any time. We may suspend access if these terms are seriously broken.
        </p>

        <h2>Contact</h2>
        <p>
          <a href="mailto:hello@mythapps.com">hello@mythapps.com</a>
        </p>
      </Prose>
    </Shell>
  );
}
