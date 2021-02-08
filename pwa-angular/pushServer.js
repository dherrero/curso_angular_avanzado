let express = require('express');
let bodyParser = require('body-parser');
let cors = require('cors');
let webPush = require('web-push');

// 1- instanciar nuestra aplicacion express
let app = express();

app.use(bodyParser.urlencoded({
  extended: false
}));

// 2- nuestra aplicacion usará json
app.use(bodyParser.json());

// 3- configuracion de corss
app.use(cors()); //cualquier origen es válido


//4- plantear los END POINTS

// mandar mensaje al usuario
app.get('/', (req, res)=>{
  res.send({mensaje:'mensaje para usuario'});
});

// ruta de suscripcion
app.post('/subscribe', (req, res)=>{
  let body = req.body;

  //Seteamos la VAPID KEY
  webPush.setVapidDetails(
    "mailto: ejemplo@dominio.com",
    // TODO: claves VAPID
    'BF_kPKQj3glbz7sTHlv4r0csr1gqwIOOAoi5NA4mNXt_0vriOWGzQW1_UqHZwl4b9KzvxHRREvNcNlt1L5_6vv8',
    // privada
    'IvZ1rvgE01UH83wArvXNFKgcy1OSRn467RLEdPgnLtw'
  );

  // contenido de la notificacion que vamos a mandar
  let payload = JSON.stringify({
    "notification": {
      "title": "Martín API",
      "body": "Gracias por suscribirte a nuestras news letter",
      "icon": "https://pics.freeicons.io/uploads/icons/png/13156336861557740323-512.png"
    }
  });

  //Enviamos la notificacion push al usuario
  Promise.resolve(webPush.sendNotification(body, payload)).then(() => {
    res.status(200).json({
      message: "Notificación enviada correctamente"
    }).catch(err => {
      console.log(`Error en el servidor:`, err);
      res.status(500);
    })
  });

});

app.listen(3000, ()=>{
  console.log(`APP express escuchando el puerto 3000`);
});
