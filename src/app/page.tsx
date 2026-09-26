import { Button, ButtonLink, PlainButtonLink } from '@/components/elements/button'
import { Link } from '@/components/elements/link'
import { Main } from '@/components/elements/main'
import { Screenshot } from '@/components/elements/screenshot'
import { ArrowNarrowRightIcon } from '@/components/icons/arrow-narrow-right-icon'
import { ChevronIcon } from '@/components/icons/chevron-icon'
import { CallToActionSimple } from '@/components/sections/call-to-action-simple'
import { FAQsTwoColumnAccordion, Faq } from '@/components/sections/faqs-two-column-accordion'
import { FeatureThreeColumnWithDemos, Features } from '@/components/sections/features-three-column-with-demos'
import { FooterCategory, FooterLink, FooterWithLinkCategories } from '@/components/sections/footer-with-link-categories'
import { HeroCenteredWithDemo } from '@/components/sections/hero-centered-with-demo'
import { HeroWithDemoOnBackground } from '@/components/sections/hero-with-demo-on-background'
import {
  NavbarLink,
  NavbarLogo,
  NavbarWithLogoActionsAndCenteredLinks,
} from '@/components/sections/navbar-with-logo-actions-and-centered-links'
import { TestimonialLargeQuote } from '@/components/sections/testimonial-with-large-quote'
import type { Metadata } from 'next'

const APP_STORE_URL = 'https://apps.apple.com/au/app/jargon-expand-your-vocab/id6816339421'

export const metadata: Metadata = {
  title: "Jargon - Learn a word. Any language.",
  description: "Jargon's on-device AI crafts a brand-new vocabulary word every day, in whatever language you're learning, explained in whatever language you speak. Free, private, and it never repeats a word.",
  openGraph: {
    url: "https://getjargon.app"
  },
  alternates: {
    canonical: "https://getjargon.app"
  }
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Jargon',
    applicationCategory: 'EducationalApplication',
    operatingSystem: 'iOS',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'AUD'
    },
    description: "Jargon's on-device AI crafts a brand-new vocabulary word every day, in whatever language you're learning, explained in whatever language you speak.",
    url: 'https://getjargon.app',
    downloadUrl: APP_STORE_URL,
    screenshot: 'https://getjargon.app/hero.webp',
    author: {
      '@type': 'Person',
      name: 'Charlie McMahon',
      url: 'https://github.com/charliekmcmahon'
    },
    publisher: {
      '@type': 'Person',
      name: 'Charlie McMahon'
    },
    featureList: [
      'On-device AI word generation, powered by Apple Intelligence',
      'Learn any of 13 languages, explained in any of 13 languages',
      'Daily word, definition, example sentence, and pronunciation guide',
      'Listen to native pronunciation with on-device text-to-speech',
      'Never repeats a word',
      'Home Screen and Lock Screen widgets',
      '100% private - everything happens on your device, nothing is ever uploaded'
    ]
  }

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Do I need an internet connection to use Jargon?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "No! Once your device's Apple Intelligence model is ready, Jargon generates every word, definition, and sentence entirely on-device. No internet connection required."
        }
      },
      {
        '@type': 'Question',
        name: 'What languages does Jargon support?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '13 languages, in any combination: English, German, Spanish, French, Italian, Portuguese, Japanese, Chinese, Korean, Dutch, Swedish, Latin, and Russian. Pick the language you speak and the language you want to learn independently.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do I need a special device to use Jargon?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Jargon requires iOS 26 or later on a device with Apple Intelligence enabled (Settings → Apple Intelligence & Siri), since every word is generated on-device.'
        }
      },
      {
        '@type': 'Question',
        name: 'Will I ever see the same word twice?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "No. Jargon checks every new word against your history for that language and regenerates on a collision, so you'll never see a repeat."
        }
      },
      {
        '@type': 'Question',
        name: 'Is my data private?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Completely. There's no sign-up and no server. Every word, definition, sentence, and pronunciation is generated and spoken entirely on your device using Apple's on-device AI and text-to-speech, and nothing is ever uploaded."
        }
      }
    ]
  }

  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Jargon',
    url: 'https://getjargon.app',
    logo: 'https://getjargon.app/jargon-icon.png',
    founder: {
      '@type': 'Person',
      name: 'Charlie McMahon'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'charlie@sunsetlabs.com.au',
      contactType: 'Customer Support'
    }
  }

  return (
    <>
      <meta name="apple-itunes-app" content="app-id=6816339421"></meta>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
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
            <ButtonLink href={APP_STORE_URL} color="light">
              Get the App
            </ButtonLink>
          </>
        }
      />

      <Main>
        {/* Hero */}
        <HeroCenteredWithDemo
          id="hero"
          headline="A word a day. But better."
          subheadline={
            <div>
              <p>Meet Jargon, the free, on-device AI word coach for language learners/enthusiasts.</p>
            </div>
          }
          cta={
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <img
                className="h-12 w-auto"
                src="/AppStoreBadge-Dark.svg"
                alt="Download on the App Store"
              />
            </a>
          }
          demo={
            <>
              <img
                className="hidden sm:block bg-transparent mx-auto max-w-xs"
                src="/hero.webp"
                alt="Jargon App Screenshot"
                width="803"
                height="1602"
              />
              <img
                className="block sm:hidden bg-transparent mx-auto max-w-2xs"
                src="/hero-mobile.webp"
                alt="Jargon App Screenshot"
                width="500"
                height="998"
              />
            </>
          }
        />

        {/* Features */}
        <Features
          id="features"
          headline="A tiny language lesson, every day"
          subheadline={
            <p>
              Jargon crafts a brand-new word on your device every day, tailored to exactly how you want to learn, then helps you understand and pronounce it.
            </p>
          }
          cta={
            <Link href="/privacy">
              Learn more about how Jargon protects your privacy <ArrowNarrowRightIcon />
            </Link>
          }
          features={
            <>
              <FeatureThreeColumnWithDemos
                demo={
                  <Screenshot wallpaper="blue" placement="stretch-y">
                    <img
                      src="/screenshots-mockups/language-pickers.webp"
                      alt="Language pickers"
                      width={1206}
                      height={900}
                    />
                  </Screenshot>
                }
                headline="Sprache? Langue? Idioma?"
                subheadline={<p>Mix and match any of 13 languages. Pick what you speak and what you're learning, and Jargon handles the rest.</p>}
              />
              <FeatureThreeColumnWithDemos
                demo={
                  <Screenshot wallpaper="purple" placement="stretch-y">
                    <img
                      src="/screenshots-mockups/word-card.webp"
                      alt="Word of the day card"
                      className="h-full w-full object-cover"
                      width={803}
                      height={534}
                    />
                  </Screenshot>
                }
                headline="Explain, Pronounce, Listen"
                subheadline={<p>Open the app to have your on-device AI explain, pronounce, and let you listen to the word in context.</p>}
              />
              <FeatureThreeColumnWithDemos
                demo={
                  <Screenshot wallpaper="brown" placement="middle">
                    <img
                      src="/screenshots-mockups/widgets.webp"
                      alt="Home Screen and Lock Screen widgets"
                      width={1206}
                      height={549}
                    />
                  </Screenshot>
                }
                headline="Did somebody say widgets?"
                subheadline={<p>Add today's word to your Home Screen or Lock Screen, so a new word is always within reach.</p>}
              />
            </>
          }
        />

        {/* Testimonial / Privacy Section */}
        <TestimonialLargeQuote
          id="privacy"
          quote={
            <p>
              I built Jargon because I wanted to pick up new words in the languages I was learning without opening yet another app with a login screen and a subscription paywall. It's a tiny, private ritual: one word a day, generated just for you, entirely on your device.
            </p>
          }
          img={
            <img
              src="https://github.com/charliekmcmahon.png"
              alt="Charlie McMahon"
              className="not-dark:bg-white/75 dark:bg-black/75"
              width={160}
              height={160}
            />
          }
          name="Charlie McMahon"
          byline="Creator, Jargon"
        />

        {/* FAQs */}
        <FAQsTwoColumnAccordion id="faqs" headline="Questions & Answers">
          <Faq
            id="faq-1"
            question="Do I need an internet connection to use Jargon?"
            answer="No! Once your device's Apple Intelligence model is ready, Jargon generates every word, definition, and sentence entirely on-device. No internet connection required."
          />
          <Faq
            id="faq-2"
            question="What languages does Jargon support?"
            answer="13 languages, in any combination: English, German, Spanish, French, Italian, Portuguese, Japanese, Chinese, Korean, Dutch, Swedish, Latin, and Russian. Pick the language you speak and the language you want to learn independently."
          />
          <Faq
            id="faq-3"
            question="Do I need a special device to use Jargon?"
            answer="Yes. Jargon requires iOS 26 or later on a device with Apple Intelligence enabled (Settings → Apple Intelligence & Siri), since every word is generated on-device."
          />
          <Faq
            id="faq-4"
            question="Will I ever see the same word twice?"
            answer="No. Jargon checks every new word against your history for that language and regenerates on a collision, so you'll never see a repeat."
          />
          <Faq
            id="faq-5"
            question="Is my data private?"
            answer="Completely. There's no sign-up and no server. Every word, definition, sentence, and pronunciation is generated and spoken entirely on your device using Apple's on-device AI and text-to-speech, and nothing is ever uploaded."
          />
        </FAQsTwoColumnAccordion>

        {/* Call To Action */}
        <CallToActionSimple
          id="call-to-action"
          headline="Ready for today's word?"
          subheadline={
              <div>
              <p>
                Join learners picking up new vocabulary one word a day, no textbooks, no accounts, no ads.
              </p>
              <p>
              Download now and meet today's word.
              </p>
            </div>
          }
          cta={
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <img
                  className="h-12 w-auto"
                  src="/AppStoreBadge-Dark.svg"
                  alt="Download on the App Store"
                />
              </a>
            </div>
          }
        />
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
