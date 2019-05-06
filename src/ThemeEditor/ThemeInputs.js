import React from 'react'
import PropTypes from 'prop-types'
import ColorPicker from './ColorPicker'
import Input from '../Input/Input'

const toPickerProps = (props, pickerName) => ({
  onChange: props.onColorChange,
  onOutsideClick: props.hidePicker,
  name: pickerName,
  showsPicker: props.picker === pickerName,
})
const ThemeInputs = (props) => {
  
  return (
    <>
      <ColorPicker {...toPickerProps(props, 'primary')}>
        <Input
          label='Primary'
          name='primary'
          type='text'
          value={props.primaryColor}
          onFocus={props.showPrimaryPicker}
          readOnly
        />
      </ColorPicker>

      <ColorPicker {...toPickerProps(props, 'secondary')}>
        <Input
          label='Secondary'
          name='secondary'
          type='text'
          value={props.secondaryColor}
          onFocus={props.showSecondaryPicker}
          readOnly
        />
      </ColorPicker>
    </>
  )
}

ThemeInputs.propTypes = {
  onColorChange: PropTypes.func.isRequired,
  hidePicker: PropTypes.func.isRequired,
  showPrimaryPicker: PropTypes.func.isRequired,
  showSecondaryPicker: PropTypes.func.isRequired,
  picker: PropTypes.string.isRequired,
  primaryColor: PropTypes.string.isRequired,
  secondaryColor: PropTypes.string.isRequired,
}
export default ThemeInputs