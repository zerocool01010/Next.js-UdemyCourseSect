import MeetUpDetail from "../../components/meetups/MeetupDetail";

function MeetUpDetails() {
  return (
    <MeetUpDetail
      image="https://upload.wikimedia.org/wikipedia/commons/8/8b/Mexico.Pue.Cholula.Pyramid.01.jpg"
      title="Cholula Pyramid"
      address="Pancho Roza, 233, CD"
      description="A great aztec pyramid in the Center Mexico"
    />
  );
}

export async function getStaticPaths(){ //con esto solucionamso el error generado por no tener el id en un pre-rendering scenario
    return {
        fallback: false, //false para que solo acepte las opciones debajo definidas, con true se vuelve mas dinamico aunque pasemos un valor no definido debajo
        paths: [
            {
                params: {
                    meetupid: '01',
                }
            },
            {
                params: {
                    meetupid: '02',
                }
            },
            {
                params: {
                    meetupid: '03',
                }
            }
        ] //estando el fallback en false por ejemplo no soportara que el usuario ingrese un id 'm4' como parametro
    }
}

export async function getStaticProps(context) { //fetch data for a single meetup

    const meetupId = context.params.meetupid; //no hay que olvidarse que como esta funcion es pre-rendering, entonces es antes de que se monten los componentes, y entonces como consigue el id?
    console.log(meetupId);

    return {
      props: {
        meetupData: {
            image: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/Mexico.Pue.Cholula.Pyramid.01.jpg',
            id: meetupId,
            title: 'First Meetup',
            address: 'Some Street 5, Some City',
            description: 'This is a first meetup'
        },
      },
    };
  }

export default MeetUpDetails;
