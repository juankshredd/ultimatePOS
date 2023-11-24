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
                        }
                    });
                });
            }else {
                res.render('login/index', {error: 'El usuario no existe!'})
            }
        });
    });
};

function saveSession(data){
    window.localStorage.setItem('cajero', data)
}


module.exports = {
    login,
    auth,
    saveSession
};
