import React, { useState } from "react";
import TopLeyend from "./TopLeyend";
import TopMainScreen from "./TopMainScreen";
import Footer from "./Footer";
import NavBar from "./NavBar";
import MobileNavBar from "./MobileNavBar";
import WhatsappIcon from "./WhatsappIcon";
import ProyectLinks from "./ProyectLinks";

export default function Layout({ children, classHome, classQuienesSomos, classServicios, classWebs, classApps, classContacto }) {
  const [open, setOpen] = useState(false);

  const toggleNav = (e) => {
    e.preventDefault();
    setOpen(!open);
  };

  return (
    <div className="bg-secundary">
      <TopLeyend toggleNav={toggleNav} />
      <MobileNavBar open={open} />
      <TopMainScreen />
      <NavBar  classHome={classHome} classQuienesSomos={classQuienesSomos} classServicios={classServicios} classWebs={classWebs} classApps={classApps} classContacto={classContacto} />
      <ProyectLinks classAdd="md:hidden"/>

      {children}

      <Footer />
      <WhatsappIcon />
    </div>
  );
}
