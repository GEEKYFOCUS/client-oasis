import Logo from "@/app/_component/Logo";
import "@/app/_styles/globals.css";
import { Josefin_Sans } from "next/font/google";
import Header from "@/app/_component/Header";
import { ReservationProvider } from "./_component/ReservationContext";
// const inter = Inter({ subsets: ["latin"] });
const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  // Title: The-wild-oasis;

  title: {
    template: "%s The Wild Oasis",
    default: "Welcome / The Wild Oasis",
  },
  description:
    "Luxirious Cabin hotel, located in the coastal area of Lagos, sorrounded by beatiful mountain and green forests ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} relative antialiased flex flex-col min-h-screen bg-primary-950 text-primary-100`}
      >
        <Header />

        <div className="flex-1 px-8 py-12 flex ">
          <main className="max-w-7xl mx-auto w-full">
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>

        {/* <footer>Copyright by The Wild Oasis</footer> */}
      </body>
    </html>
  );
}
