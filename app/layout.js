import Providers from "./providers";
import { GoogleTagManager } from "@next/third-parties/google";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
