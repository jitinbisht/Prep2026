const obj = {
  a: 1,
  b: { c: 2, d: { e: 3 } }
};

// o/p {
//   a: 1,
//   "b.c": 2,
//   "b.d.e": 3
// }

const flattenObject = (obj, parentKey = '', result={}) => {
  for(let key in obj){
    const newKey = parentKey ? `${parentKey}.${key}` : key;
    if(typeof obj[key] === 'object' && obj[key] !== null & !Array.isArray(obj[key])){
      flattenObject(obj[key], newKey, result)
    } else {
      result[newKey] = obj[key]
    }
  }
  return result
}

console.log(flattenObject(obj));