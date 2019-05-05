import React, {useState, useCallback} from 'react'
import styles from './ColorPicker.module.css'
import PropTypes from 'prop-types'
import ReactColorPicker from 'react-circular-color';
import OutsideClickHandler from 'react-outside-click-handler'
import Tile from '../Tile/Tile';

const ColorPicker = ({onChange, onOutsideClick, name}) => {

  const onColorChange = useCallback(
    (color, event) => {
      onChange(color, name)
    },
    [onChange, name],
  )

  return (
    <OutsideClickHandler onOutsideClick={onOutsideClick}>

      <div className={styles.colorPicker}>
        <div className={styles.dialog}>
          <ReactColorPicker onChange={onColorChange} />
        </div>
      </div>
    </OutsideClickHandler>
  )
}

ColorPicker.propTypes = {
  onChange: PropTypes.func.isRequired,
  onOutsideClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
}

export default ColorPicker
