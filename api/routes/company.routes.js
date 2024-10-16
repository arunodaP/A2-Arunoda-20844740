const { company } = require("../models/index.js");

module.exports = app => {
    const Company = require("../controllers/company.controller.js");
  
    var router = require("express").Router();
  
    router.post("/company/", company.create);
  
    router.get("/company/", company.findAll);
  
    router.get("/company/:company_id", company.findOne);
  
    router.put("/company/:company_id", company.update);
  
    router.delete("/company/:company_id", company.delete);
  
    app.use('/api', router);
};