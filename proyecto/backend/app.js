let express = require('express'); 
let mysql = require('mysql'); 
let cors = require('cors'); 

let app = express(); // recibe al servidor y da una respuesta a la conexion 
app.use(express.json()); 
app.use(cors());

//Conexion a Mysql
let conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'pwdata',
    port:'3036'
});

//Nos conectamos a MySQL
conexion.connect(function(error){
    if(error){
        throw error;
    }
    else{
        console.log('Conectando a la base de datos');
    }
})

// Rutas de acceso
app.get("/", function(req, res) {
    res.send("Ruta de inicio")
})
//Seleccionamos todos los clientes
app.get('/api/clientes',(req,res) => {
    conexion.query('Select * From Clientes', (error,filas) =>{
        if(error){
            throw error;
        }
        else{
            res.send(filas);
        }
    });
});

// Encender el servidor
let puerto = 3000; 
app.listen(puerto, function() {
    console.log("Servidor escuchando puerto " + puerto);
})
