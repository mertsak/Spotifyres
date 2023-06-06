import Sidebar from "@/components/Sidebar";
import "./global.css";
import BottomBar from "@/components/BottomBar";
import Navbar from "@/components/Navbar";
import StoreProvider from "@/redux/storeProvider";
import SessionProviders from "@/components/SessionProviders";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Lyricks</title>
        <meta name="description" content="Spotify Clone" />
        <meta name="author" content="Mert Sakınç" />
        <link rel="icon" href="/favicon.png" sizes="any" />
      </head>

      <body>
        <StoreProvider>
          <SessionProviders>
            <div className="h-full">
              <div className="wrapper flex">
                <Sidebar />
                <div className="flex flex-col w-full h-full bg-content_bg">
                  <Navbar />
                  {children}
                </div>
              </div>
              <BottomBar />
            </div>
          </SessionProviders>
        </StoreProvider>
      </body>
    </html>
  );
}
