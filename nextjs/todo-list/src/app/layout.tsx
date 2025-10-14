import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "To-Do List",
  description: "App simples com Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body>
        <Navbar /> {/* agora ela aparece em todas as páginas */}
        {children}
      </body>
    </html>
  );
}
