import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Think Fluent - Expert IELTS Preparation',
  description: 'Expert IELTS preparation and study abroad guidance to help you achieve your dreams. Join Think Fluent for comprehensive courses and personalized support.',
  keywords: ['IELTS', 'Study Abroad', 'Education', 'Language Learning', 'Test Preparation'],
  authors: [{ name: 'Think Fluent' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://thinkfluent.com',
    title: 'Think Fluent - Expert IELTS Preparation',
    description: 'Expert IELTS preparation and study abroad guidance to help you achieve your dreams.',
    siteName: 'Think Fluent',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Think Fluent - Expert IELTS Preparation',
    description: 'Expert IELTS preparation and study abroad guidance to help you achieve your dreams.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}