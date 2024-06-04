import type { Metadata } from 'next';
import { Recursive } from 'next/font/google';
import './globals.css';
import localFont from '@next/font/local';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const recursive = Recursive({ subsets: ['latin'] });

const meaculpa = localFont({
	src: [
		{
			path: '../public/fonts/MeaCulpa-Regular.ttf',
			weight: '400',
		},
	],
	variable: '--font-meaculpa',
});

export const metadata: Metadata = {
	title: 'Raya Tourism',
	description: `Explore the world with Rayatourism, your trusted partner for unforgettable travel experiences. Discover diverse destinations, tailored itineraries, and exceptional service. Whether you're seeking adventure, relaxation, or cultural immersion, Rayatourism ensures every journey is unique and memorable. Start your adventure today!`,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' className={`${meaculpa.variable} font-sans`}>
			<body className={recursive.className}>
				<Header />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
