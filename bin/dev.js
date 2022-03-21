#!/usr/bin/env node

const open = require("open");
const { exec } = require("child_process");

const command = "npm run stackbit dev";

const devProcess = exec(command, (err) => {
  console.error(`Failed to execute ${command}`, err);
});

devProcess.stdout.on("data", (data) => {
  const urlMatching = data.match(
    /(https:\/\/app\.stackbit\.com\/local\/.*?)\s/
  );

  if (urlMatching) {
    console.log(`Opening local editor in browser (${urlMatching[1]})`);
    open(urlMatching[1]);
  } else {
    console.log(data.trim());
  }
});
