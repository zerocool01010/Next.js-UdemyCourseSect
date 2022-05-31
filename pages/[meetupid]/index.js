import MeetUpDetail from "../../components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";

function MeetUpDetails(props) {
  return (
    <MeetUpDetail
      image={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
  );
}

export async function getStaticPaths(){ //con esto solucionamso el error generado por no tener el id en un pre-rendering scenario
    const client = await MongoClient.connect('mongodburlfdsfdafadfafadfadfadfadfadf') 
    const db = client.db()

    const meetupsCollection = db.collection('meetups')

    const meetups = await meetupsCollection.find({}, {_id: 1}).toArray(); //puse el 1er argumento vacio para que no filtre, y me de todos los elems. En el 2do argumento le digo que solo quiero los ids
    client.close();

    return {
        fallback: false, //false para que solo acepte las opciones debajo definidas, con true se vuelve mas dinamico aunque pasemos un valor no definido debajo
        paths: meetups.map(
            (m) => ({params: { meetupId: m._id.toString()}})
        )
    }
}

export async function getStaticProps(context) { //fetch data for a single meetup

    const meetupId = context.params.meetupid; //no hay que olvidarse que como esta funcion es pre-rendering, entonces es antes de que se monten los componentes, y entonces como consigue el id?
    
    const client = await MongoClient.connect('mongodburlfdsfdafadfafadfadfadfadfadf') 
    const db = client.db()

    const meetupsCollection = db.collection('meetups');

    const selectedMeetup = await meetupsCollection.findOne({_id: ObjectId(meetupId)});

    client.close();

    return {
      props: {
        meetupData: {
            id: selectedMeetup._id.toString(),
            title: selectedMeetup.title,
            address: selectedMeetup.address,
            image: selectedMeetup.image,
            description: selectedMeetup.description
        }
      }
    };
  }

export default MeetUpDetails;
