const str = "a.b.c=10"

function stringToObject(str) {
   const [ path, value] = str.split('=');
   const keys = path.split('.');
   let result = Number(value);
   for(let i = keys.length - 1; i>=0; i--){
    result = { [keys[i]]: result }
   }
   return result;
}

console.log(stringToObject(str)); // { a: { b: { c: 10 } } }