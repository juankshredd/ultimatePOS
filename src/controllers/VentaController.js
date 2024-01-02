function venta(req, res){
    // Obtiene la info del cajero desde el objeto req.user
    const data = JSON.parse(`${req.session.username}`);

    const userData = data[0];
    console.log(typeof userData, userData)
    res.render('venta/venta', {usuario: userData}); 
}

function consultarCliente(req, res){
    const data = req.body;
    req.getConnection((err, conn) => {
        // consultar al cliente en la db
        conn.query('SELECT * FROM cliente WHERE Identificacion = ?', [data.identificacion], (err, userdata) => {
            if(userdata.length > 0) {
                res.body = JSON.stringify(userdata)
                userdata.forEach(element => {
                    console.log(`Cliente consultado: ${userdata}`);
                });
                res.render('venta/venta', {cliente})
            }else {
                res.render('venta/venta', {error: 'El cliente no existe!'})
            }
        });
    });
}

function consultarCajero(req, res){
    //Ejemplo de consulta 
    const cajeroId = req.user.id; // Supongamos que el ID del cajero está almacenado en req.user.id
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM cajero WHERE id = ?', [cajeroId], (err, cajeroData) => {
            if (cajeroData.length > 0) {
                // Puedes hacer algo con los datos del cajero si es necesario
                console.log(`Datos del cajero logueado: ${cajeroData}`);
            } else {
                console.log('Cajero no encontrado');
            }
        });
    });
}

function agregarProducto(){

}

function anularVenta(){

}
function eliminarProducto(){

}

module.exports = {
    venta,
    consultarCajero,
    consultarCliente,
    agregarProducto,
    anularVenta,
    eliminarProducto
};
