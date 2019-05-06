import React, {useCallback} from 'react'
import styles from './ColorPicker.module.css'
import PropTypes from 'prop-types'
import ReactColorPicker from 'react-circular-color'
import OutsideClickHandler from 'react-outside-click-handler'

const ColorPicker = (props) => {

  const {onChange, onOutsideClick, name} = props

  const onColorChange = useCallback(
    (color) => onChange(color.toUpperCase(), name),
    [onChange, name],
  )

  return (
    <>
      {props.showsPicker && (
        <OutsideClickHandler onOutsideClick={onOutsideClick}>
          <div className={styles.colorPicker}>
            <div className={styles.dialog}>
              <ReactColorPicker onChange={onColorChange} />
            </div>
          </div>
        </OutsideClickHandler>
      )}
      {props.children}
    </>
  )
}

ColorPicker.propTypes = {
  onChange: PropTypes.func.isRequired,
  onOutsideClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
  showsPicker: PropTypes.bool.isRequired,
}

export default ColorPicker
