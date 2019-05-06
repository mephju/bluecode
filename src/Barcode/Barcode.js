import React from 'react'
import styles from './Barcode.module.css'
import PropTypes from 'prop-types'
import Bar from './Bar'
import Empty from '../Empty/Empty'
import ThemeContext from '../ThemeContext'
import ChecksumBar from './ChecksumBar'

const BarcodeDisplay = (props) => {

  const digits = props.code.split('')

  if(!digits.length) {
    return <Empty> Your barcode will appear here </Empty>
  }

  return (
    <div className={styles.barcodeDisplay}>
      <ThemeContext.Consumer>
        {({primary, secondary}) => (
          <>
            {digits.map((digit, i) => (
              <Bar key={i} digit={parseInt(digit)} color={primary} />
            ))}
            <ChecksumBar checksum={props.checksum} color={secondary} />
          </>
        )}

      </ThemeContext.Consumer>
    </div>
  )
}

BarcodeDisplay.propTypes = {
  code: PropTypes.string.isRequired,
  checksum: PropTypes.number.isRequired,
}

export default BarcodeDisplay
