
const { LocalStorage } = require('node-localstorage');
const localStorage = new LocalStorage('./scratch');

const myLocalStorage = {
  setItem: (key, value, ttl) =>{ 
    const now = Date.now()
    const item = {
      value: value,
      expiry: now  + ttl
    }
    localStorage.setItem(key, JSON.stringify(item))
  },

  getItem: (key) => {
    const itemStr = localStorage.getItem(key)
    if(!itemStr) return null
    const item = JSON.parse(itemStr)
    const now = Date.now()
    if(now >= item.expiry){
      localStorage.removeItem(key)
      return null
    }
    return item.value
  },
  
  removeItem: (key) => {
    localStorage.removeItem(key)
  },

  clear: () => {
    localStorage.clear()
  }
}


myLocalStorage.setItem('user', { name: 'Jitin' }, 5000);

// Immediately
console.log(myLocalStorage.getItem('user')); 
// 👉 { name: 'Jitin' }

// After 6 seconds
setTimeout(() => {
  console.log(myLocalStorage.getItem('user'));
  // 👉 null (expired)
}, 6000);