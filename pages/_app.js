import { Playfair_Display } from "next/font/google";
import "@/styles/plugins/bootstrap/bootstrap.min.css";
import "@/styles/plugins/themify-icons/themify-icons.css";
import "@/styles/scss/style.scss";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html {
          --font-playfairDisplay: ${playfairDisplay.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
