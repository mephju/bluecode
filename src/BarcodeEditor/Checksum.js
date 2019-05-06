import React from 'react'
import PropTypes from 'prop-types'
import Input from '../Input/Input'

const Checksum = (props) => {

  return (
    <div> 
      <Input
        label='Checksum'
        type='text'
        value={props.checksum}
        readOnly
      />
    </div>
  )
}

Checksum.propTypes = {
  checksum: PropTypes.number.isRequired,
}

export default Checksum
