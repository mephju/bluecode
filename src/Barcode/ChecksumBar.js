import React from 'react'
import PropTypes from 'prop-types'
import Bar from './Bar'



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
