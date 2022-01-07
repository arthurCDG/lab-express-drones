// Iteration #1
const mongoose = require("mongoose");
const Drone = require("../models/Drone.model.js");
require("../db/index.js");

const droneSeeds = [
  { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
  { name: "Racer 57", propellers: 4, maxSpeed: 20 },
  { name: "Courier 3000i", propellers: 6, maxSpeed: 18 },
];

(async function () {
  try {
    const allDronesSeeded = await Drone.create(droneSeeds);
    console.log(`Success: ${allDronesSeeded.length} drones added to the db!`);
    await mongoose.connection.close();
  } catch (err) {
    next(err);
  }
})();
