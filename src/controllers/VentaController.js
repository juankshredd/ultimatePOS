const bcrypt = require('bcrypt')

function venta(req, res){
    // Obtiene la info del cajero desde el objeto req.user
    const cajero = JSON.stringify(req.user);
    
    // Renderiza la vista
    res.render('venta/venta');
    console.log(`Cajero logueado: ${cajero}`);

    //console.log(`Cajero logueado: ${cajero}`);
    
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
