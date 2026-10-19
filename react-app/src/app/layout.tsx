import type { Metadata, Viewport } from 'next';
import HotlineBar from '@/components/layout/HotlineBar';
import Header from '@/components/layout/Header';
import InfoBar from '@/components/layout/InfoBar';
import Footer from '@/components/layout/Footer';
import { LanguageProvider } from '@/contexts/LanguageContext';

export const viewport: Viewport = {
  themeColor: '#1a5f2a',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.bettermarikina.org'),
  title: { default: 'BetterMarikina.org | Community Portal', template: '%s | BetterMarikina.org' },
  description: 'BetterMarikina.org - A community-built guide to Marikina City government services.',
  keywords: ['BetterMarikina', 'Marikina City', 'LGU Marikina', 'city services'],
  authors: [{ name: 'BetterMarikina contributors' }],
  openGraph: {
    type: 'website',
    locale: 'en_PH',
    url: 'https://www.bettermarikina.org/',
    siteName: 'BetterMarikina.org',
    title: 'BetterMarikina.org | Community Portal',
    description: 'Empowering the people of Marikina with transparent access to services.',
    images: [{ url: 'https://www.bettermarikina.org/assets/images/banners/opengraph.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
  icons: { icon: '/assets/images/logo/favicon.svg', apple: '/assets/images/logo/favicon.svg' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css" />
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/responsive.css" />
        <link rel="stylesheet" href="/assets/css/accessibility.css" />
        <link rel="stylesheet" href="/assets/css/footer.css" />
      </head>
      <body>
        <LanguageProvider>
          <a href="#main-content" className="skip-link">Skip to main content</a>
          <HotlineBar />
          <Header />
          <InfoBar />
          <main id="main-content">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
