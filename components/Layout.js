import { Playfair_Display } from "next/font/google";
import { HeadMatter } from "./HeadMatter";
import { Menu } from "./Menu";
import { Footer } from "./Footer";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfairDisplay",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const Layout = ({ children }) => {
  return (
    <body className={`${playfairDisplay.variable}`}>
      <HeadMatter />
      <Menu />
      {children}
      <Footer />
    </body>
  );
};
