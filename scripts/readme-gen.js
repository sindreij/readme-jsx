"use strict";
const { generateMD } = require("../src");
generateMD("./README.jsx").then(() => {
  console.log("Done");
  process.exit();
});
