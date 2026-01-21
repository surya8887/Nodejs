const fs = require('fs');
//  async read file, not blocking code execution
fs.readFile('basic-nodeJs/example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }   
    console.log('File contents:', data);
});

console.log("it's print first");
