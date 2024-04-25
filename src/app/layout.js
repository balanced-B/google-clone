import "./globals.css";
import { Footer } from "@/components/Footer";


export const metadata = {
  title: "Google Clone",
  description: "Making Google Clone for my Website Portfolio. Built using Next.JS, Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='relative min-h-screen'>
        {children}
        <Footer />
      </body>
    </html>
  );
}
