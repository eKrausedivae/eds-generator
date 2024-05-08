#!/usr/bin/env node
import { cloneRepo } from './boilerplateGenerator/index.js';
import { createNewComponent } from './componentGenerator/index.mjs';
import { program } from 'commander';

program
  .command('clone')
  .argument('<folderName>', 'folder name')
  .description('Clone a template repository into a new folder')
  .action(cloneRepo);

program
  .command('new')
  .description('Create new component/block')
  .action(createNewComponent);

program
  .parse(process.argv);