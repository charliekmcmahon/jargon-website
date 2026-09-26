import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://getjargon.app'),
  title: {
    default: "Jargon - Learn a word. Any language.",
    template: "%s | Jargon"
  },
  description: "Jargon's on-device AI crafts a brand-new vocabulary word every day, in whatever language you're learning, explained in whatever language you speak. Free, private, and it never repeats a word.",
  keywords: [
    "word of the day",
    "vocabulary app",
    "language learning app",
    "learn a language",
    "flashcards alternative",
    "pronunciation app",
    "vocabulary builder",
    "Apple Intelligence app",
    "on-device AI",
    "iOS widget",
    "language learning widget",
    "polyglot app",
    "learn Spanish vocabulary",
    "learn French vocabulary",
    "learn Japanese vocabulary",
    "privacy-first app"
  ],
  authors: [{ name: "Charlie McMahon" }],
  creator: "Charlie McMahon",
  publisher: "Charlie McMahon",
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://getjargon.app",
    siteName: "Jargon",
    title: "Jargon - Learn a word. Any language.",
    description: "Jargon's on-device AI crafts a brand-new vocabulary word every day, in whatever language you're learning, explained in whatever language you speak. Free, private, and it never repeats a word.",
    images: [
      {
        url: "/hero.webp",
        width: 1200,
        height: 800,
        alt: "Jargon App - Daily word, definition, and pronunciation, generated on-device"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Jargon - Learn a word. Any language.",
    description: "Jargon's on-device AI crafts a brand-new vocabulary word every day, in whatever language you're learning, explained in whatever language you speak.",
    images: ["/hero.webp"],
    creator: "@charliekmcmahon"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://getjargon.app"
  },
  applicationName: "Jargon",
  category: "Education",
  classification: "Mobile Application",
  appleWebApp: {
    capable: true,
    title: "Jargon",
    statusBarStyle: "default"
  },
  icons: {
    icon: [
      { url: '/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicons/favicon.ico', sizes: 'any' }
    ],
    apple: [
      { url: '/favicons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      { url: '/favicons/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicons/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' }
    ]
  },
  manifest: '/favicons/site.webmanifest'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Mona+Sans:ital,wdth,wght@0,112.5,200..900;1,112.5,200..900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
