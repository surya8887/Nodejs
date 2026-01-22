//  async read file, not blocking code execution

const fs = require('fs');
fs.readFile('basic-nodeJs/example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File contents:', data);
});

console.log("it's print first");



// sync read file, blocking code execution
try {
    const data = fs.readFileSync('basic-nodeJs/example.txt', 'utf8');
    console.log('Sync File contents:', data);
}
catch (err) {
    console.error('Error reading file:', err);
}
console.log("it's print second");



// <========================== write file async ===========================>
fs.writeFile('basic-nodeJs/output.txt', 'Hello, this is a test!', (err) => {
    if (err) {
        console.error('Error writing file:', err);
        return;

    }
    console.log('File written successfully');
});

// write file sync
try {
    fs.writeFileSync('basic-nodeJs/output_sync.txt', 'Hello, this is a sync test!');
    console.log('Sync File written successfully');
}
catch (err) {
    console.error('Error writing file:', err);
}   