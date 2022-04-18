var express = require('express');
var app = express();


// Paquete necesario para conectar a bases de datos MySQL.
var mysql = require('mysql');
// Consulta SQL.
var sql = 'SELECT * FROM category LIMIT 10';


// Parámetros de conexión a la base de datos.
var con = mysql.createConnection({
  host: "127.0.0.1",
  port : 13306,
  user: "new_user",
  password: "password",
  database : 'eshop'
});

var html_top = '<html> \
    <head> \
        <title>Tarea Node + Bootrstrap</title> \
        <meta charset = "UTF8"> \
        <meta name="viewport" content="width=device-width, initial-scale=1"> \
 \
        <!-- Bootstrap CSS --> \
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"> \
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script> \
        <link rel="stylesheet" href="styles.css"> \
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script> \
 \
    </head> \
    <body> \
        <header> \
            <h1 class="text-center">Categorias de Productos</h1> \
         </header> \
';

var html_bottom = '\
   </body> \
   </html> \
';


var html_mid = '';

// Funcion que nos devolverá resultados de la base de datos.
con.connect(function(err) {
//   console.log("Connected!");
  html_mid = '<div class = "d-flex"> <ul class="list-group list-inline mx-auto justify-content-center text-center" style="min-width:300px">';
  if (err) throw err;
  con.query(sql, function (err, result) {
    if (err) throw err;

    // Bucle que recore los resultados y pinta en consola.
    for(i=0; i<result.length; i++){
    	html_mid += '<li class ="list-group-item">' + result[i].name + '</li>';
      // console.log("Result: " + result[i].name);
    }
  html_mid = html_mid + '</ul> </div>';
  });
});


app.use(express.static('public'));
app.get('/', function (req, res) {
   res.send(html_top + html_mid + html_bottom);
})
var server = app.listen(8081, function () {

   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})