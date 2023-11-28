function venta(req, res){
    res.render('venta/venta');
}

function consultarCliente(req, res){
    const data = req.body;
    req.getConnection((err, conn) => {
        
        conn.query('SELECT * FROM cliente WHERE Identificacion = ?', [data.identificacion], (err, userdata) => {
            if(userdata.length > 0) {
                res.body = JSON.stringify(userdata)
                userdata.forEach(element => {
                    console.log(userdata);
                });
            }else {
                res.render('venta/venta', {error: 'El cliente no existe!'})
            }
        });
    });
}

function consultarCajero(){
    
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
