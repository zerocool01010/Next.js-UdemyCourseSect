import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";

/* const dummy_data = [
  {
    id: "01",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/8/8b/Mexico.Pue.Cholula.Pyramid.01.jpg",
    title: "Cholula Pyramid",
    address: "Pancho Roza, 233, CD",
  },
  {
    id: "02",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Cuicuilco1.jpg/2560px-Cuicuilco1.jpg",
    title: "Cuicuilco Pyramid",
    address: "Gral Juarez, 300, Toluca",
  },
  {
    id: "03",
    image:
      "https://res.cloudinary.com/oasisapp/image/upload/f_auto,t_individual_item/v1/1/mexico/palenque-archeological-site-29891",
    title: "Palenque Pyramid",
    address: "Cuauthemoc, 4693, Guadalajara",
  },
]; */

const HomePage = (props) => {
  /*let timer = setTimeout(() => {
    return (
      <>
        <MeetupList />
      </>
    );
  }, 2000); */

  return (
    <>
      <h1>Home Page</h1>
      <MeetupList meetups={props.meetups} />
      {/* esto viene del getStaticProps */}
    </>
  );
};

/* export async function getServerSideProps(context){ //a diferencia del SSG, el Server Side Rendering se ejecuta despues del deploy, y no antes como el Static Site Generation
    //si tienen en comun que este codigo se ejecuta del lado del servidor, y no llega al cliente
    //haremos el fetch de data de una API

    const req = context.req; //esto es parecido a Node que hago un request y
    const res = context.res; //obtengo una response

    //este approach es mejor cuando necesito fetchear data del server con mas frecuencia y cuando tengo mas uso y cambios dinamicos de datos en la pagina

    return {
        props: {
            meetups: dummy_data
        }
    }
} */

export async function getStaticProps() {
  //usado en el Static Site Generation (SSG) approach (opcion alternativa al Server Side Rendering (SSR))
  //reserved name in Next.js
  //Next busca por esta funcion y si la encuentra, ejecuta esta funcion durante el pre-renderizado, llama primero esta funcion antes de evaluar el componente
  //este codigo es como el que se ejecuta en el server, nunca llega al cliente, porque se ejecuta durante el build process, entonces nunca se ejecutara en las maquinas
  //del cliente

  //haremos el fetch de data de una API
    const client = await MongoClient.connect('mongodburlfdsfdafadfafadfadfadfadfadf') 
    const db = client.db()

    const meetupsCollection = db.collection('meetups')

    const meetups = await meetupsCollection.find().toArray();
    client.close();

  return {
    props: {
      meetups: meetups.map(m => ({ //puedo usar lo que traigo de la db de Mongo para renderizar los datos, en lugar de usar los ahora comentados dummy_data, pero tener en cuenta que primero debo cargarlos en la db cosa que no hice
          title: m.title,
          address: m.address,
          image: m.image,
          id: m._id.toString(),
      })),
    },
    revalidate: 3600, //esto nos permite re-deployar cada X segundos (en este caso 3600 = 1 hora) para mantener la pagina actualizada con los ultimos datos updated
  };
}

export default HomePage;
