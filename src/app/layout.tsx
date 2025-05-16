// app/layout.tsx
import type { Metadata } from "next";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Previsão do Tempo",
  description: "Aplicativo de previsão do tempo",
  icons:{
    icon: "../favicon.png",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
