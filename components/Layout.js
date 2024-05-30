import { HeadMatter } from "./HeadMatter";
import { Menu } from "./Menu";
import { Footer } from "./Footer";

export const Layout = ({ children }) => {
  return (
    <>
      <HeadMatter />
      <Menu />
      {children}
      <Footer />
    </>
  );
};
