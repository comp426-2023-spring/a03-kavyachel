#!/usr/bin/env node 

//import modules
import minimist from 'minimist';
import { rpsls } from "../lib/rpsls.js";

var argv = minimist(process.argv.slice(2));

//Help command
if (argv.h || argv.help) {
  console.log(`Usage: node-rpsls [SHOT]
  Play the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!
  
    -h, --help        display this help message and exit
    -r, --rules       display the rules and exit
  
  Examples:
    node-rpsls        Return JSON with single player RPSLS result.
                      e.g. {"player":"rock"}
    node-rpsls rock   Return JSON with results for RPSLS played against a simulated opponent.
                      e.g {"player":"rock","opponent":"Spock","result":"lose"}`);
  process.exit(0);
}

//Rules command
if (argv.r || argv.rules) {
  console.log(`Rules for the Lizard-Spock Expansion of Rock Paper Scissors:

  - Scissors CUTS Paper
  - Paper COVERS Rock
  - Rock SMOOSHES Lizard
  - Lizard POISONS Spock
  - Spock SMASHES Scissors
  - Scissors DECAPITATES Lizard
  - Lizard EATS Paper
  - Paper DISPROVES Spock
  - Spock VAPORIZES Rock
  - Rock CRUSHES Scissors`);
  process.exit(0);
}

var result = rpsls(argv._[0]);
console.log(JSON.stringify(result));
process.exit(0)
