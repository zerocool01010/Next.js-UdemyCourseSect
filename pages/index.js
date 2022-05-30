import MeetupList from "../components/meetups/MeetupList";
import React, { useState, useEffect } from "react";
import Layout from "../components/layout/Layout";

const dummy_data = [
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
];

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

export async function getStaticProps() { //usado en el Static Site Generation (SSG) approach (opcion alternativa al Server Side Rendering (SSR))
  //reserved name in Next.js
  //Next busca por esta funcion y si la encuentra, ejecuta esta funcion durante el pre-renderizado, llama primero esta funcion antes de evaluar el componente
  //este codigo es como el que se ejecuta en el server, nunca llega al cliente, porque se ejecuta durante el build process, entonces nunca se ejecutara en las maquinas
  //del cliente

  //haremos el fetch de data de una API
  return {
    props: {
      meetups: dummy_data,
    },
  };
}

export default HomePage;
