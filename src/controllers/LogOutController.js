function logout(req, res){
   if(req.session.loggedin == true) {
         req.session.destroy();        
     }
   res.redirect('/');
 }

 module.exports = {
    logout
 }
