import React from 'react'

// 创建context 农名种菜 这个里面有默认值可以传递 
export const ThemeContext = React.createContext({themColor: 'pink'})
//  接受者 批发商批发菜
export const ThemeProvider = ThemeContext.Provider


// 消费者 吃菜
export const ThemeConsumer = ThemeContext.Consumer