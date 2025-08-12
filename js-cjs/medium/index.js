/*
    This script loads and parses a config.yini
    file then prints its contents using CommonJS.
*/

const path = require('path');
const YINI = require('yini-parser');

// Path to your config file.
const file = path.join(__dirname, 'config.yini');

try {
    // Parse the YINI config file.
    const config = YINI.parseFile(file);

    // If you want to parse the file in strict mode, use this line instead:
    // const config = YINI.parseFile(file, true);

    // Print some value in the config.
    console.log('App Name  = '+config.App.name)
    console.log('isCaching = '+config.App.Special.isCaching)
    console.log()

    // Print the result.
    console.log('Parsed config:');
    console.log(config)

    console.log('Parsed config as JSON:');
    console.log(JSON.stringify(config, null, 2));
} catch (error) {
    console.error('Error parsing config.yini:', error.message);
}
