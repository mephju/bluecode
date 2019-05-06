import React, {Component} from 'react'
import ThemeContext from '../ThemeContext'
import Tile from '../Tile/Tile'
import ThemeInputs from './ThemeInputs'

class ThemeEditor extends Component {

  constructor(props) {
    super(props)
    this.state = { picker: '' }
  }

  showPicker = (picker) => {
    this.setState({ picker })
  }

  onColorChange = (hex, name) => {
    this.context.setColor(name, hex)
  }

  showPrimaryPicker = () => this.showPicker('primary')
  showSecondaryPicker = () => this.showPicker('secondary')
  hidePicker = () => this.showPicker('')

  render() {

    return (
      <Tile title='Theme Editor'>
        <ThemeContext.Consumer>
          {theme => (
            <ThemeInputs 
              onColorChange={this.onColorChange}
              hidePicker={this.hidePicker}
              picker={this.state.picker}
              primaryColor={theme.primary}
              secondaryColor={theme.secondary}
              showPrimaryPicker={this.showPrimaryPicker}
              showSecondaryPicker={this.showSecondaryPicker}
            />
          )}
        </ThemeContext.Consumer>
      </Tile>
    )

  }

}

ThemeEditor.contextType = ThemeContext

export default ThemeEditor
