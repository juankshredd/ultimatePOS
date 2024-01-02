const bcrypt = require('bcrypt');
const { response } = require('express');

function login(req, res){

   if(req.session.loggedin != true) {
        res.render('login/index');
    }else {
        res.redirect('/menu-inicial');
    }
}

function auth(req, res){
    const data = req.body;
    
    req.getConnection((err, conn) => {
        // se consulta en la DB si existe el usuario que intenta el login
        conn.query('SELECT * FROM cajero WHERE Identificacion = ?', [data.identificacion], (err, userdata) => {
            // valida si existe al menos un registro que tenga la misma identificacion
            if(userdata.length > 0) {
                // se convierte el registro en string
                res.body = JSON.stringify(userdata)
                userdata.forEach(element => {
                    // compara si el password es igual al del la DB (encriptado)
                    bcrypt.compare(data.password, element.password, (err, isMatch) => {
                        if(!isMatch) {
                            // si no hace match...
                            res.render('login/index', {error: 'Usuario o contraseña incorrectos!'})
                        } else {
                            // si hace match la sesion esta logueada
                            req.session.loggedin = true;
                            //Guardamos en la sesión los datos del usuario logueado trayendolos desde la DB
                            req.session.username = JSON.stringify(userdata);
                            // se redirecciona la menu inicial
                            res.redirect('/menu-inicial');
                            
                        }
                    });
                });
            }else {
                res.render('login/index', {error: 'El usuario no existe!'})
            }
        });
    });
};


module.exports = {
    login,
    auth
};
