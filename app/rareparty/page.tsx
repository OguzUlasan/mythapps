import type { Metadata } from "next";
import Link from "next/link";
import { Prose, Shell } from "../_components/shell";

const APP_STORE = "https://apps.apple.com/app/id6837848403";

export const metadata: Metadata = {
  title: "Rare Answer: Party Game · Myth Apps",
  description: "Name the answer nobody else in the world would. A party game for friends on their own phones.",
};

export default function RareParty() {
  return (
    <Shell>
      <section className="mb-12 rounded-3xl border-[3px] border-white bg-[#FFD93D] p-8 text-[#141414] shadow-[6px_6px_0_#fff]">
        <p className="text-sm font-bold uppercase tracking-widest">Party game · iPhone · any phone browser</p>
        <h1 className="mt-2 text-4xl md:text-5xl font-black tracking-tight">Rare Answer</h1>
        <p className="mt-4 text-lg font-medium max-w-xl">
          Everyone gets the same category and answers on their own phone. The answer that is rarest among players
          worldwide wins the round. Same answer as a friend? You both get nothing.
        </p>
        <a
          href={APP_STORE}
          className="mt-6 inline-block rounded-2xl border-[3px] border-[#141414] bg-white px-6 py-3 font-black shadow-[4px_4px_0_#141414]"
        >
          Download on the App Store
        </a>
      </section>

      <Prose>
        <h2 id="support">Help &amp; support</h2>
        <h3>How do friends join?</h3>
        <p>
          The host taps “Host a room” and shows a QR code and a 4-letter code. Friends scan the QR code with their
          camera, or open the app and type the code. Friends on Android can play in their phone’s browser. No
          download needed.
        </p>
        <h3>Do all players need to pay?</h3>
        <p>No. Only the host needs Pro. Everyone in the room gets the unlocked packs and longer games.</p>
        <h3>I bought Pro, but it’s not unlocked.</h3>
        <p>
          Open Settings → “Restore purchases” using the same Apple ID. To manage or cancel, go to iPhone Settings →
          your name → Subscriptions.
        </p>
        <h3>Can we play with one phone?</h3>
        <p>Yes. Choose “One phone” and pass it around. Answers stay hidden until the reveal.</p>
        <h3>Something else?</h3>
        <p>
          Email <a href="mailto:hello@mythapps.com?subject=Rare%20Answer">hello@mythapps.com</a>. Please include
          your iPhone model and what happened.
        </p>

        <h2 id="privacy">What Rare Answer stores</h2>
        <p>
          This adds app-specific detail to our <Link href="/privacy">Privacy Policy</Link>. It is covered by our{" "}
          <Link href="/terms">Terms of Use</Link>.
        </p>
        <ul>
          <li>
            <strong>No account.</strong> The app uses a random anonymous ID (Firebase Authentication). We never ask
            for your email or phone number.
          </li>
          <li>
            <strong>Game rooms:</strong> the nickname you choose and your answers are shown to the players in your
            room. The room and everything in it is deleted automatically, at the latest 3 hours after it was created.
          </li>
          <li>
            <strong>World statistics:</strong> answers are added to anonymous totals per category (for example,
            “4% said Pomegranate”). These totals contain no name or ID.
          </li>
          <li>
            <strong>Daily category:</strong> your daily answer is stored with your anonymous ID, so you can answer
            only once a day. Use “Delete my data” in Settings to remove it at any time.
          </li>
          <li>
            <strong>Join links:</strong> when you open a join link on the web and tap “Get the app”, we keep a
            one-way hash of your IP address for 15 minutes. This lets the app put you in the right room after you
            install it.
          </li>
          <li>
            <strong>Analytics and crash reports</strong> (Firebase): anonymous events such as “game finished”, plus
            crash logs. These never include names or answers.
          </li>
          <li><strong>Purchases</strong> (Apple, RevenueCat): whether your anonymous ID has Pro.</li>
          <li>No ads, no tracking across other apps or websites, and no data selling.</li>
        </ul>
        <p>
          <strong>Delete my data:</strong> Settings → “Delete my data” removes your daily answers and your settings
          on this phone. It also removes your answers from the totals and resets your anonymous ID. A Pro
          subscription stays on your Apple ID and can be restored.
        </p>
      </Prose>
    </Shell>
  );
}
