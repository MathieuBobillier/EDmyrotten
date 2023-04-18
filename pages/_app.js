import { DefaultSeo } from "next-seo";
import Header from "../components/Layouts/Header";

import "../styles/globals.css";
import "tailwindcss/tailwind.css";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
        title="Moviesapp"
        titleTemplate="%s | Moviesapp"
        description="Find all your favourite movies and tv shows "
        canonical={process.env.NEXT_PUBLIC_DOMAIN}
        openGraph={{
          type: "website",
          locale: "en_IE",
          url: process.env.NEXT_PUBLIC_DOMAIN,
          title: "Moviesapp",
          description: "Find all your favourite movies and tv shows ",
        }}
      />
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;