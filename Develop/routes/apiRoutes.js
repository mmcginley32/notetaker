const notes = require("../data/notes");
const fs = require("fs");
const path = require("path");

const OUTPUT_DIR = path.resolve(__dirname, "../db");
const outputPath = path.join(OUTPUT_DIR, "db.json");
// console.log('OUTPUT_DIR: ', OUTPUT_DIR);
// console.log('outputPath: ', outputPath);