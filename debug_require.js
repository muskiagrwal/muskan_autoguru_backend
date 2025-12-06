const fs = require('fs');
const path = require('path');

function requireAll(dir) {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            if (file !== 'node_modules' && file !== '.git') {
                requireAll(fullPath);
            }
        } else if (file.endsWith('.js')) {
            try {
                console.log(`Requiring ${fullPath}...`);
                require(fullPath);
                console.log(`Successfully required ${fullPath}`);
            } catch (error) {
                console.error(`FAILED to require ${fullPath}`);
                console.error(error);
                process.exit(1);
            }
        }
    });
}

requireAll(__dirname);
