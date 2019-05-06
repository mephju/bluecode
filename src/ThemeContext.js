import React from 'react'

export const theme = {
  primary: '#61DAFB',
  secondary: '#FFC028',
  setColor: (name, hex) => ({ ...theme, [name]: hex })
}

const ThemeContext = React.createContext(theme)

export default ThemeContext

