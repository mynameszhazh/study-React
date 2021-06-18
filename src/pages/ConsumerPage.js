import React, {useState, useEffect} from 'react'
import { ThemeConsumer } from '../ThemeContext'

export default function ConsumerPage(props) {
  return (
    <div>
      <h3>ConsumerPage</h3>

      {/* 里面是一个函数 */}
      <ThemeConsumer>{
        ctx => <div className={ctx.themeColor}>文本</div>
        }</ThemeConsumer>
    </div>
  )
}
