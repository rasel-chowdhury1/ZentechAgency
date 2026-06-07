import "./globals.css";
import type { Metadata, Viewport } from "next";
import Script from "next/script";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";

export const metadata: Metadata = {
  title: "ZentechPoint | Digital Agency",
  description:
    "ZentechPoint builds modern websites, apps, software, UI/UX and marketing solutions.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  verification: {
    google: "M1Vaje-4UowWZy1-2LCeTF4uE2t5aCaqMr0qyuTPzws",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <head>
        {/* Prevent theme flash on load */}
        <Script
          id="theme-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                try {
                  var t = localStorage.getItem('theme');
                  if (t === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else if (t === 'light') {
                    document.documentElement.classList.add('light');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-LFQX9668SB"
          strategy="afterInteractive"
        />

        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-LFQX9668SB');
            `,
          }}
        />
        
      </head>

      <body className="min-h-screen w-full overflow-x-hidden bg-[color:var(--background)] text-[color:var(--foreground)]">

        <CustomCursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

// import "./globals.css";
// import type { Metadata, Viewport } from "next";
// import Navbar from "@/components/layout/Navbar";
// import Footer from "@/components/layout/Footer";
// import CustomCursor from "@/components/ui/CustomCursor";

// export const metadata: Metadata = {
//   title: "ZentechPoint | Digital Agency",
//   description:
//     "ZentechPoint builds modern websites, apps, software, UI/UX and marketing solutions.",
//   icons: {
//     icon: "/logo.png",
//     shortcut: "/logo.png",
//     apple: "/logo.png",
//   },
// };

// export const viewport: Viewport = {
//   width: "device-width",
//   initialScale: 1,
//   maximumScale: 1,
// };

// export default function RootLayout({
//   children,
// }: Readonly<{ children: React.ReactNode }>) {
//   return (
//     <html lang="en" className="overflow-x-hidden">
//       {/* Prevent theme flash on load */}
//       <head>
//         <script dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark')document.documentElement.classList.add('dark');else if(t==='light')document.documentElement.classList.add('light');}catch(e){}})();` }} />
//       </head>
//       <body className="min-h-screen w-full overflow-x-hidden bg-[color:var(--background)] text-[color:var(--foreground)]">
//         <CustomCursor />
//         <Navbar />
//         <main>{children}</main>
//         <Footer />
//       </body>
//     </html>
//   );
// }
