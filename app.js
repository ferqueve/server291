const express = require('express');
const app = express();
const port = 3000;
let personas = [{
    "id": 1,
    "first_name": "Elbertina",
    "last_name": "Drabble",
    "email": "edrabble0@vistaprint.com"
  }, {
    "id": 2,
    "first_name": "Sherlocke",
    "last_name": "Fashion",
    "email": "sfashion1@bloomberg.com"
  }, {
    "id": 3,
    "first_name": "Sallyann",
    "last_name": "Wandrey",
    "email": "swandrey2@domainmarket.com"
  }, {
    "id": 4,
    "first_name": "Helaina",
    "last_name": "Klagges",
    "email": "hklagges3@friendfeed.com"
  }, {
    "id": 5,
    "first_name": "Barrie",
    "last_name": "Alyutin",
    "email": "balyutin4@disqus.com"
  }, {
    "id": 6,
    "first_name": "Jervis",
    "last_name": "Doull",
    "email": "jdoull5@cbsnews.com"
  }, {
    "id": 7,
    "first_name": "Karena",
    "last_name": "Spore",
    "email": "kspore6@exblog.jp"
  }, {
    "id": 8,
    "first_name": "Daryn",
    "last_name": "Waters",
    "email": "dwaters7@sogou.com"
  }, {
    "id": 9,
    "first_name": "Sylas",
    "last_name": "Sayer",
    "email": "ssayer8@discovery.com"
  }, {
    "id": 10,
    "first_name": "Jerrylee",
    "last_name": "Ducarel",
    "email": "jducarel9@tinypic.com"
  }]
  
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Bienvenido terrícola. Este es el servidor del Grupo 291');
});
app.get('/help',(req,res)=>{
    res.send('No, arreglate como puedas');
});
app.get('/personas', (req, res)=>{
    res.json(personas);
});

app.get('/personas/:personita',(req,res)=>{
    let posicion  = req.params.personita-1;
    res.json(personas[posicion])

});

app.post('/personas/agregar',(req,res)=>{
    let persona={};
     persona.nombre = req.body.nombre;
     persona.apellido = req.body.apellido;
     persona.correo = req.body.correo;
    personas.push(persona)

    res.send("Agregué a : " + persona.nombre + " - " + persona.apellido + " y su correo: " + persona.correo);
})

app.delete('/personas/:persona',(req,res)=>{
    let nombre = req.params.persona;

    res.send('¡'+ nombre +' ha sido eliminada! ¡Forever! JA JA JA JA');
})

app.listen(port, () => {
  console.log(`Servidor funcionando`);
});
