const nums = process.argv.slice(2);
const result = nums.reduce((previousVal , currVal ) => {
    return previousVal + +currVal;
} , 0)
console.log(result);