function inventario(req, res){
    res.render('inventario/inventario')
}

function guardarProducto(req, res){
    const data= req.body;
        console.log(data);
        req.getConnection((err, conn) => {
            conn.query('INSERT INTO producto SET ?', [data], (err, rows) => {
                if(err){
                    console.log(err)
                }else
                res.redirect('/login')
            })
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
