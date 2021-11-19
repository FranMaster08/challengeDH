const model = require("../model");
const navigationController = {
  getHome: (req, res, next) => {
    res.send(model.userModel.getUsers());
    // res.render("index", { title: "Fran Generator"  });
  },
  getRegister: (req, res, next) => {
    res.render("register", { title: "Registro De Usuario" });
  },
};

module.exports = navigationController;
