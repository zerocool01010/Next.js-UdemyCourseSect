import "../styles/globals.css";
import Layout from "../components/layout/Layout";

function MyApp({ Component, pageProps }) { //con este componente especial puedo pasarle los props de Layout a todas las paginas de mi sitio sin necesidad de 
  //wrappear cada componente especifica y personalizadamente
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
