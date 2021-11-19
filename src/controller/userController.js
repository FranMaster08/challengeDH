const model =require('../model')

const userController = {
  getUsers: (req, res, next) => {
    res.render("index", { title: "Fran Generator" });
  },
  createUser: (req, res, next) => {
     const user = req.body
     if(model.keyModel.verified(user.permiso)){
       model.userModel.createUser(user)
       res.redirect('/');
     }else{
      res.send("Usted no esta autorizado");
     }
  },
  updateUser: (req, res, next)=>{

  },
  deleteUser: (req, res, next) => {

  },
  editUser: (req, res, next) => {

  }
};

module.exports = userController;
