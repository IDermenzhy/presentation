import React, { createContext, useState,   useContext } from 'react'

export const ContextCreate = createContext()

export const useTestContext = () => useContext(ContextCreate)

export const ContextProvider = ({ children }) => {
  const [keyword, setKeyword] = useState('')

  const value = {
    keyword,
    setKeyword
  }
  return <ContextCreate.Provider value={value}>{children}</ContextCreate.Provider>
}
