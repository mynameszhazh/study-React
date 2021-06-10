import React, { useState, useEffect, useMemo, useCallback } from 'react'

export default function HookPage(props) {
  // 这里就好像是设置了一些可以使用的
  const [ count, setCount ] = useState(1)
  
  const [ age ] = useState(1)
  
  useEffect(() => {
    // console.log('effect');
    document.title = `my${count}次`
    // 当我放弃这个useEffect的时候就会调用下面这个
    return () => console.log('nihoa');
  }, [count])
  return (
    <div>
      {/* <h3>HookPage</h3>
      <p>{count}</p>
      <button onClick={()=> setCount(count + 1) }>按钮</button> */}
      <p>{useHook().toLocaleTimeString()}</p>
    </div>
  )
}


/**
 * 1.Hook只能在函数的最外层进行使用
 * 2.只有函数组件中可以使用hook
 * 3.use开头 就像 useHook
 */
function useHook() {
  const [date, setDate] = useState(new Date())
  useEffect(() => {
    // console.log('effect');
    // 当我放弃这个useEffect的时候就会调用下面这个
    const timer = setInterval(() => {
      setDate(new Date)
    }, 1000);
    return () => clearInterval(timer);
  }, [])
  // 自定义钩子关键是我得到的这个date
  return date
}
