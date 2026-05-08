const fs = require("fs");
const path = require("path");

// create distDir
const distDir = path.join(__dirname, "dist");
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir);
}

// Generate a build infor file
const buildInfo = {
  name: "actions-lab",
  version: "1.0.0",
  buildTime: new Date().toISOString(),
  nodeVersion: process.version,
  platform: process.platform,
};

fs.writeFileSync(
  path.join(distDir, "build-info.json"),
  JSON.stringify(buildInfo, null, 2),
);

// Copy the test file to dist
fs.copyFileSync(path.join(__dirname, "test.js"), path.join(distDir, "test.js"));

console.log("Build completed successfully!");
console.log("Output directory: dist/");
console.log("Build info:", JSON.stringify(buildInfo, null, 2));
