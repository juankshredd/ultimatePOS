function logOut(req, res){
    if(req.session.loggedin == true) {
         res.session.destroy();
         res.redirect('/login');
     }
      
 }

 module.exports = {
    logOut
 }
