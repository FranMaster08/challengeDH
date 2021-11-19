const fs = require("fs");
const path = require("path");

const keyModel = {
  verified: (password) => {
    const key = JSON.parse(
      fs.readFileSync(path.resolve(__dirname, "./permisos.json"), {
        encoding: "utf8",
      })
    );
    return key.keySecret == password;
  },
};

module.exports = keyModel