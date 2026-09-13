import { Great_Vibes, Alex_Brush } from 'next/font/google';
import "./globals.css";



const alexBrush = Alex_Brush({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-title-jomi',
});
export const metadata = {
  charset: "utf-8",
  viewport: "width=device-width, initial-scale=1",  
  title: "Jomi Store",
  description: "Catalogo digital Jomi Store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={` ${alexBrush.variable}`}>
      <body>{children}</body>
    </html>
  );
}