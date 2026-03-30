import "./globals.css";

export const metadata = {
  title: "Spylt",
  description: "A bold and energetic beverage brand redefining chocolate milk with the perfect blend of protein and caffeine. Built for those who crave adventure, nostalgia, and unstoppable energy in every sip.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
