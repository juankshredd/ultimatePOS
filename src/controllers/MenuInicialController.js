function menuInicial(req, res){
    console.log(req.body, res.body);
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
