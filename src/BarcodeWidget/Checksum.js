import React from 'react'
import styles from './Checksum.module.css'
import PropTypes from 'prop-types'
import Input from '../Input/Input'



const Checksum = (props) => {

  return (
    <div className={styles.checksum}>
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
