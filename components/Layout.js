import React, { useState } from "react";
import TopLeyend from "./TopLeyend";
import TopMainScreen from "./TopMainScreen";
import Footer from "./Footer";
import NavBar from "./NavBar";
import MobileNavBar from "./MobileNavBar";
import WhatsappIcon from "./WhatsappIcon";

export default function Layout({ children, classHome, classQuienesSomos, classServicios, classContacto }) {
  const [open, setOpen] = useState(false);

  const toggleNav = (e) => {
    e.preventDefault();
    setOpen(!open);
  };

  return (
    <div className="bg-secundary">
      <TopLeyend />
      <TopMainScreen />
      <NavBar toggleNav={toggleNav} classHome={classHome} classQuienesSomos={classQuienesSomos} classServicios={classServicios} classContacto={classContacto} />
      <MobileNavBar open={open} />

      {children}

      <Footer />
      <WhatsappIcon />
    </div>
  );
}
