import React from 'react'
import styles from './BarcodeDisplay.module.css'
import PropTypes from 'prop-types'
import Bar from './Bar'

const BarcodeDisplay = (props) => {

  const barcodeDigits = props.barcode.split('')

  return (
    <div className={styles.barcodeDisplay}>
      {barcodeDigits.map((digit, i) => (
        <Bar key={i} digit={parseInt(digit)} />
      ))}
    </div>
  )
}

BarcodeDisplay.propTypes = {
  barcode: PropTypes.string.isRequired,
}

export default BarcodeDisplay
