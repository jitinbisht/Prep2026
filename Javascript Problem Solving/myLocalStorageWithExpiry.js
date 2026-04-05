//Extend the local storage to accept an expiry time and expire the entry after that time.

myLocalStorage = {
  setItem:(key, value, ttl)=>{
    const now = Date.now()
    const item = {
      value: value,
      expiry: now + ttl
    }
    localStorage.setItem(key, JSON.stringify(item))
  },
  getItem: (key)=>{
    const itemStr = localStorage.getItem(key)
    if(!itemStr) return null
    const item = JSON.parse(itemStr)
    const now = Date.now()
    if(now > item.expiry){
      localStorage.removeItem(key)
      return null
    }
    return item.value
  },
  removeItem: (key)=> {
    localStorage.removeItem(key)
  },
  clear: ()=> {
    localStorage.clear()
  }
}



myLocalStorage.setItem('foo', 'bar', 2000)
setTimeout(()=> {
  console.log(myLocalStorage.getItem('foo'))
}, 3000)

