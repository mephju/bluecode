import React, {useState} from 'react'
// import styles from './BarcodeWidget.module.css'
import PropTypes from 'prop-types'
import Bar from './Bar';



const ChecksumBar = (props) => {


  return typeof props.checksum !== 'number' ? null : (
    <Bar digit={props.checksum} color={props.color} />
  )
}

ChecksumBar.propTypes = {
  checksum: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
}

export default ChecksumBar
