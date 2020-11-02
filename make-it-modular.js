const myModule = require('./myModule.js');

const directory = process.argv[2];
const extention = process.argv[3];

myModule(directory ,extention ,(err ,filteredList) =>{
    if (err) return console.error(err);
    filteredList.forEach(file => {
        console.log(file);
    });
})