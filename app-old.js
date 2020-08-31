const http = require('http');


http.createServer((req, res) => {

    res.writeHead(200, {'Context-Type':'application/json'});

    let salida ={
        nombre:'Kevin',
        edad: 23,
        url: req.url
    }


    res.write(JSON.stringify(salida));
    // res.write("Hola mundo");
    res.end();
})
.listen(5000);

console.log("Escuchando el puerto 5000");


