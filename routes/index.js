const express = require("express");
const router = express.Router();
const multer = require("multer")
const controller = require("../controllers/file.controller");


let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './resources/static/assets/midi/');
    },
    filename: function (req, file, cb) {
        console.log('Storage',req.params)
        cb(null, file.originalname);
    }
})
const upload = multer({ storage: storage})

let routes = (app) => {
  router.post("/api/files/upload", upload.single('uploadMidi'), function(req, res, next){
    console.log(req.file);
    console.log(req.body)
  });
  router.get("/api/files/getList", controller.getListFiles);
  router.get("/api/files/get/:name", controller.readFile);
  //router.delete("/api/delete/:name", controller.remove)
  app.use(router);
};
module.exports = routes;