//no crearemos react components, no vamos a definir, retornar ni renderizar componentes funcionales
//sino vamos a definir funciones con server side code, porque API routes corren en el servidor y no en la maquina del cliente

import { MongoClient } from 'mongodb'
//localhost:3001/api/new-meetup

async function handler(req, res) {
  if (req.method === "POST") {
    //solo ejecutamos si recibimos un POST request method
    const data = req.body; //body trae la data del request

    const { title, image, address, description } = data;

    const client = await MongoClient.connect('mongodburlfdsfdafadfafadfadfadfadfadf') // ver como preparar el db de Mongo en el curso de Udemy video 342 del curso de Max Schrmuller: 
                                                                //  https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25616858#notes
    const db = client.db()

    const meetupsCollection = db.collection('meetups')
    const result = await meetupsCollection.insertOne(data) //viene un objeto data = {}
    console.log(result)
    client.close()
    res.status(201).json({ message: 'all ok, meetup inserted!'})
  }
}

export default handler;
