module.exports = app => {
  const tutorials = require("../controllers/tutorial.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", profile.create);

  // Retrieve all Tutorials
  router.get("/", profile.findAll);

  // Retrieve all published Tutorials
  router.get("/type", profile.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", profile.findOne);

  // Update a Tutorial with id
  router.put("/:id", profile.update);

  // Delete a Tutorial with id
  router.delete("/:id", profile.delete);

  // Create a new Tutorial
  router.delete("/", profile.deleteAll);

  app.use("/api/profile", router);
};
