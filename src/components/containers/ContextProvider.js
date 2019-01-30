import React from 'react'
import { createContext } from 'store'

const RootContext = createContext()

const ContextProvider = ({ children }) => (
  <RootContext.Provider value={{ ...RootContext._currentValue }}>
    {React.cloneElement(children, {
      Provider: RootContext.Provider,
      Consumer: RootContext.Consumer
    })}
  </RootContext.Provider>
)

export default ContextProvider
