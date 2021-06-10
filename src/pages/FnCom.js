import React, { useState, useEffect } from 'react'

export function FunctionComponent(props) {
  const [date, setDate] = useState(new Date())
  // 这里直接就执行了 react里面的三个生命周期函数
  useEffect(() => {
    console.log('nihao');
    const timer = setInterval(() => {
      setDate(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div>
      <p>my name is english</p>
      <p>{date.toLocaleTimeString()}</p>
    </div>
  )
}