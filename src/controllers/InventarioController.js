function inventario(req, res){
    res.render('inventario/inventario')
}

function guardarProducto(req, res){
    const data= req.body;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM producto WHERE plu = ?', [data.plu], (err, userdata) => {
            if(userdata.length > 0) {
                res.render('inventario/inventario', {error: 'El producto ya existe!'})
            }else {
                req.getConnection((err, conn) => {
                    conn.query('INSERT INTO producto SET ?', [data], (err, rows) => {
                        res.redirect('/inventario')
                    });
                });
            }
        });
    });
};

function consultarProducto(req, res){

};

function editarProducto(req, res){

};

module.exports = {
    inventario,
    guardarProducto,
    consultarProducto,
    editarProducto

};
