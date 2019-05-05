import React, {Component, useCallback, useState} from 'react'
import styles from './ColorConfigWidget.module.css'
import PropTypes from 'prop-types'
import Input from '../Input/Input'
import ColorPicker from './ColorPicker';
import ThemeContext from '../ThemeContext';
import Tile from '../Tile/Tile';

class ColorConfigWidget extends Component {

  constructor(props) {
    super(props)

    this.state = {
      showsPicker: false,
    }
  }

  showPicker = (showsPicker) => {
    this.setState({ showsPicker })
  }

  onColorChange = (hex, name) => {
    this.context.setColor(name, hex)
  }

  render() {
    const {showsPicker} = this.state

    return (
      <Tile title='Theme Editor'>
        {showsPicker && (
          <ColorPicker
            onChange={this.onColorChange}
            onOutsideClick={() => this.showPicker(false)}
            name={showsPicker}
          />
        )}
        <ThemeContext.Consumer>
          {theme => (
            <>
              <Input
                label='Primary'
                name='primary'
                type='text'
                value={theme.primary.toUpperCase()}
                onFocus={() => this.showPicker('primary')}
                readOnly
              />
              <Input
                label='Secondary'
                name='secondary'
                type='text'
                value={theme.secondary.toUpperCase()}
                onFocus={() => this.showPicker('secondary')}
                readOnly
              />
            </>
          )}
        </ThemeContext.Consumer>
      </Tile>
    )

  }

}

ColorConfigWidget.propTypes = {
  children: PropTypes.any,
}

ColorConfigWidget.contextType = ThemeContext

export default ColorConfigWidget
