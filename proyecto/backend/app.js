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
});

// Rutas de acceso
app.get("/", function(req, res) {
    res.send("Ruta de inicio")
});
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
//Seleccionamos un cliente en especifico
app.get('/api/clientes/:id', (req,res)=>{
    conexion.query('Select * from Clientes Where id=?',[req.params.id],(error,fila) => {
        if(error){
            throw error;
        }
        res.send(fila);
    });
});

//Eliminamos un cliente en especifico
app.delete('/api/clientes/:id', (req,res)=>{
    let id = req.params.id
    conexion.query('Delete from Clientes Where id=?', [id],(error,fila) => {
        if(error){
            throw error;
        }
        res.send(fila);
    });
});
//Insertar un cliente nuevo
app.post('/api/clientes', (req,res) => {
    let data = {
        id: req.body.id,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        direccion: req.body.direccion,
        telefono: req.body.telefono,
        rfc: req.body.rfc,
        curp: req.body.rfc,
        cp: req.body.cp
    };
    let sql = "Insert into clientes SET ?";
    conexion.query(sql, data, (error,resultado) => {
        if(error){
            throw error;
        } else {
            res.send(resultado);
        }
    })
});

// Encender el servidor
let puerto = 3000; 
app.listen(puerto, function() {
    console.log("Servidor escuchando puerto " + puerto);
})
