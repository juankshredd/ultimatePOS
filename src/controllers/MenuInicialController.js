const menuInicial = (req, res) => {
   const data = JSON.parse(req.session.username);

    const userData = data[0];
    
    res.render('menu/menu-inicial', {name: userData["Nombre"]});
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
