const bcrypt = require('bcrypt');

function registroCajero(req, res){
    res.render('registro/registro-cajero');
}

function registroCliente(req, res){
    res.render('registro/registro-cliente');
}

function guardarCajero(req, res){
    const data= req.body;
    bcrypt.hash(data.password, 12).then(hash => {
        data.password = hash;
        console.log(data);
        req.getConnection((err, conn) => {
            conn.query('INSERT INTO cajero SET ?', [data], (err, rows) => {
                res.redirect('/login')
            });
        });
    });
};

function guardarCliente(req, res){
    const data= req.body;
        console.log(data);
        req.getConnection((err, conn) => {
            conn.query('INSERT INTO cliente SET ?', [data], (err, rows) => {
                if(err){
                    console.log(err)
                }else
                res.redirect('/login')
            })
        });
};

module.exports = {
    registroCajero,
    registroCliente,
    guardarCajero,
    guardarCliente
};
