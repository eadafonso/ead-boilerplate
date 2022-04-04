import Global from "../styles/Global";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Global />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
