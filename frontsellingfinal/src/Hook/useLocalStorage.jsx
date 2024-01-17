import { useEffect, useState } from 'react'

function useLocalStorage(key,initialvalue='') {
    const [local, setlocal] = useState(localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : initialvalue)
    useEffect(() => {
      localStorage.setItem(key,JSON.stringify(local))
    }, [local,key])
    

  return [local,setlocal]
}

export default useLocalStorage