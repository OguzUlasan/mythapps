import type { Metadata } from "next";
import Link from "next/link";
import { Prose, Shell } from "../_components/shell";

export const metadata: Metadata = {
  title: "Privacy Policy · Myth Apps",
  description: "How Myth Apps apps handle your data.",
};

const UPDATED = "22 November 2026";

export default function Privacy() {
  return (
    <Shell>
      <Prose>
        <h1>Privacy Policy</h1>
        <p className="text-sm text-zinc-500">Last updated: {UPDATED}</p>
        <p>
          This policy covers every app published by <strong>Myth Apps</strong> (“we”, “us”) on the Apple App Store and
          on the web. Some apps need more detail; each app’s own page lists exactly what it stores. For example,
          see <Link href="/rareparty#privacy">Rare Party</Link>. Questions or requests:{" "}
          <a href="mailto:hello@mythapps.com">hello@mythapps.com</a>.
        </p>

        <h2>The short version</h2>
        <ul>
          <li>We collect as little as the app needs to work and to get better.</li>
          <li>We do not sell your data and do not track you across other companies’ apps or websites.</li>
          <li>We show no third-party ads unless an app’s page says otherwise.</li>
          <li>You can ask us to delete your data at any time. Many apps have a “Delete my data” button in Settings.</li>
        </ul>

        <h2>What we collect</h2>
        <h3>Identifiers</h3>
        <p>
          Most of our apps do not ask you to create an account. They use a random, anonymous identifier, created
          by Google Firebase on your device. It is not linked to your name, email or phone number.
        </p>
        <h3>Things you type</h3>
        <p>
          Some apps store text you enter so the app can work: for example, a nickname and the answers you play
          in a game. Each app’s page explains who can see this and when it is deleted.
        </p>
        <h3>Usage and diagnostics</h3>
        <p>
          We record anonymous events, such as “a game was finished” or “the paywall was shown”, to understand
          which features work. We also collect crash reports so we can fix bugs. These events never include the
          text you typed.
        </p>
        <h3>Purchases</h3>
        <p>
          Subscriptions are processed by Apple. We never see your payment details. We use RevenueCat to check
          whether your anonymous identifier has an active subscription.
        </p>

        <h2>Service providers</h2>
        <ul>
          <li>
            <strong>Google Firebase</strong> (Analytics, Crashlytics, Firestore, Cloud Functions, Hosting,
            Authentication): runs the app’s servers and stores the data above. Our app data is stored in the EU
            (europe-west1 / eur3) where the app allows it.
          </li>
          <li><strong>RevenueCat</strong>: subscription status.</li>
          <li><strong>Apple</strong>: App Store payments and app distribution.</li>
        </ul>
        <p>These providers process data on our behalf and under their own privacy and security terms.</p>

        <h2>Why we use it (legal bases)</h2>
        <ul>
          <li>To provide the app you asked for, under our contract with you: game rooms, saved settings, purchases.</li>
          <li>Our legitimate interest in keeping the app working and improving it: crash reports, anonymous usage events.</li>
          <li>Your consent, where the law requires it. You can withdraw consent at any time.</li>
        </ul>

        <h2>How long we keep it</h2>
        <p>
          We keep data only as long as the app needs it. Each app’s page gives exact periods. Anonymous totals
          (for example, “12% of players answered Apple”) may be kept without any identifier.
        </p>

        <h2>Your rights</h2>
        <p>
          Depending on where you live, laws such as the GDPR, the UK GDPR, Türkiye’s KVKK and the CCPA give you
          rights over your data. These include access, correction, deletion, objection and portability. Use
          “Delete my data” in the app where it exists, or email{" "}
          <a href="mailto:hello@mythapps.com">hello@mythapps.com</a>. Because we do not know who you are, please
          include the app name and, if you can, the date you used it. You may also complain to your local data
          protection authority.
        </p>

        <h2>Children</h2>
        <p>
          Our apps are not directed at children under 13, and we do not knowingly collect personal data from
          them. If you think a child has given us data, contact us and we will delete it.
        </p>

        <h2>International transfers</h2>
        <p>
          Our providers may process data outside your country, including in the United States. Where they do,
          they use safeguards approved by the law, such as Standard Contractual Clauses.
        </p>

        <h2>Changes</h2>
        <p>
          If this policy changes, we will update the date above. If the change is significant, we will also tell
          you in the app.
        </p>
      </Prose>
    </Shell>
  );
}
