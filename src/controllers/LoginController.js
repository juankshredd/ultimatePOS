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
        
        conn.query('SELECT * FROM cajero WHERE Identificacion = ?', [data.identificacion], (err, userdata) => {
            if(userdata.length > 0) {
                res.body = JSON.stringify(userdata)
                userdata.forEach(element => {
                    bcrypt.compare(data.password, element.password, (err, isMatch) => {
                        if(!isMatch) {
                            res.render('login/index', {error: 'Usuario o contraseña incorrectos!'})
                        } else {
                            req.session.loggedin = true;
                            req.session.username = JSON.stringify(userdata);
                            //Guardamos en la sesión los datos del usuario logueado
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
