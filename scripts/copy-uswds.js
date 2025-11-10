#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const uswdsDist = path.join(root, 'node_modules', 'uswds', 'dist');

async function copyFile(src, dest) {
  await fs.promises.mkdir(path.dirname(dest), { recursive: true });
  await fs.promises.copyFile(src, dest);
}

async function copyDir(src, dest) {
  await fs.promises.mkdir(dest, { recursive: true });
  const entries = await fs.promises.readdir(src, { withFileTypes: true });
  for (const entry of entries) {
    const from = path.join(src, entry.name);
    const to = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      await copyDir(from, to);
    } else {
      await copyFile(from, to);
    }
  }
}

async function run() {
  try {
    await copyFile(
      path.join(uswdsDist, 'js', 'uswds.min.js'),
      path.join(root, 'assets', 'js', 'uswds.min.js')
    );
    await copyFile(
      path.join(uswdsDist, 'js', 'uswds-init.min.js'),
      path.join(root, 'assets', 'js', 'uswds-init.min.js')
    );
    await copyDir(
      path.join(uswdsDist, 'img'),
      path.join(root, 'assets', 'img', 'uswds')
    );
    await copyDir(
      path.join(uswdsDist, 'fonts'),
      path.join(root, 'assets', 'fonts', 'uswds')
    );
    console.log('Copied USWDS assets');
  } catch (err) {
    console.error('Failed to copy USWDS assets');
    console.error(err);
    process.exit(1);
  }
}

run();
