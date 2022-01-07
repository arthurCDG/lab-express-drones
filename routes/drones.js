const express = require("express");
const router = express.Router();
const Drone = require("../models/Drone.model.js");

// require the Drone model here

router.get("/drones", (req, res, next) => {
  Drone.find()
    .then((allDronesFetched) => {
      res.render("drones/list.hbs", { drones: allDronesFetched });
      console.log(
        `Success! ${allDronesFetched.length} drones sent to to the list view!`
      );
    })
    .catch((err) => next(err));
});

router.get("/drones/create", (req, res, next) => {
  res.render("drones/CRUD-form.hbs");
});

router.post("/drones/create", (req, res, next) => {
  Drone.create(req.body)
    .then(res.redirect("/drones"))
    .catch(res.render("/drones/create"));
});

router.get("/drones/:id/edit", (req, res, next) => {
  const { id } = req.params;
  Drone.findById(id)
    .then((droneFetched) => {
      res.render("drones/CRUD-form.hbs", { droneFetched });
    })
    .catch((err) => next(err));
});

router.post("/drones/:id/edit", (req, res, next) => {
  console.log("HELLLO");
  const { id } = req.params;
  const { name, propellers, maxSpeed } = req.body;
  Drone.findByIdAndUpdate(id, { name, propellers, maxSpeed }, { new: true })
    .then(res.redirect("/drones"))
    .catch(res.render(`/drones/${id}/create`));
});

router.post("/drones/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
