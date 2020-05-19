import Head from "next/head";
import classNames from "classnames";

export default function Layout({ children, containerClasses }) {
  return (
    <div className={classNames("container", containerClasses)}>
      <Head>
        <title>Strom</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>{children}</main>

      <footer>Footer</footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .container.dark {
          background-color: gray;
        }

        .container.light {
          background-color: yellow;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  );
}
