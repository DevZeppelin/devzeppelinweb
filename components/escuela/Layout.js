import Nav from "../../components/escuela/Nav";

const Layout = ({ ID, MainTitle, Footer, children }) => (
  <div className={ID} id={ID}>
    <Nav />
    <h1 className="main">{MainTitle}</h1>

    {children}
    <hr className="hr" />
    <h4>{Footer}</h4>

    <style jsx global>{`      
      :root {
        --orange-light: rgba(242, 239, 159, 1);
        --orange-hard: rgba(255, 141, 33, 1);
        --orange-medium: rgba(252, 176, 69, 1);
      }

      * {
        font-family: "Quicksand", sans-serif;
        margin: 0;
      }

      html {
        scroll-behavior: smooth;
        width: fit-content;
      }

      body {
        background: rgb(242, 239, 159);
        background: linear-gradient(
          90deg,
          var(--orange-light) 0%,
          var(--orange-hard) 50%,
          var(--orange-medium) 100%
        );
        width: 100vw;
      }

      .logo {
        height: 80px;
        width: 80px;
        padding: 10px;
        margin-left: 10px;
      }

      .container {
        display: block;
        max-width: 2400px;
        width: 90%;
        text-align: justify;
        align-items: center;
        justify-content: center;
        margin: auto;
      }

      .icon {
        display: block;
        margin: auto;
        width: 90px;
        height: 128px;
        padding-top: 2em;
        padding-bottom: 1.5em;
      }

      hr {
        border-color: var(--orange-hard);
      }

      h1 {
        font-family: "Sofia", cursive;
        text-align: center;
        margin-top: 1em;
        padding-bottom: 5px;
        padding-left: 6px;
        font-size: 2.2em;
      }

      h2 {
        text-align: center;
        font-size: 1.8em;
        margin: auto;
        margin-top: 1em;
      }

      h3 {
        font-size: 1.3em;
        padding-top: 16px;
      }

      a {
        padding: 8px;
        text-decoration: none;
        font-weight: bold;
        font-size: 1.1em;
        color: var(--background);
      }

      p {
        padding: 15px 10px;
        font-size: 1em;
        color: var(--background);
      }

      li {
        padding: 3px 20px;
        margin: 0.5em;
        font-size: 1em;
        color: var(--background);
      }

      .buttonSchool {
        display: flex;
        margin-left: auto;
        margin-right: auto;
        padding: 16px;
        font-size: 1.1em;
        margin-top: 50px;
        margin-bottom: 40px;
        font-weight: bold;
        border-radius: 15px;       
        cursor: pointer;
        background: linear-gradient(
          90deg,
          var(--orange-hard) 0%,
          var(--orange-medium) 50%,
          var(--orange-hard) 100%
        );
        box-shadow: 10px 5px 5px black;
        color: black
      }
      .buttonSchool:hover {       
        transform: scale(1.1);
        background: linear-gradient(
          90deg,
          var(--orange-medium) 0%,
          var(--orange-dark) 50%,
          var(--orange-medium) 100%
        );
        transition-duration: 500ms;
      }

      ul,
      ol {
        padding-inline-start: 10px;
        padding: 0.1em;
      }

      .secondaryNav {
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        align-items: center
      }

      .secondaryNav button {
        margin: 0.2em;
      }

      @media screen and (max-width: 700px) {
        body {
          width: 100%;
        }

        h1 {
          font-size: 2.7em;
        }

        h2 {
          font-size: 2.3em;
        }
        h3 {
          font-size: 1.9em;
          text-align: left;
        }
        p {
          font-size: 1.2em;
        }

        li {
          font-size: 1.2em;
        }
      }
    `}</style>
  </div>
);

export default Layout;
