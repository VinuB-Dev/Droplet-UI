import { createContext, useContext, useState } from 'react'
export const ButtonContext = createContext()

export function ButtonProvider({ children }) {
  const [buttonId, setButtonId] = useState(1)
  return (
    <ButtonContext.Provider value={{ buttonId, setButtonId }}>
      {children}
    </ButtonContext.Provider>
  )
}

export function useButton() {
  return useContext(ButtonContext)
}
