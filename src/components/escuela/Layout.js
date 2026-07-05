import Nav from "@/components/escuela/Nav";

const Layout = ({ ID, MainTitle, Footer, children }) => (
  <div
    className="escuela-theme relative min-h-screen overflow-x-hidden bg-primary font-body"
    id={ID}
  >
    {/* Orbes ambientales */}
    <div
      className="cyber-orb cyber-orb-a -top-24 right-0 h-72 w-72"
      style={{ background: "rgba(245, 210, 68, 0.10)" }}
    />
    <div
      className="cyber-orb cyber-orb-b bottom-32 -left-24 h-80 w-80"
      style={{ background: "rgba(0, 212, 255, 0.07)" }}
    />

    <Nav />

    {MainTitle ? <h1 className="main relative z-10">{MainTitle}</h1> : null}

    <main className="relative z-10">{children}</main>

    <footer className="relative z-10 pb-8">
      <hr className="hr" />
      <h4 className="pt-2 text-center font-body text-sm font-normal text-lightGray/70">
        {Footer}
      </h4>
    </footer>
  </div>
);

export default Layout;
