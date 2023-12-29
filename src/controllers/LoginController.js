const bcrypt = require('bcrypt');

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
                        }else {
                            req.session.loggedin = true;
                            res.redirect('/menu-inicial');
                            console.log(userdata)
                            // workaround para guardar data del cajero logueado
                            let usuario=userdata.Nombre
                            console.log(usuario)
                            console.log(JSON.stringify(userdata));
                            /*cajeroData = function saveSession(data){
                                sessionStorage.setItem('cajero', data);
                                //  console.log(data)
                                
                            }*/
                        }
                    });
                    //console.log(res.body); // data para tener en cuenta para localStorage

                });
            }else {
                res.render('login/index', {error: 'El usuario no existe!'})
            }
        });
    });
};


module.exports = {
    login,
    auth,
};
