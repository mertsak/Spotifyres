import Sidebar from "@/components/Sidebar";
import "./global.css";
import BottomBar from "@/components/BottomBar";
import Navbar from "@/components/Navbar";
import StoreProvider from "@/redux/storeProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
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
        </StoreProvider>
      </body>
    </html>
  );
}
