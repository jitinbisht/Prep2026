//Retry promises N number of times in JavaScript.
//Implement a function in JavaScript that retries promises N number of times with a delay between each call.

let count = 0;

const unstableAPICall = () => new Promise((resolve, reject) => {
  count++
  if(count < 3){
    reject('Call Failed!')
  } else {
    resolve('Call Success!')
  }
})

const delay = (ms) => new Promise(res => setTimeout(res, ms));

const retry = async (fn, retries, delayTime) => {
  let attempt = 0;
  while(attempt < retries) {
    try {
      let result = await fn()
      return result
    }
    catch {
      attempt++;
      if(attempt >= retries){
        throw error
      }
      console.log('Attempting API call: ', attempt)
      await delay(delayTime)
    }
  }
}




retry(unstableAPICall, 5, 1000)
.then(res => console.log('Final result: ', res))
.catch(err => console.log('Final Err: ', err.message))