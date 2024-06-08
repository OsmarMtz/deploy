const express = require ("express"); //importar express
const bodyParser = require ("body-parser"); //importar body-parser
const misrutas = require("./routes/rutas"); //importar rutas

const app = express();//crea el servidor
const port = process.env.PORT || 3000; //puerto
app.use(bodyParser.urlencoded({extended: false})); //parsear las peticiones
app.use(bodyParser.json()); //parsear las peticiones
app.use('/', misrutas); //usar las rutas

app.use(express.static(process.cwd() + '/public/'));

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
})

   
   
   
