import { Sora, Poppins } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import Layouts from './commons/components/Layouts';
import SpotifyTop from './commons/components/elements/SpotifyTop';
import TopLoader from './commons/components/elements/TopLoader';
import Head from 'next/head';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const sora = Sora({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

export const metadata = {
  title: 'Govind Jha | Portfolio App',
  description: 'Hello ! , this is Govind Jha I am full Stack Software DevOps Engineer, also enthusiastic AI Application developer',
  keywords: 'Govind Jha Portfolio, Software developer in Kolkata',
  creator: 'Govind Jha',
  openGraph: {
    title: 'Govind Jha Portfolio Website',
    description: 'Personal website, portfolio, roadmap, and more of Govind',
    url: 'https://govindcv.me',
    siteName: 'Govind',
    locale: 'id_ID',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="creator" content={metadata.creator} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta property="og:locale" content={metadata.openGraph.locale} />
        <meta property="og:type" content={metadata.openGraph.type} />
        {/* Add more tags as needed */}
      </Head>
      <body className={sora.className}>
        <Providers>
          <TopLoader />
          <Layouts>{children}</Layouts>
        </Providers>
      </body>
    </html>
  );
}
