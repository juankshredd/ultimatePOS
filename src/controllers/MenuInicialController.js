const menuInicial = (req, res) => {
   const data = JSON.parse(req.session.username);
    // renderiza la vista del menu
    //res.render('menu/menu-inicial')
    // alternativa para mostrar en le menu el nombre del cajero
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
