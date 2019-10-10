#!/usr/bin/env node
"use strict";
require("babel-register")({
  presets: ["react"]
});
require("./parser");
