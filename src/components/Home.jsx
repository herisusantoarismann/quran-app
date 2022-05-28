import React, { useState } from "react";
import { Content } from "./Content/Content";
import { Footer } from "./Footer/Footer";
import { Menu } from "./Menu/Menu";
import { Navbar } from "./Navbar/Navbar";
import { Sidebar } from "./Sidebar/Sidebar";

export const Home = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <Menu setMenu={setMenu} menu={menu} />
      <Sidebar />
      <Navbar setMenu={setMenu} />
      <Content />
      <Footer />
    </div>
  );
};
