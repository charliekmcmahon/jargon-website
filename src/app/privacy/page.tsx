import { ButtonLink, PlainButtonLink } from '@/components/elements/button'
import { Main } from '@/components/elements/main'
import { DocumentLeftAligned } from '@/components/sections/document-left-aligned'
import { FooterCategory, FooterLink, FooterWithLinkCategories } from '@/components/sections/footer-with-link-categories'
import {
  NavbarLink,
  NavbarLogo,
  NavbarWithLogoActionsAndCenteredLinks,
} from '@/components/sections/navbar-with-logo-actions-and-centered-links'
import type { Metadata } from 'next'

const APP_STORE_URL = 'https://apps.apple.com/au/app/jargon-expand-your-vocab/id6816339421'

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Jargon's privacy policy. We don't collect, store, or have access to any personal information. Every word, definition, and sentence is generated entirely on your device.",
  openGraph: {
    title: "Privacy Policy | Jargon",
    description: "Jargon's privacy policy. We don't collect, store, or have access to any personal information. Every word, definition, and sentence is generated entirely on your device.",
    url: "https://getjargon.app/privacy"
  },
  alternates: {
    canonical: "https://getjargon.app/privacy"
  }
}

export default function Page() {
  return (
    <>
      <NavbarWithLogoActionsAndCenteredLinks
        id="navbar"
        logo={
          <NavbarLogo href="/">
            <img
              src="/jargon-icon.png"
              alt="Jargon"
              className="h-8 w-auto drop-shadow-md"
              width={32}
              height={32}
            />
            <span className="ml-2 text-xl font-semibold tracking-tight text-taupe-950 dark:text-white flex items-center">Jargon</span>
          </NavbarLogo>
        }
        links={<></>}
        actions={
          <>
            <ButtonLink href={APP_STORE_URL}>
              Get the App
            </ButtonLink>
          </>
        }
      />

      <Main>
        <DocumentLeftAligned
          id="document"
          headline="Privacy Policy"
          subheadline={<p>Last updated on January 3, 2026.</p>}
        >
          <p>
            Charlie McMahon (ABN 57 483 646 707) ("<strong>we</strong>," "<strong>us</strong>," or "<strong>our</strong>") operates the mobile application, Jargon ("<strong>the App</strong>"). Jargon generates a daily vocabulary word using on-device artificial intelligence. This Privacy Policy describes how we handle information when you use the App.
          </p>

          <h2>Your Privacy is Paramount</h2>
          <p>
            We're deeply committed to protecting your privacy. Jargon was built so that everything it does happens on your device. <strong>We do not collect, store, or have access to any personal information from your use of the App.</strong>
          </p>

          <h2>What Information Jargon Collects and Stores</h2>
          <p>
            None. Jargon has no accounts, no sign-up, and no servers of any kind. There is no analytics, no advertising, and no network request made by the App as part of generating, explaining, or speaking a word.
          </p>

          <h2>How Jargon Works, Entirely On Your Device</h2>
          <ul>
            <li>
              <strong>Word Generation:</strong> Your daily word, its definition, an example sentence, and its pronunciation guide are all generated locally using Apple's on-device FoundationModels framework (Apple Intelligence). Nothing about the words you've seen, the languages you've chosen, or how you use the App is ever sent to us or to any third party.
            </li>
            <li>
              <strong>Listening:</strong> The "Listen" feature uses Apple's on-device text-to-speech (AVSpeechSynthesizer) to read words aloud. This also happens entirely on your device.
            </li>
            <li>
              <strong>Local Storage Only:</strong> Your language preferences and your history of past words are stored locally in a private App Group shared only between the App and its Home Screen and Lock Screen widgets. This data never leaves your device and is never backed up to iCloud or any server we operate.
            </li>
          </ul>

          <h2>No Data Collection, Selling, or Sharing</h2>
          <ul>
            <li><strong>No Data Collected:</strong> We don't collect, process, or store any of your data on our servers, because the App doesn't have any servers.</li>
            <li><strong>No Data Sold:</strong> We never sell any user data. Since we don't collect it, there's nothing to sell.</li>
            <li><strong>No Data Shared:</strong> We don't share any user data with third parties, because none is ever collected in the first place.</li>
          </ul>

          <h2>Word Data & Credits</h2>
          <p>
            Jargon's bundled fallback word lists, used before AI generation and as a widget placeholder, are adapted from the{' '}
            <a
              href="https://github.com/wordset/wordset-dictionary"
              target="_blank"
              rel="noopener noreferrer"
              className="text-taupe-900 underline hover:text-taupe-950 dark:text-taupe-300 dark:hover:text-white"
            >
              Wordset
            </a>{' '}
            dictionary (CC BY-SA 4.0), WordNet 3.0 (© Princeton University), and the{' '}
            <a
              href="https://github.com/hermitdave/FrequencyWords"
              target="_blank"
              rel="noopener noreferrer"
              className="text-taupe-900 underline hover:text-taupe-950 dark:text-taupe-300 dark:hover:text-white"
            >
              FrequencyWords
            </a>{' '}
            project (MIT License). No user data is involved in this process.
          </p>

          <h2>Device Requirements</h2>
          <p>
            Jargon requires iOS 26 or later on a device with Apple Intelligence enabled. This is a device capability requirement, not a data permission: the App does not request access to your location, contacts, photos, microphone, or any other personal data.
          </p>

          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We'll notify you of any changes by posting the new Privacy Policy within the App or through other appropriate communication channels. You're advised to review this Privacy Policy periodically for any changes.
          </p>

          <h2>Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at:</p>
          <p>
            <strong>Charlie McMahon</strong>
            <br />
            Email: <a href="mailto:charlie@sunsetlabs.com.au">charlie@sunsetlabs.com.au</a>
          </p>
        </DocumentLeftAligned>
      </Main>

      <FooterWithLinkCategories
        id="footer"
        links={
          <>
            <FooterCategory title="App">
              <FooterLink href={APP_STORE_URL}>Download</FooterLink>
            </FooterCategory>
            <FooterCategory title="Legal">
              <FooterLink href="/privacy">Privacy Policy</FooterLink>
            </FooterCategory>
            <FooterCategory title="Support">
              <FooterLink href="mailto:charlie@sunsetlabs.com.au">Contact</FooterLink>
            </FooterCategory>
          </>
        }
        fineprint="© 2026, Charlie McMahon. Made with ❤️ from the Sunshine Coast, Australia."
      />
    </>
  )
}
