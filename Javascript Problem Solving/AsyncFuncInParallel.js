//Implement a function in JavaScript that takes a list of async functions as input and a callback function and executes the async tasks in parallel that is all at once and invokes the callback after every task is executed.

/*
Input:
executeParallel([asyncTask(3), asyncTask(1), asyncTask(2)], (result) => {
console.log(result);
});

Output:
// output in the order of execution
[2, 1, 3]
*/



const asyncTask = (ms) => 
  new Promise(res => setTimeout(() => res(ms), ms * 1000));
const executeParallel = (tasks, cb) => {
  let completed = 0;
  const total = tasks.length;
  let result = []

  tasks.forEach(task => {
    task.then((res)=>{
      completed++
      result.push(res)
      if(completed >= total){
        cb(result)
      }
    })
    .catch((err)=> {
      completed++
      result.push(err)
      if(completed >= total){
        cb(result)
      }
    })
  })


}

executeParallel([asyncTask(3), asyncTask(1), asyncTask(2)], (result) => {
console.log(result);
});

Output:
// output in the order of execution
[2, 1, 3]