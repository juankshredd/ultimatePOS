const bcrypt = require('bcrypt');

function registroCajero(req, res){
    res.render('registro/registro-cajero');
}

function registroCliente(req, res){
    res.render('registro/registro-cliente');
}

function guardarCajero(req, res){
    const data= req.body;

    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM cajero WHERE Identificacion = ?', [data.identificacion], (err, userdata) => {
            if(userdata.length > 0) {
                res.render('registro/registro-cajero', {error: 'El cajero ya existe!'})
            }else {
                bcrypt.hash(data.password, 12).then(hash => {
                    data.password = hash;
                    req.getConnection((err, conn) => {
                        conn.query('INSERT INTO cajero SET ?', [data], (err, rows) => {
                            res.redirect('registro/registro-cajero')
                        });
                    });
                });
            }
        });
    });

    
};

function guardarCliente(req, res){
    const data= req.body;

    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM cliente WHERE Identificacion = ?', [data.identificacion], (err, userdata) => {
            if(userdata.length > 0) {
                console.log('El cliente ya existe!')
                res.render('registro/registro-cliente', {error: 'El cliente ya existe!'})
            }else {
                bcrypt.hash(data.password, 12).then(hash => {
                    data.password = hash;
                    console.log(data);
                    req.getConnection((err, conn) => {
                        conn.query('INSERT INTO cliente SET ?', [data], (err, rows) => {
                            res.redirect('registro/registro-cliente')
                        });
                    });
                });
            }
        });
    });
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
