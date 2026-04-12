
const deepEqual = (obj1, obj2) => {

  if(obj1 === obj2) return true
  if(obj1 ==null || obj2 == null)  return false

  if(obj1 instanceof Date && obj2 instanceof Date){
    return obj1.getTime() === obj2.getTime()
  }
  if(Array.isArray(obj1) !== Array.isArray(obj2)) return false

  if(typeof obj1 !== 'object' || typeof obj2 !== 'object') return false


  let keys1 = Object.keys(obj1)
  let keys2 = Object.keys(obj2)
  
  if(keys1.length !== keys2.length) return false

  // for(let key of keys1){
  //   if(!keys2.includes(key) || !deepEqual(obj1[key], obj2[key]))
  //   return false
  // }
  
  return keys1.every(key => keys2.includes(key) && deepEqual(obj1[key], obj2[key]))
}



console.log(
  deepEqual(
    {a: [1,2]},
    {a: [1,2]}
  )
); // true