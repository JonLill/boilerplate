const BoilerPlateController = require("../controllers/boilerplate.controller");


module.exports = app =>{
    app.get("/api/boilerplates", BoilerPlateController.findAllBoilerPlates)
    app.post("/api/boilerplates/create", BoilerPlateController.createBoilerPlate)
    app.get("/api/boilerplates/:id", BoilerPlateController.findOneBoilerPlate)
    app.put("/api/boilerplates/update/:id", BoilerPlateController.updateOneBoilerPlate)
    app.delete("/api/boilerplates/delete/:id", BoilerPlateController.deleteBoilerPlate)
}