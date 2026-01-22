const { error } = require('console');
const fs = require('fs');

/*
//  <=========== synchronus file reading ======>
console.log('1. Starting sysc read....');
try {
    const data = fs.readFileSync('example.txt', 'utf8');
    console.log('Sync File contents:', data);
} catch (error) {
    console.log('Error occur during the file reading....');

}

console.log('file reading comple');

*/
//  <================ Asynchronus file reading ==========>

console.log('Start file reading asyn....');

fs.readFile('basic-nodeJS/example.txt',"utf8", (error, data) => {
    if (error) {
        console.log(error.message);
        return;
    }
    console.log(data);
});

console.log('Async file reading completed...');

