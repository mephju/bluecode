import React, {Component} from 'react'
import ThemeContext, {theme} from './ThemeContext'


class ThemeProvider extends Component {

  constructor(props) {
    super(props)

    this.state = {
      ...theme,
      setColor: this.setColor,
    }
  }

  setColor = (name, hex) => {
    this.setState({ [name]: hex })
  }

  render() {
    return (

      <ThemeContext.Provider value={this.state}>
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}

export default ThemeProvider
