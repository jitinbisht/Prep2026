const obj = {
  a: 1,
  b: { c: 2 }
};

const deepClone = (obj) => {
  if(obj === null || typeof obj !== 'object'){
    return obj
  }
  const result = Array.isArray(obj) ? [] : {}

  for(let key in obj){
    if(obj.hasOwnProperty(key)){
      result[key] = deepClone(obj[key])
    }
  }
  return result
}

console.log(deepClone(obj))
const copy = deepClone(obj)
copy.b.c = 10

console.log(copy, '---copy--')
console.log(obj, '---original obj---')


