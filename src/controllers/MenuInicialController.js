// const loggedUser = require('./LoginController')
//console.log()

function menuInicial(req, res){
    res.render('menu/menu-inicial');
}

function irRegistroCajero(){

}

function irRegistroCliente(){
    
}

function irCrearVenta(){

}

module.exports = {
    irRegistroCajero,
    irRegistroCliente,
    irCrearVenta,
    menuInicial,
};
