import type { Metadata } from "next";
import Link from "next/link";
import { Prose, Shell } from "../_components/shell";

export const metadata: Metadata = {
  title: "Phone Detective · Myth Apps",
  description: "Someone is missing. You have their phone. A detective game where every case is a stranger's phone.",
};

export default function PhoneDetective() {
  return (
    <Shell>
      <section className="mb-12 rounded-3xl border border-white/10 bg-gradient-to-b from-[#1a2233] to-black p-8">
        <p className="text-sm font-bold uppercase tracking-widest text-[#FFD15C]">Detective game · iPhone · 13+</p>
        <h1 className="mt-2 text-5xl md:text-6xl font-black tracking-tight uppercase">Phone Detective</h1>
        <p className="mt-4 text-lg text-zinc-300 max-w-xl">
          Someone is missing. You have their phone. Read their messages, photos, notes and deleted files, mark the
          evidence and work out what happened, before it’s too late. Every case is fiction.
        </p>
      </section>

      <Prose>
        <h2 id="support">Help &amp; support</h2>
        <h3>How do I get into the phone?</h3>
        <p>
          The passcode is always hidden somewhere on the lock screen or in the case file. Read the notifications
          carefully. After three wrong tries, the app gives you a hint.
        </p>
        <h3>I’m stuck on a question.</h3>
        <p>
          Press and hold anything that looks wrong to mark it as evidence, then open the Notebook. Each question has a
          hint. Pro gives you unlimited hints.
        </p>
        <h3>What happens when the timer runs out?</h3>
        <p>Nothing is lost. You can keep investigating in overtime and still solve the case, for at most 2 stars.</p>
        <h3>I bought Pro, but cases are still locked.</h3>
        <p>
          Open Settings in the app → “Restore purchases” using the same Apple ID. To manage or cancel, go to iPhone
          Settings → your name → Subscriptions.
        </p>
        <h3>Something else?</h3>
        <p>
          Email <a href="mailto:hello@mythapps.com?subject=Phone%20Detective">hello@mythapps.com</a>. Please include
          your iPhone model and the case you were playing.
        </p>

        <h2 id="privacy">What Phone Detective stores</h2>
        <p>
          This adds app-specific detail to our <Link href="/privacy">Privacy Policy</Link>. The app is covered by our{" "}
          <Link href="/terms">Terms of Use</Link> and the{" "}
          <Link href="/terms-phonedetective">Phone Detective terms</Link>.
        </p>
        <ul>
          <li>
            <strong>No account.</strong> There is no sign-in. We never ask for your name, email or phone number.
          </li>
          <li>
            <strong>Your progress stays on your phone.</strong> Answers, evidence, time and settings are saved on the
            device only and are never uploaded.
          </li>
          <li>
            <strong>Analytics</strong> (Firebase): anonymous events such as “case opened”, “question answered”, “hint
            used” or “case solved”, with an app-instance ID. They never include your name or anything you type.
          </li>
          <li>
            <strong>Purchases</strong> (Apple, RevenueCat): an anonymous ID and your Apple purchase receipt, to check
            whether you have Pro. Apple handles payment; we never see your card.
          </li>
          <li>No ads, no tracking across other apps or websites, and no data selling.</li>
        </ul>
        <p>
          <strong>Delete my data:</strong> Settings in the app → “Reset all progress” removes your progress from the
          phone, and so does deleting the app. To have your anonymous analytics events deleted, email{" "}
          <a href="mailto:hello@mythapps.com?subject=Phone%20Detective%20data">hello@mythapps.com</a>. A Pro
          subscription stays on your Apple ID and can be restored.
        </p>
      </Prose>
    </Shell>
  );
}
