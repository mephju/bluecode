import React, {useState} from 'react'
import PropTypes from 'prop-types'
import CodeInput from './CodeInput'
import Checksum from './Checksum';
import Tile from '../Tile/Tile';

const BarcodeEditor = ({setCode, checksum}) => {

  return (
    <Tile title='Barcode Editor'>
      <CodeInput onChange={setCode} />
      <Checksum checksum={checksum} />
    </Tile>
  )
}

BarcodeEditor.propTypes = {
  checksum: PropTypes.number.isRequired,
  setCode: PropTypes.func.isRequired,
}

export default BarcodeEditor
