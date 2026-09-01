import { Great_Vibes, Alex_Brush } from 'next/font/google';
import "./globals.css";

const greatVibes = Great_Vibes({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-divinas-title',
});

const alexBrush = Alex_Brush({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-divinas-slogan',
});
export const metadata = {
  charset: "utf-8",
  viewport: "width=device-width, initial-scale=1",  
  title: "Divinas Chic",
  description: "Catalogo digital Divinas chic1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${greatVibes.variable} ${alexBrush.variable}`}>
      <body>{children}</body>
    </html>
  );
}