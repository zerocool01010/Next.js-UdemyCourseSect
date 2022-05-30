//no crearemos react components, no vamos a definir, retornar ni renderizar componentes funcionales
//sino vamos a definir funciones con server side code, porque API routes corren en el servidor y no en la maquina del cliente

//localhost:3001/api/new-meetup

function handler(req, res) {
  if (req.method === "POST") {
    //solo ejecutamos si recibimos un POST request method
    const data = req.body; //body trae la data del request

    const { title, image, address, description } = data;
  }
}

export default handler;
